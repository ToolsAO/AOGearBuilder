import { AOTools } from '$db/AOTools.js';
import { admin } from '$db/admin.js';
import type { anyItem } from '$lib/itemTypes.js';
import { fail } from '@sveltejs/kit';

let itemsDB = AOTools.collection<anyItem>("items");

async function verifyPassword(password:string) {
	let passwordobj = await admin.collection("password").findOne({"password":password});
	if (passwordobj == null || passwordobj["active"] != true) {
		return fail(403, { "error":"Password incorrect" });
	}
	return true;
}

const maxIdGen = 100;
const idLength:number = 3;

const characters:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function getRandomId() {
	let id:string = "";
	for (let i = 0; i < idLength; i++) {
		id += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return id;
}

function checkAttributes(item:anyItem) {
	let attributes = ["id","name","legend","mainType","rarity","imageId","deleted"];

	for (let attribute of attributes) {
		if (!(attribute in item)) {
			return attribute;
		}
	}

	return true;
}

export async function load({ fetch, setHeaders }) {

    const data = await itemsDB.find({}, {projection: {
		_id: 0
	}}).toArray();


	return {
		items: data
	}
}

/*

example data:

itemData: {"id":"","name":"Test","legend":"This is for testing","mainType":"Chestplate","rarity":"Legendary","imageId":"https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/unknown.jpg", "deleted":false,"subType":"Magic","gemNo":2,"statsPerLevel":[{"level":70,"power":1,"attackSpeed":10},{"level":80,"power":2,"attackSpeed":20},{"level":90,"power":3,"attackSpeed":30},{"level":100,"power":4,"attackSpeed":40},{"level":110,"power":5,"attackSpeed":50},{"level":120,"power":6,"attackSpeed":60}],"validModifiers":["Atlantean Essence","Frozen","Superheated","Blasted"]}
password: example
name: Test
rarity: Legendary
mainType: Chestplate
subType: Magic
gemNo: 2
minLevel: 70
maxLevel: 120
legend: This is for testing
imageId: https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/unknown.jpg

*/



export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		let validPass = await verifyPassword((formData.get("password") as string));
		if (validPass != true) {
			return validPass;
		}

        let item:anyItem = JSON.parse((formData.get("itemData") as string));

		// do validating checks
		let validAttributes = checkAttributes(item);
		if (validAttributes != true) {
			return fail(403, { "error": `Missing ${validAttributes}` });
		}

		let newId = getRandomId();
		let generatedIds = 0;

		while (await itemsDB.findOne({"id":newId}, {projection: {_id: 0, id:1}})) {
			newId = getRandomId();
			generatedIds += 1;
			if (generatedIds > maxIdGen) {
				return fail(403, { "error":"Something has gone wrong. Reached max IDs generated. The database maybe full please contact a developer." });
			}
		}
		item.id = newId;

        await AOTools.collection("items").insertOne(item);
	},
	edit: async ({ request }) => {
		const formData = await request.formData();
		let validPass = await verifyPassword((formData.get("password") as string));
		if (validPass != true) {
			return validPass;
		}

		let item:anyItem = JSON.parse((formData.get("itemData") as string));

		// do validating checks
		let validAttributes = checkAttributes(item);
		if (validAttributes != true) {
			return fail(403, { "error": `Missing ${validAttributes}` });
		}

		await AOTools.collection("items").updateOne({"id":item.id}, { $set: item});
	}
};