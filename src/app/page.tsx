"use client";

import { FormJurnal } from "@/components/component/form-jurnal";
import { Button } from "@/components/ui/button";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";
import logo from "@/assets/Logo.png";
import Image from "next/image";

export default function Page() {
  const session = useSession();

  useEffect(() => {
    fetch("/api/detail/valid", { redirect: "follow" }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div className="flex items-center flex-col">
        <Image src={logo} alt="logo" className="w-24" />
      </div>
      <FormJurnal />
    </div>
  );
}
