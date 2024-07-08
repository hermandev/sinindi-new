import { Modal } from "@mantine/core";
import React from "react";

type Props = {
  opened: boolean;
  close: () => void;
};

function ModalAddPegawai({ opened, close }: Props) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Tambah Data Pegawai"
      size="xl"
      closeOnEscape={false}
      closeOnClickOutside={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      test
    </Modal>
  );
}

export default ModalAddPegawai;
