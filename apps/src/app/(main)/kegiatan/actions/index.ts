"use server";

import { db } from "@/libs/db";
import { cookies } from "next/headers";

export async function getSettings() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("settings").getFirstListItem("", {
    expand: "provinsi",
  });

  return result;
}

export async function getDataKegiatan() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("kegiatan").getFullList({
    sort: "-created",
    expand: "provinsi,kabupaten,pegawai_kegiatan",
  });

  return result;
}
