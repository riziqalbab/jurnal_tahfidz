// @ts-nocheck

import { auth } from "@/auth";
import TableJurnal from "@/components/component/table-jurnal";
import db from "@/db/db";
import { jurnal_user, users } from "@/db/schema/schema";
import { eq } from "drizzle-orm";

async function Page() {
  const session = await auth();
  const user_data = session?.user?.id;

  const data = await db
    .select()
    .from(jurnal_user)
    .where(eq(jurnal_user.id_user, user_data));

  return (
    <div className="p-5">
      <TableJurnal data={data} />
    </div>
  );
}

export default Page;
