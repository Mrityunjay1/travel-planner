"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import Image from "next/image";

import { Architects_Daughter } from "next/font/google";
import { useState } from "react";
import { apiClient } from "@/lib";
import { ADMIN_API_ROUTES } from "@/utils";
import { useAppStore } from "@/store";
import { useRouter } from "next/navigation";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

type Props = {};
function Login({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { setUserInfo } = useAppStore();
  const handleLogin = async () => {
    try {
      const response = await apiClient.post(ADMIN_API_ROUTES.LOGIN, {
        email,
        password,
      });
      if (response.data.userInfo) {
        setUserInfo(response.data.userInfo);
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/home/home-bg.jpeg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>
      <Card className="shadow-2xl bg-opacity-20 w-[480px]">
        <CardHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
          <div className="flex flex-col gap-1 capitalize text-3xl items-center">
            <Image
              src="/logo.png"
              alt="logo"
              height={80}
              width={80}
              className="cursor-pointer"
            />
            <span className="text-xl uppercase font-medium italic text-white">
              <span className={ArchitectsDaughter.className}>
                Travel Admin Login
              </span>
            </span>
          </div>
        </CardHeader>
        <CardBody className="flex flex-col items-center w-full justify-center">
          <div className="flex flex-col gap-2 w-full">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="default"
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="default"
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 items-center justify-center ">
          <Button
            color="secondary"
            variant="shadow"
            className="w-full capitalize"
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Login;
