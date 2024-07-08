"use server";

import { db } from "@/libs/db";

export async function getDataJabatan() {
  const result = await db.collection("jabatan").getFullList();

  return result;
}
