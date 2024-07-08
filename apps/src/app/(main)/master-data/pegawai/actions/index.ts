"use server";

import { db } from "@/libs/db";

export async function getDataPegawai() {
  const result = await db.collection("pegawai").getFullList({
    sort: "-created",
  });

  return result;
}
