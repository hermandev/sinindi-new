"use server";

import { db } from "@/libs/db";
import {
  BiayaHarian,
  BiayaHarianDD,
  BiayaPenginapan,
  BiayaPenginapanDD,
  BiayaTiket,
  Kegiatan,
  Usulan,
} from "@/libs/db/types";
import { cookies } from "next/headers";

export async function getKegiatanById(id: string) {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("kegiatan").getOne(id, {
    expand: "provinsi,kabupaten",
  });
  return result;
}

export async function addPegawaiLuarDaerah({
  kegiatan,
  pegawai,
  status,
}: {
  kegiatan: Kegiatan;
  pegawai: string;
  status: boolean;
}) {
  try {
    db.authStore.loadFromCookie(cookies().toString());
    const checkPegawai = await db.collection("pegawai_kegiatan").getFullList({
      filter: `kegiatan="${kegiatan.id}" && pegawai="${pegawai}"`,
    });

    if (checkPegawai.length > 0) {
      return JSON.stringify({
        error: true,
        status: "success",
        data: "Pegawai ini sudah di tambahkan",
      });
    }

    const selisihMilidetik =
      new Date(kegiatan.tgl_kembali).getTime() -
      new Date(kegiatan.tgl_berangkat).getTime();
    const selisihHari = selisihMilidetik / (1000 * 60 * 60 * 24);
    const selisihPenginapan = selisihMilidetik / (1000 * 60 * 60 * 24) - 1;

    const uangHarian: BiayaHarian[] | null = await db
      .collection("biaya_harian")
      .getFullList({ filter: `id_provinsi="${kegiatan.provinsi}"` });

    const uangTiket: BiayaTiket[] | null = await db
      .collection("biaya_tiket")
      .getFullList({ filter: `id_provinsi="${kegiatan.provinsi}"` });

    const uangPenginapan: BiayaPenginapan[] | null = await db
      .collection("biaya_penginapan")
      .getFullList({ filter: `id_provinsi="${kegiatan.provinsi}"` });

    const uangTransport = await db
      .collection("biaya_transport")
      .getFullList({ filter: `id_provinsi="${kegiatan.provinsi}"` });

    const uangTransportDD = await db
      .collection("biaya_transport")
      .getFullList({ filter: `id_provinsi="75"` });

    let hitungUangHarian: number = 0;
    let hitungTiket: number = 0;
    let hitungPenginapan: number = 0;
    let hitungTransport: number = 0;
    let hitungTransportDD: number = 0;

    if (uangHarian[0]?.harga_ld !== undefined) {
      hitungUangHarian = Number(uangHarian[0]?.harga_ld) * selisihHari;
    }

    if (uangTiket[0]?.ekonomi !== undefined) {
      hitungTiket = Number(uangTiket[0]?.ekonomi) * 2;
    }

    if (uangPenginapan[0]?.eselon_empat !== undefined) {
      hitungPenginapan =
        Number(uangPenginapan[0]?.eselon_empat) * selisihPenginapan;
    }

    if (uangTransport[0]?.harga !== undefined) {
      hitungTransport = Number(uangTransport[0]?.harga) * 2;
    }

    if (uangTransportDD[0]?.harga !== undefined) {
      hitungTransportDD = Number(uangTransportDD[0]?.harga) * 2;
    }

    const pegawaiKegiatan = await db.collection("pegawai_kegiatan").create({
      kegiatan: kegiatan.id,
      pegawai: pegawai,
      status: status ? "KETUA" : "PENGIKUT",
    });
    const dataUsulan: Usulan[] = [
      {
        pk: pegawaiKegiatan.id,
        jumlah: selisihHari,
        keterangan: "UANG HARIAN",
        no: 1,
        total_biaya: Number(hitungUangHarian),
        total_bayar: Number(hitungUangHarian) * selisihHari,
      },
      {
        pk: pegawaiKegiatan.id,
        jumlah: 2,
        keterangan: "TIKET PP",
        no: 2,
        total_biaya: Number(hitungTiket),
        total_bayar: Number(hitungTiket) * 2,
      },
      {
        pk: pegawaiKegiatan.id,
        jumlah: selisihPenginapan,
        keterangan: "PENGINAPAN",
        no: 3,
        total_biaya: Number(hitungPenginapan),
        total_bayar: Number(hitungPenginapan) * selisihPenginapan,
      },
      {
        pk: pegawaiKegiatan.id,
        jumlah: 2,
        keterangan: `TRANSPORTASI ${kegiatan.expand.provinsi.nama} PP`,
        no: 4,
        total_biaya: Number(hitungTransport),
        total_bayar: Number(hitungTransport) * 2,
      },
      {
        pk: pegawaiKegiatan.id,
        jumlah: 2,
        keterangan: `TRANSPORTASI GORONTALO PP`,
        no: 5,
        total_biaya: Number(hitungTransportDD),
        total_bayar: Number(hitungTransportDD) * 2,
      },
    ];

    const result = await saveUsulan(dataUsulan);
    return JSON.stringify({ error: false, status: "success", data: result });
  } catch (error) {
    return JSON.stringify({ error: true, status: "error", data: error });
  }
}

export async function addPegawaiDalamDaerah({
  kegiatan,
  pegawai,
  status,
}: {
  kegiatan: Kegiatan;
  pegawai: string;
  status: boolean;
}) {
  try {
    db.authStore.loadFromCookie(cookies().toString());
    const checkPegawai = await db.collection("pegawai_kegiatan").getFullList({
      filter: `kegiatan="${kegiatan.id}" && pegawai="${pegawai}"`,
    });

    if (checkPegawai.length > 0) {
      return JSON.stringify({
        error: true,
        status: "success",
        data: "Pegawai ini sudah di tambahkan",
      });
    }

    const selisihMilidetik =
      new Date(kegiatan.tgl_kembali).getTime() -
      new Date(kegiatan.tgl_berangkat).getTime();
    const selisihHari = selisihMilidetik / (1000 * 60 * 60 * 24);
    const selisihPenginapan = selisihMilidetik / (1000 * 60 * 60 * 24) - 1;

    const uangHarian: BiayaHarianDD[] | null = await db
      .collection("biaya_harian_dd")
      .getFullList({ filter: `id_kabupaten="${kegiatan.kabupaten}"` });

    const uangPenginapan: BiayaPenginapanDD[] | null = await db
      .collection("biaya_penginapan_dd")
      .getFullList({ filter: `id_kabupaten="${kegiatan.kabupaten}"` });

    const uangTransportDD = await db
      .collection("biaya_transport_dd")
      .getFullList({ filter: `id_kabupaten="${kegiatan.kabupaten}"` });

    let hitungUangHarian: number = 0;
    let hitungPenginapan: number = 0;
    let hitungTransport: number = 0;

    if (uangHarian[0]?.harga !== undefined) {
      hitungUangHarian = Number(uangHarian[0]?.harga) * selisihHari;
    }

    if (uangPenginapan[0]?.eselon_empat !== undefined) {
      hitungPenginapan =
        Number(uangPenginapan[0]?.eselon_empat) * selisihPenginapan;
    }

    if (uangTransportDD[0]?.harga !== undefined) {
      hitungTransport = Number(uangTransportDD[0]?.harga) * 2;
    }

    const pegawaiKegiatan = await db.collection("pegawai_kegiatan").create({
      kegiatan: kegiatan.id,
      pegawai: pegawai,
      status: status ? "KETUA" : "PENGIKUT",
    });

    const dataUsulan: Usulan[] = [
      {
        pk: pegawaiKegiatan.id,
        jumlah: selisihHari,
        keterangan: "UANG HARIAN",
        no: 1,
        total_biaya: Number(hitungUangHarian),
        total_bayar: Number(hitungUangHarian) * selisihHari,
      },
      {
        pk: pegawaiKegiatan.id,
        jumlah: selisihPenginapan,
        keterangan: "PENGINAPAN",
        no: 2,
        total_biaya: Number(hitungPenginapan),
        total_bayar: Number(hitungPenginapan) * selisihPenginapan,
      },
      {
        pk: pegawaiKegiatan.id,
        jumlah: 2,
        keterangan: `TRANSPORTASI ${kegiatan.expand?.kabupaten.nama} PP`,
        no: 3,
        total_biaya: Number(hitungTransport),
        total_bayar: Number(hitungTransport) * 2,
      },
    ];
    const result = await saveUsulan(dataUsulan);
    return JSON.stringify({ error: false, status: "success", data: result });
  } catch (error) {
    return JSON.stringify({ error: true, status: "error", data: error });
  }
}

async function saveUsulan(data: Usulan[]) {
  db.authStore.loadFromCookie(cookies().toString());
  const result = data.map((item) => {
    return db.collection("usulan").create(item, {
      $autoCancel: false,
    });
  });

  return Promise.all(result);
}

export async function getPegawaiByKegiatan(kegiatan: string) {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("pegawai_kegiatan").getFullList({
    filter: `kegiatan="${kegiatan}"`,
    expand: "pegawai.pangkat, usulan_via_pk",
    sort: "status,usulan_via_pk.no",
  });

  return result;
}

export async function getDasarSprintByKegiatan(kegiatan: string) {
  db.authStore.loadFromCookie(cookies().toString());
  const result = await db.collection("dasar_sprint").getFullList({
    filter: `kegiatan="${kegiatan}"`,
    sort: "created",
  });

  return result;
}
