"use server";

import { db } from "@/libs/db";

export async function getDataPangkat() {
  const result = await db.collection("pangkat").getFullList();

  return result;
}
