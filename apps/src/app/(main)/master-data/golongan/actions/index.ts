"use server";

import { db } from "@/libs/db";

export async function getDataGolongan() {
  const result = await db.collection("golongan").getFullList();

  return result;
}
