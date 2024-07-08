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
