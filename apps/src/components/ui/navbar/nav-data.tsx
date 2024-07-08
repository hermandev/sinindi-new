import {
  IconBook2,
  IconBrandDatabricks,
  IconCertificate,
  IconGauge,
  IconMailCheck,
  IconSettings,
} from "@tabler/icons-react";

export const navData = [
  { label: "Dashboard", icon: IconGauge, link: "/dashboard" },
  {
    label: "Kegiatan",
    icon: IconBook2,
    link: "/kegiatan",
    links: null,
  },
  {
    label: "Verifikasi",
    icon: IconMailCheck,
    link: "/verifikasi",
    links: null,
  },
  {
    label: "Master Data",
    icon: IconBrandDatabricks,
    links: [
      { label: "Pegawai", link: "/master-data/pegawai" },
      { label: "Pangkat", link: "/master-data/pangkat" },
      { label: "Jabatan", link: "/master-data/jabatan" },
      { label: "Golongan", link: "/master-data/golongan" },
    ],
  },
  {
    label: "Settings",
    icon: IconSettings,
    link: "/settings",
    links: null,
  },
];
