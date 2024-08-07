"use server";

import { cookies } from "next/headers";
import { db } from "@/libs/db";
import { revalidatePath } from "next/cache";

export async function getDataPegawai() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("pegawai").getFullList({
    sort: "-created",
    expand: "pangkat,jabatan,golongan",
    $autoCancel: false,
  });

  return result;
}

export async function checkNipPegawai(nip: string) {
  try {
    db.authStore.loadFromCookie(cookies().toString());
    const result = await db
      .collection("pegawai")
      .getFirstListItem(`nip="${nip}"`, {
        $autoCancel: false,
      });
    return JSON.stringify({ error: false, data: result });
  } catch (error) {
    return JSON.stringify({ error: true, data: error });
  }
}

export async function checkNrpPegawai(nrp: string) {
  try {
    db.authStore.loadFromCookie(cookies().toString());
    const result = await db
      .collection("pegawai")
      .getFirstListItem(`nrp="${nrp}"`, {
        $autoCancel: false,
      });
    return JSON.stringify({ error: false, data: result });
  } catch (error) {
    return JSON.stringify({ error: true, data: error });
  }
}

export async function tambahPegawai(data: {
  nip: string;
  nrp: string;
  nama_lengkap: string;
  kelamin: string;
  no_hp: string;
  pangkat: string;
  jabatan: string;
  golongan: string;
  username: string;
  password: string;
}) {
  try {
    db.authStore.loadFromCookie(cookies().toString());
    const createUser = await db.collection("users").create({
      username: data.username,
      password: data.password,
      passwordConfirm: data.password,
      roles: "USER",
      verified: true,
    });

    const result = await db.collection("pegawai").create({
      nip: data.nip,
      nrp: data.nrp,
      nama_lengkap: data.nama_lengkap,
      kelamin: data.kelamin,
      no_hp: data.no_hp,
      jabatan: data.jabatan,
      pangkat: data.pangkat,
      golongan: data.golongan,
      id_user: createUser.id,
    });

    revalidatePath("/master-data/pegawai", "page");
    return JSON.stringify({ error: false, message: "Success", data: result });
  } catch (error) {
    return JSON.stringify({
      error: true,
      message: "NIP Atau NRP Sudah terdaftar",
      data: error,
    });
  }
}

export async function updatePegawai(data: {
  id: string;
  nip: string;
  nrp: string;
  nama_lengkap: string;
  kelamin: string;
  no_hp: string;
  pangkat: string;
  jabatan: string;
  golongan: string;
  username: string;
  password: string;
}) {
  try {
    db.authStore.loadFromCookie(cookies().toString());
    const result = await db.collection("pegawai").update(data.id, {
      nip: data.nip,
      nrp: data.nrp,
      nama_lengkap: data.nama_lengkap,
      kelamin: data.kelamin,
      no_hp: data.no_hp,
      jabatan: data.jabatan,
      pangkat: data.pangkat,
      golongan: data.golongan,
    });

    revalidatePath("/master-data/pegawai", "page");
    return JSON.stringify({ error: false, message: "Success", data: result });
  } catch (error) {
    return JSON.stringify({
      error: true,
      message: "NIP Atau NRP Sudah terdaftar",
      data: error,
    });
  }
}
