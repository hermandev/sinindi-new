"use client";
import { Box, Divider, Group, SimpleGrid, Title } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimpleGrid p="md">
        <Group justify="space-between">
          <Box>
            <Title order={3}>Settings</Title>
            {/* <Text size="xs" c="dimmed" fs="italic"> */}
            {/*   Verifikasi Berkas Perjalanan Dinas */}
            {/* </Text> */}
          </Box>
        </Group>
      </SimpleGrid>
      <Divider />
      {children}
    </>
  );
}
