import { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./link-group.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[] | null;
  link?: string;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
}: LinksGroupProps) {
  const path = usePathname();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component={Link}
      className={path === link.link ? classes.linkActive : classes.link}
      href={link.link}
      key={link.label}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      {hasLinks ? (
        <>
          <UnstyledButton
            onClick={() => setOpened((o) => !o)}
            className={
              links.filter((item) => item.link === path).length > 0
                ? classes.active
                : classes.control
            }
          >
            <Group justify="space-between" gap={0}>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <ThemeIcon variant="light" size={30}>
                  <Icon style={{ width: rem(18), height: rem(18) }} />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </Box>
              {hasLinks && (
                <IconChevronRight
                  className={classes.chevron}
                  stroke={1.5}
                  style={{
                    width: rem(16),
                    height: rem(16),
                    transform: opened ? "rotate(-90deg)" : "none",
                  }}
                />
              )}
            </Group>
          </UnstyledButton>
          {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
      ) : (
        <UnstyledButton
          className={path === link ? classes.active : classes.control}
          component={Link}
          href={link!}
        >
          <Group justify="space-between" gap={0}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
            {hasLinks && (
              <IconChevronRight
                className={classes.chevron}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? "rotate(-90deg)" : "none",
                }}
              />
            )}
          </Group>
        </UnstyledButton>
      )}
    </>
  );
}
