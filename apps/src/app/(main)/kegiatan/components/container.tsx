"use client";
import { useAppDispatch } from "@/libs/redux/hooks";
import { modalAddKegiatan } from "@/libs/redux/reducers/kegiatan-slice";
import {
  Box,
  Button,
  Divider,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { IconClipboardPlus } from "@tabler/icons-react";
import React from "react";
import TableKegiatan from "./table-kegiatan";

function KegiatanContainer() {
  const dispatch = useAppDispatch();
  return (
    <>
      <SimpleGrid p="md">
        <Group justify="space-between">
          <Box>
            <Title order={3}>Kegiatan</Title>
            <Text size="xs" c="dimmed" fs="italic">
              Data Kegiatan Perjalanan Dinas
            </Text>
          </Box>
          <Button
            leftSection={<IconClipboardPlus size="1rem" />}
            onClick={() => dispatch(modalAddKegiatan(true))}
          >
            Buat Kegiatan
          </Button>
        </Group>
      </SimpleGrid>
      <Divider />

      <SimpleGrid p="md">
        <TableKegiatan />
      </SimpleGrid>
    </>
  );
}

export default KegiatanContainer;
