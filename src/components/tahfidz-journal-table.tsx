'use client'

import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define the structure of a journal entry
interface JournalEntry {
  id: number
  surah: string
  ayat: string
  catatan: string
  tanggal: string
}

// Sample data (replace this with your actual data source)
const journalEntries: JournalEntry[] = [
  { id: 1, surah: "Al-Baqarah", ayat: "1-5", catatan: "Lancar", tanggal: "2023-06-01" },
  { id: 2, surah: "Al-Ikhlas", ayat: "1-4", catatan: "Perlu diulang", tanggal: "2023-06-02" },
  { id: 3, surah: "An-Nas", ayat: "1-6", catatan: "Hafal dengan baik", tanggal: "2023-06-03" },
  { id: 4, surah: "Al-Falaq", ayat: "1-5", catatan: "Masih terbata-bata", tanggal: "2023-06-04" },
  { id: 5, surah: "Al-Kafirun", ayat: "1-6", catatan: "Lancar", tanggal: "2023-06-05" },
]

export function TahfidzJournalTable() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Jurnal Tahfidz Quran</CardTitle>
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
            {journalEntries.map((entry) => (
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
  )
}