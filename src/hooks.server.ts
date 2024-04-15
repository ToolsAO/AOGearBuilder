import { start_mongo } from "$db/mongo";
import type { HandleServerError } from "@sveltejs/kit";


start_mongo().then(() => {
	console.log('Mongo started');
}).catch(e => {console.error(e)});

export const handleError: HandleServerError = async ({ error, event, status, message }) => {
	if (message.startsWith("Not Found")) {
		console.warn(error);
		return;
	}
	console.error(error);
};