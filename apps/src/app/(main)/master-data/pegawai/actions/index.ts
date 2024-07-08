"use server";

import { cookies } from "next/headers";
import { db } from "@/libs/db";
import { revalidatePath } from "next/cache";

export async function getDataPegawai() {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("pegawai").getFullList({
    sort: "-created",
  });

  return result;
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

    revalidatePath("/master-data/pegawai");
    return JSON.stringify(result);
  } catch (error) {
    return JSON.stringify(error);
  }
}
