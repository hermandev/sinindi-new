"use server";

import { db } from "@/libs/db";
import { cookies } from "next/headers";

export async function getDataPangkat() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("pangkat").getFullList();

  return result;
}
