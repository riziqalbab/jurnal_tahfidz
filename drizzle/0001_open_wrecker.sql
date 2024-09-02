CREATE TABLE IF NOT EXISTS "jurnal_user" (
	"jurnal_id" serial PRIMARY KEY NOT NULL,
	"id_user" text,
	"surah" text,
	"ayat" integer
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "nis" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "kelas" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "jurnal_user" ADD CONSTRAINT "jurnal_user_id_user_user_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
