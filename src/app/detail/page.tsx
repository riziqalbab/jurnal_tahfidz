"use client";
// import { useSession } from "next-auth/client";

import { useSession } from "next-auth/react";

import { FormDetail } from "@/components/component/form-detail";

function Page() {
  const session = useSession();
  const userData = session.data;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <FormDetail
        nama={userData?.user?.name as string}
        nis={userData?.nis as string}
      />
    </div>
  );
}

export default Page;
