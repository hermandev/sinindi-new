"use server";

import { db } from "@/libs/db";
import { cookies } from "next/headers";

export async function getDataGolongan() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("golongan").getFullList();

  return result;
}
