import React from "react";
import { Group, useMantineTheme } from "@mantine/core";
import Image from "next/image";

export function Logo({ size }: { size: number }) {
  const theme = useMantineTheme();
  return (
    <Group justify="start" align="center">
      <Image src="/logo.png" alt="logo" width={size} height={size} />
      <span
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: theme.colors.dark[5].toString(),
        }}
      >
        SININDI
      </span>
    </Group>
  );
}
