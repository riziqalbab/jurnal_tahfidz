import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

interface object_jurnal {
  id: string;
  ayat: number;
  surah: string;
  catatan: string;
  tanggal: string;
}

export default function TableJurnalAdmin({
  data,
  nama,
  kelas,
}: {
  data: Array<object_jurnal>;
  nama: string | null;
  kelas: string | null;
}) {
  const [data_jurnal, setDataJurnal] = useState<Array<object_jurnal>>();

  useEffect(() => {
    setDataJurnal(data);
  }, [data]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Jurnal Tahfidz Quran {nama?.toUpperCase()} <br />
          <span className="font-semibold text-lg">{kelas?.toUpperCase()}</span>
        </CardTitle>
        <div className="m-auto">
          <Button className="bg-slate-800 w-fit mx-2 text-white print:hidden">
            <Link href={"/admin"}>KEMBALI</Link>
          </Button>
          <Button
            className="bg-slate-800 w-fit mx-2 text-white print:hidden"
            onClick={() => {
              window.print();
            }}
          >
            PRINT
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Daftar hafalan Quran</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Surah</TableHead>
              <TableHead>Ayat</TableHead>
              <TableHead>Catatan</TableHead>
              <TableHead className="text-right">Tanggal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data_jurnal?.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.surah}</TableCell>
                <TableCell>{entry.ayat}</TableCell>
                <TableCell>{entry.catatan}</TableCell>
                <TableCell className="text-right">{entry.tanggal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
