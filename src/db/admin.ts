import client from "$db/mongo";

export const admin = client.db("admin");