"use server";

import { db } from "@/libs/db";
import { cookies } from "next/headers";

export async function getDataJabatan() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("jabatan").getFullList();

  return result;
}
