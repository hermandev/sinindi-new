import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "SININDI | Login",
  description: "Login - SININDI",
};

const FormLogin = dynamic(() => import("./components/form-login"), {
  ssr: false,
});

async function LoginPage() {
  return <FormLogin />;
}

export default LoginPage;
