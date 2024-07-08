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

function KegiatanContainer() {
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
          <Button leftSection={<IconClipboardPlus size="1rem" />}>
            Buat Kegiatan
          </Button>
        </Group>
      </SimpleGrid>
      <Divider />

      <SimpleGrid p="md"></SimpleGrid>
    </>
  );
}

export default KegiatanContainer;
