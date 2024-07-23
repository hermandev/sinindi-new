"use server";

import { db } from "@/libs/db";
import { cookies } from "next/headers";

export async function getDataBiayaHarian() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("biaya_harian").getFullList({
    expand: "id_provinsi",
  });

  return result;
}

export async function getDataBiayaHarianDd() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("biaya_harian_dd").getFullList({
    expand: "id_kabupaten",
  });

  return result;
}

export async function getDataBiayaPenginapan() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("biaya_penginapan").getFullList({
    expand: "id_provinsi",
  });

  return result;
}

export async function getDataBiayaPenginapanDd() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("biaya_penginapan_dd").getFullList({
    expand: "id_kabupaten",
  });

  return result;
}

export async function getDataBiayaTiket() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("biaya_tiket").getFullList({
    expand: "id_provinsi",
  });

  return result;
}

export async function getDataBiayaTaksi() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("biaya_transport").getFullList({
    expand: "id_provinsi",
  });

  return result;
}

export async function getDataBiayaTaksiDd() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("biaya_transport_dd").getFullList({
    expand: "id_kabupaten",
  });

  return result;
}
