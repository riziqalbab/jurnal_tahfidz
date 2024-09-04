"use client";

import TableJurnal from "@/components/component/table-jurnal";

import TableJurnalAdmin from "@/components/component/table-jurnal-admin";
import db from "@/db/db";
import { jurnal_user, users } from "@/db/schema/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";

interface object_jurnal {
  id: string;
  ayat: number;
  surah: string;
  catatan: string;
  tanggal: string;
}

interface object_user {
  id: string;
  name: string;
  nis: string;
  kelas: string;
}

// const getJurnalUser = async (id_user: string) => {
//   const data = await db
//     .select()
//     .from(jurnal_user)
//     .where(eq(jurnal_user.id_user, id_user));
//   return data;
// };

// const getUserInfo = async (id_user: string) => {
//   const data = await db.select().from(users).where(eq(users.id, id_user));
//   return data;
// };

export default function Page({ params }: { params: { id: string } }) {
  const [userData, setUserData] = useState<object_user>();
  const [jurnal_data, setJurnalData] = useState();

  useEffect(() => {
    fetch(`/api/admin/user?id_user=${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);

        setUserData(data.data[0]);
      });
    fetch(`/api/admin/jurnal?id_user=${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setJurnalData(data.data);
      });
  }, [params.id]);

  return (
    <>
      <main>
        <TableJurnalAdmin
          data={jurnal_data as unknown as Array<object_jurnal>}
          nama={userData?.name as string}
          kelas={userData?.kelas as string}
        />
      </main>
    </>
  );
}
