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
