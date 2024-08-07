"use server";

import { db } from "@/libs/db";
import { cookies } from "next/headers";

export async function getSettings() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("settings").getFullList({
    expand: "provinsi",
    $autoCancel: false,
  });

  return result[0];
}

export async function getDataKegiatan() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("kegiatan").getFullList({
    sort: "-created",
    expand: "provinsi,kabupaten,pegawai_kegiatan",
    $autoCancel: false,
  });

  return result;
}

export async function getProvinsi() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("provinsi").getFullList({
    $autoCancel: false,
  });

  return result;
}

export async function getKabupaten(idProv: string) {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("kabupaten").getFullList({
    filter: `provinsi="${idProv}"`,
    $autoCancel: false,
  });
  return result;
}

export async function createKegiatan(data: {
  isi_surat: string;
  kegiatan: string;
  jenis: string;
  tgl_berangkat: string;
  tgl_kembali: string;
  transportasi: string;
  daerah_tujuan: string;
  jumlah_hari: number;
}) {
  try {
    db.authStore.loadFromCookie(cookies().toString());
    const reqData = {
      jenis: data.jenis,
      isi_surat: data.isi_surat,
      kegiatan: data.kegiatan,
      tgl_berangkat: data.tgl_berangkat,
      tgl_kembali: data.tgl_kembali,
      transportasi: data.transportasi,
      provinsi: data.jenis === "LD" ? data.daerah_tujuan : "",
      kabupaten: data.jenis === "DD" ? data.daerah_tujuan : "",
      jumlah_hari: data.jumlah_hari,
      status: "DRAFT",
      is_delete: true,
    };
    const result = await db.collection("kegiatan").create(reqData);

    return JSON.stringify({ error: false, status: "success", data: result });
  } catch (error) {
    return JSON.stringify({ error: true, status: "error", data: error });
  }
}
