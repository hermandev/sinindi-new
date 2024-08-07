import { Kegiatan } from "@/libs/db/types";
import { Box, Grid, Group, Paper, Text, rem } from "@mantine/core";
import { IconCar, IconPlaneTilt, IconSailboat } from "@tabler/icons-react";
import moment from "moment";
import React from "react";

type Props = {
  kegiatan: Kegiatan;
};

function CardDetail({ kegiatan }: Props) {
  return (
    <Paper withBorder p="md" radius="md">
      <Box>
        <Text fw="bolder">Kegiatan</Text>
        <Paper withBorder p="xs" mt="xs" bg="gray.0">
          <Text>{kegiatan.kegiatan}</Text>
        </Paper>
      </Box>
      <Box mt="md">
        <Text fw="bolder">Isi Surat</Text>
        <Paper withBorder p="xs" mt="xs" bg="gray.0">
          <Text>{kegiatan.isi_surat}</Text>
        </Paper>
      </Box>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <Box mt="md">
            <Text fw="bolder">Tanggal Berangkat</Text>
            <Paper withBorder p="xs" mt="xs" bg="gray.0">
              <Group justify="space-between">
                <Text>
                  {moment(kegiatan.tgl_berangkat).format("DD/MM/YYYY")} -{" "}
                  {moment(kegiatan.tgl_kembali).format("DD/MM/YYYY")}
                </Text>
                <Text>{kegiatan.jumlah_hari} Hari</Text>
              </Group>
            </Paper>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <Box mt="md">
            <Text fw="bolder">Tujuan</Text>
            <Paper withBorder p="xs" mt="xs" bg="gray.0">
              <Group justify="space-between">
                <Text>
                  {kegiatan.jenis === "LD"
                    ? kegiatan.expand.provinsi.nama
                    : kegiatan.expand.kabupaten.nama}
                </Text>
                <>
                  {kegiatan.transportasi === "UDARA" && (
                    <IconPlaneTilt
                      style={{ width: rem(20), height: rem(20) }}
                    />
                  )}
                  {kegiatan.transportasi === "LAUT" && (
                    <IconSailboat style={{ width: rem(20), height: rem(20) }} />
                  )}
                  {kegiatan.transportasi === "DARAT" && (
                    <IconCar style={{ width: rem(20), height: rem(20) }} />
                  )}
                </>
              </Group>
            </Paper>
          </Box>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default CardDetail;
