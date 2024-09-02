ALTER TABLE "jurnal_user" ADD COLUMN "timestamp1" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "jurnal_user" DROP COLUMN IF EXISTS "tanggal";