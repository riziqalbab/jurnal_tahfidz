"use client";

import { FormJurnal } from "@/components/component/form-jurnal";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";

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
      <FormJurnal />
    </div>
  );
}
