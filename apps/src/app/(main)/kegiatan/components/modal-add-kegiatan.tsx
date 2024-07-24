import {
  Button,
  Grid,
  Group,
  Modal,
  Radio,
  SimpleGrid,
  TextInput,
  rem,
} from "@mantine/core";
import React, { useEffect, useState, useTransition } from "react";
import { getSettings } from "../actions";
import { Settings } from "@/libs/db/types";
import { IconPlus } from "@tabler/icons-react";

type Props = {
  opened: boolean;
  close: () => void;
};

function ModalAddKegiatan({ opened, close }: Props) {
  const [isPending, startTransition] = useTransition();
  const [settings, setSettings] = useState<Settings | null>(null);

  const initData = () => {
    startTransition(async () => {
      const result = await getSettings();
      setSettings(result as Settings);
    });
  };

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Buat Kegiatan"
      size="lg"
      closeOnEscape={false}
      closeOnClickOutside={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <form>
        <SimpleGrid>
          <TextInput
            label="Surat"
            withAsterisk
            placeholder="Masukan Isi Surat"
          />
        </SimpleGrid>
        <SimpleGrid mt="md">
          <TextInput
            label="Kegiatan"
            withAsterisk
            placeholder="Masukan Judul Kegiatan"
          />
        </SimpleGrid>
        <Grid mt="md">
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Radio.Group label="Tempat Pelaksanaan" withAsterisk>
              <Group mt="sm">
                <Radio value="DD" label="Dalam Provinsi" />
                <Radio value="LD" label="Luar Provinsi" />
              </Group>
            </Radio.Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <TextInput label="Pilih Provinsi" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Radio.Group label="Transportasi" withAsterisk>
              <Group mt="sm">
                <Radio value="DARAT" label="Darat" />
                <Radio value="LAUT" label="Laut" />
                <Radio value="UDARA" label="Udara" />
              </Group>
            </Radio.Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <TextInput label="Tanggal Berangkat & Kembali" />
          </Grid.Col>
        </Grid>
        <Group justify="end" mt="lg">
          <Button
            leftSection={
              <IconPlus style={{ width: rem(16), height: rem(16) }} />
            }
          >
            Buat Kegiatan
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default ModalAddKegiatan;
