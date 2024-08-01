"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {};
function Admin({}: Props) {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/dashboard");
  }, [router]);
  return null;
}
export default Admin;
