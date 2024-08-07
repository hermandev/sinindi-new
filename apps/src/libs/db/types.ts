export type Pegawai = {
  id: string;
  nip: string;
  nrp: string;
  nama_lengkap: string;
  no_hp: string;
  kelamin: string;
  pangkat: string;
  jabatan: string;
  golongan: string;
  expand: {
    pangkat: Pangkat;
    jabatan: Jabatan;
    golongan: Golongan;
  };
};

export type Pangkat = {
  id: string;
  nama: string;
};

export type Jabatan = {
  id: string;
  nama: string;
};

export type Golongan = {
  id: string;
  nama: string;
};

export type BiayaHarian = {
  collectionId: string;
  collectionName: string;
  created: string;
  expand: {
    id_provinsi: Provinsi;
  };
  harga_dd: number;
  harga_diklat: number;
  harga_ld: number;
  id: string;
  id_provinsi: string;
  satuan: string;
  updated: string;
};

export type BiayaHarianDD = {
  collectionId: string;
  collectionName: string;
  created: string;
  expand: {
    id_kabupaten: Kabupaten;
  };
  harga: number;
  id: string;
  id_kabupaten: string;
  satuan: string;
  updated: string;
};

export type BiayaPenginapan = {
  collectionId: string;
  collectionName: string;
  created: string;
  eselon_dua: number;
  eselon_empat: number;
  eselon_satu: number;
  eselon_tiga: number;
  expand: {
    id_provinsi: Provinsi;
  };
  id: string;
  id_provinsi: string;
  satuan: string;
  updated: string;
};

export type BiayaPenginapanDD = {
  collectionId: string;
  collectionName: string;
  created: string;
  eselon_dua: number;
  eselon_empat: number;
  eselon_satu: number;
  eselon_tiga: number;
  expand: {
    id_kabupaten: Kabupaten;
  };
  id: string;
  id_kabupaten: string;
  satuan: string;
  updated: string;
};

export type BiayaTiket = {
  bisnis: number;
  collectionId: string;
  collectionName: string;
  created: string;
  ekonomi: number;
  expand: {
    id_provinsi: Provinsi;
  };
  id: string;
  id_provinsi: string;
  satuan: string;
  updated: string;
};

export type BiayaTaksi = {
  collectionId: string;
  collectionName: string;
  created: string;
  expand: {
    id_provinsi: Provinsi;
  };
  harga: number;
  id: string;
  id_provinsi: string;
  satuan: string;
  updated: string;
};

export type BiayaTaksiDD = {
  collectionId: string;
  collectionName: string;
  created: string;
  expand: {
    id_kabupaten: Kabupaten;
  };
  harga: number;
  id: string;
  id_kabupaten: string;
  satuan: string;
  updated: string;
};

export type Settings = {
  bendahara: string;
  collectionId: string;
  collectionName: string;
  created: string;
  expand: {
    provinsi: Provinsi;
  };
  id: string;
  kpa: string;
  ksbg_renmin: string;
  provinsi: string;
  updated: string;
  waka: string;
};

export type Kegiatan = {
  id: string;
  isi_surat: string;
  kegiatan: string;
  jenis: string;
  tgl_berangkat: string;
  tgl_kembali: string;
  transportasi: string;
  no_sprint: string;
  no_nota: string;
  no_sppd: string;
  status: string;
  provinsi: string;
  kabupaten: string;
  expand: {
    provinsi: Provinsi;
    kabupaten: Kabupaten;
  };
  is_delete: boolean;
  jumlah_hari: number;
};

export interface Provinsi {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  nama: string;
  updated: string;
}

export type Kabupaten = {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  nama: string;
  provinsi: string;
  updated: string;
};

export type Usulan = {
  id?: string;
  pk: string;
  no: number;
  jumlah: number;
  keterangan: string;
  total_biaya: number;
  total_bayar: number;
};

export type PegawaiKegiatan = {
  id: string;
  Pegawai: string;
  kegiatan: string;
  status: string;
  expand: {
    pegawai: Pegawai;
    kegiatan: Kegiatan;
  };
  created: string;
  updated: string;
};
