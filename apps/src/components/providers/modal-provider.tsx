"use client";
import ModalAddPegawaiKegiatan from "@/app/(main)/kegiatan/[id]/components/modal-add-pegawai-kegiatan";
import ModalAddSprint from "@/app/(main)/kegiatan/[id]/components/modal-add-sprint";
import ModalAddKegiatan from "@/app/(main)/kegiatan/components/modal-add-kegiatan";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import {
  modalAddKegiatan,
  modalAddPegawaiKegiatan,
  modalAddSprint,
} from "@/libs/redux/reducers/kegiatan-slice";
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
  const kegiatan = useAppSelector((x) => x.kegiatan);

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

      {kegiatan.kegiatan.modalAdd && (
        <ModalAddKegiatan
          opened={kegiatan.kegiatan.modalAdd}
          close={() => dispatch(modalAddKegiatan(false))}
        />
      )}

      {kegiatan.pegawai.modalAdd && (
        <ModalAddPegawaiKegiatan
          opened={kegiatan.pegawai.modalAdd}
          close={() =>
            dispatch(modalAddPegawaiKegiatan({ state: false, item: null }))
          }
        />
      )}

      {kegiatan.sprint.modalAddSprint && (
        <ModalAddSprint
          opened={kegiatan.sprint.modalAddSprint}
          close={() => dispatch(modalAddSprint({ state: false, item: null }))}
        />
      )}
    </>
  );
}

export default ModalProvider;
