"use server";
import { db } from "@/libs/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Melakukan Login User
 * @param {string} username, password - username atau email user
 * @returns {Object}
 */
export async function userLogin({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<string> {
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

/**
 * User LogOut
 * @returns {void}
 */
export async function logOut(): Promise<void> {
  db.authStore.clear();
  cookies().delete("pb_auth");
  redirect("/login");
}
