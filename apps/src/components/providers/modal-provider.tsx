"use client";
import ModalAddKegiatan from "@/app/(main)/kegiatan/components/modal-add-kegiatan";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { modalAddKegiatan } from "@/libs/redux/reducers/kegiatan-slice";
import {
  modalAddPegawai,
  modalUpdatePegawai,
} from "@/libs/redux/reducers/master-data-slice";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const ModalAddPegawai = dynamic(
  () => import("@/app/(main)/master-data/pegawai/components/modal-add-pegawai"),
  { ssr: false },
);
const ModalUpdatePegawai = dynamic(
  () =>
    import("@/app/(main)/master-data/pegawai/components/modal-update-pegawai"),
  { ssr: false },
);

function ModalProvider({ children }: Readonly<{ children: ReactNode }>) {
  const dispatch = useAppDispatch();
  const masterData = useAppSelector((x) => x.masterData);
  const kegiatan = useAppSelector((x) => x.kegiatan.kegiatan);

  return (
    <>
      {children}

      {masterData.pegawai.add && (
        <ModalAddPegawai
          opened={masterData.pegawai.add}
          close={() => dispatch(modalAddPegawai(false))}
        />
      )}

      {masterData.pegawai.update && (
        <ModalUpdatePegawai
          opened={masterData.pegawai.update}
          close={() =>
            dispatch(modalUpdatePegawai({ state: false, item: null }))
          }
        />
      )}

      {kegiatan.modalAdd && (
        <ModalAddKegiatan
          opened={kegiatan.modalAdd}
          close={() => dispatch(modalAddKegiatan(false))}
        />
      )}
    </>
  );
}

export default ModalProvider;
