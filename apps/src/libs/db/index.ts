import PB from "pocketbase";
export const db = new PB(process.env.NEXT_PUBLIC_API_URL);
