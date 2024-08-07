"use client";
import {
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useState, useTransition } from "react";
import CardDetail from "./card-detail";
import { getKegiatanById } from "../actions";
import CardPegawai from "./card-pegawai";

type Props = {
  id: string;
};

function PageContainer({ id }: Props) {
  const [kegiatan, setKegiatan] = useState<any | null>(null);
  const [, startInitData] = useTransition();
  const initData = () => {
    startInitData(async () => {
      const result = await getKegiatanById(id);
      setKegiatan(result);
    });
  };

  useEffect(() => {
    initData();
  }, [id]);
  return (
    <>
      <Container>
        <SimpleGrid p="md">
          <Group justify="space-between">
            <Box>
              <Title order={3}>Detail Kegiatan</Title>
              {/* <Text size="xs" c="dimmed" fs="italic"> */}
              {/* </Text> */}
            </Box>
            <Button
              variant="outline"
              leftSection={<IconChevronLeft size="1rem" />}
              component={Link}
              href="/kegiatan"
            >
              Kembali
            </Button>
          </Group>
        </SimpleGrid>
      </Container>
      <Container mt="md">
        {kegiatan && <CardDetail kegiatan={kegiatan} />}
        {kegiatan && <CardPegawai kegiatan={kegiatan} />}
      </Container>
    </>
  );
}

export default PageContainer;
