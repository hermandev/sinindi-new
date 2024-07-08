"use client";
import React, { useTransition } from "react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  Box,
  Center,
} from "@mantine/core";
import classes from "./form-login.module.css";
import Link from "next/link";
import Image from "next/image";
import { useForm, zodResolver } from "@mantine/form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { db } from "@/libs/db";

const FormSchema = z.object({
  username: z.string().min(1, { message: "Tidak boleh kosong" }),
  password: z.string().min(1, { message: "Tidak boleh kosong" }),
});

function FormLogin() {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    validate: zodResolver(FormSchema),
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = (data: z.infer<typeof FormSchema>) => {
    startTransition(async () => {
      // const result = JSON.parse(
      //   await userLogin({ username: data.username, password: data.password }),
      // );
      // // .then((result) => {
      // //   console.log(result);
      // //   localStorage.removeItem("pocketbase_auth");
      // //   router.replace("/dashboard");
      // // })
      // // .catch((err) => {
      // //   console.log(err);
      // // });
      // console.log(result);

      await db
        .collection("users")
        .authWithPassword(data.username, data.password)
        .then((result: any) => {
          console.log(result);
          document.cookie = db.authStore.exportToCookie({
            httpOnly: false,
            secure: true,
          });
          localStorage.removeItem("pocketbase_auth");
          router.replace("/dashboard");
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
  };

  return (
    <form
      onSubmit={form.onSubmit(
        (values) => new Promise(() => handleLogin(values)),
      )}
    >
      <Group justify="right" className={classes.wrapper}>
        <Group justify="center" grow className={classes.heroImg}>
          <Image
            src="/image/transport.svg"
            alt="hero"
            width={700}
            height={700}
          />
        </Group>
        <Paper
          className={classes.form}
          radius={0}
          p="xl"
          withBorder
          shadow="md"
        >
          <Box>
            <Center>
              <Image src="/image/logo.png" alt="logo" width={50} height={50} />
            </Center>
            <Box className={classes.textCenter}>
              <Title order={2} className={classes.title} mt="sm">
                SININDI
              </Title>
              <Text mb="md" c="dimmed">
                Sistem Adminstrasi Perjalanan Dinas
              </Text>
            </Box>

            <TextInput
              label="Username"
              placeholder="username"
              {...form.getInputProps("username")}
            />
            <PasswordInput
              label="Password"
              placeholder="*****"
              mt="md"
              {...form.getInputProps("password")}
            />
            <Group justify="space-between">
              <Checkbox label="Remember Me" mt="sm" />
              <Anchor href="/" component={Link} mt="sm" size="sm">
                Lupa Password ?
              </Anchor>
            </Group>
            <Button fullWidth mt="md" type="submit" loading={isPending}>
              Masuk
            </Button>
          </Box>
        </Paper>
      </Group>
    </form>
  );
}

export default FormLogin;
