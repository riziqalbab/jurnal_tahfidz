import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Link from "next/link";

interface Table_Data {
  id: string;
  name: string;
  kelas: string;
  whatsapp: string;
}

export function TableAdminUser({ data }: { data: Array<Table_Data> }) {
  return (
    <Table>
      <TableCaption>JUMLAH PENGGUNA</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">NO</TableHead>
          <TableHead>NAMA</TableHead>
          <TableHead>KELAS</TableHead>
          <TableHead>NO WHATSAPPP</TableHead>
          <TableHead className="text-right">LIHAT</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((x, index) => (
          <TableRow key={x.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{x.name}</TableCell>
            <TableCell>{x.kelas}</TableCell>
            <TableCell>{x.whatsapp}</TableCell>
            <TableCell className="text-right">
              <Button className="bg-slate-900 text-white">
                <Link href={`/admin/${x.id}`}>LIHAT</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{data.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
