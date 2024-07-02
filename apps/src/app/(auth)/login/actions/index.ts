"use server";
import { db } from "@/libs/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authLogin(username: string, password: string) {
  const result = await new Promise((resolve, _) => {
    db.collection("users")
      .authWithPassword(username, password)
      .then(async (result) => {
        return resolve({ error: false, ...result });
      })
      .catch((error) => {
        console.log(error);
        return resolve({ error: true, ...error.reponse });
      });
  });

  console.log(result);
  return JSON.stringify(result);
}

export async function logOut() {
  db.authStore.clear();
  cookies().delete("pb_auth");
  redirect("/login");
}
