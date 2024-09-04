import { TableAdminUser } from "@/components/component/table-admin-user";
import db from "@/db/db";
import { users } from "@/db/schema/schema";

const getUser = async () => {
  const result = await db.select().from(users);

  return result;
};

interface Table_Data {
  id: string;
  name: string;
  kelas: string;
  whatsapp: string;
}
async function Page() {
  const data_user = await getUser();

  return (
    <main className="w-screen p-5">
      <h1 className="text-center font-bold text-xl">PENGGUNA JURNAL</h1>
      <TableAdminUser data={data_user as Array<Table_Data>} />
    </main>
  );
}

export default Page;
