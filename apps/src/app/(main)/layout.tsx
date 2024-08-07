"use client";
import { AppShell, Burger, Code, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./layout.module.css";
import { Logo } from "@/components/ui/navbar/logo";
import Navbar from "@/components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group justify="space-between" className={classes.header}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Logo size={30} />
          <Code fw={700}>v0.2.0</Code>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main bg="gray.0">{children}</AppShell.Main>
    </AppShell>
  );
}
