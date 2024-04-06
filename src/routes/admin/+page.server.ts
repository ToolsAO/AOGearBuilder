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

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function numberToUid(number:number) {
    let result = '';

    while (number > 0) {
        let remainder = (number - 1) % characters.length;
        result = characters[remainder] + result;
        number = Math.floor((number - 1) / characters.length);

    }

    return result;
}

function uidToNumber(uid:string) {
    let number = 0;

    for (let i = 0; i < uid.length; i++) {
        number = (number * characters.length) + characters.indexOf(uid[i]) + 1;
    }

    return number;
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

		let lastItem:anyItem|null = await itemsDB.findOne({}, {projection: {_id: 0, id:1}, sort:{id:-1}});
		let newId = "a";

		if (lastItem) {
			newId = numberToUid(uidToNumber(lastItem.id)+1);
		}

		if (await itemsDB.findOne({"id":newId}, {projection: {_id: 0, id:1}})) {
			return fail(403, { "error":"Something has gone wrong ID already exists" });
		}
		item.id = newId;

        await AOTools.collection("items").insertOne(item);
	}
};