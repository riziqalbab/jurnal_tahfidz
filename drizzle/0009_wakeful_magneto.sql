ALTER TABLE "jurnal_user" ADD COLUMN "tanggal" date DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "jurnal_user" DROP COLUMN IF EXISTS "timestamp";