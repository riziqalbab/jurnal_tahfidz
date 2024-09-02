import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string | unknown;
    kelas: string;
    nis: string;
  }

  interface User {
    id: string;
    nis: string;
    kelas: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    // id: string;
    kelas: string;
    nis: string;
    kelas: string;
    nis: string;
  }
}
