CREATE TABLE IF NOT EXISTS "account" (
    "userId" text NOT NULL,
    "type" text NOT NULL,
    "provider" text NOT NULL,
    "providerAccountId" text NOT NULL,
    "refresh_token" text,
    "access_token" text,
    "expires_at" integer,
    "token_type" text,
    "scope" text,
    "id_token" text,
    "session_state" text,
    CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY (
        "provider",
        "providerAccountId"
    )
);

CREATE TABLE IF NOT EXISTS "authenticator" (
    "credentialID" text NOT NULL,
    "userId" text NOT NULL,
    "providerAccountId" text NOT NULL,
    "credentialPublicKey" text NOT NULL,
    "counter" integer NOT NULL,
    "credentialDeviceType" text NOT NULL,
    "credentialBackedUp" boolean NOT NULL,
    "transports" text,
    CONSTRAINT "authenticator_userId_credentialID_pk" PRIMARY KEY ("userId", "credentialID"),
    CONSTRAINT "authenticator_credentialID_unique" UNIQUE ("credentialID")
);

CREATE TABLE IF NOT EXISTS "jurnal_user" (
    "jurnal_id" serial PRIMARY KEY NOT NULL,
    "id_user" text,
    "surah" text,
    "ayat" integer,
    "catatan" text,
    "tanggal" date DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "session" (
    "sessionToken" text PRIMARY KEY NOT NULL,
    "userId" text NOT NULL,
    "expires" timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS "user" (
    "id" text PRIMARY KEY NOT NULL,
    "name" text,
    "nis" text,
    "kelas" text,
    "email" text,
    "whatsapp" text,
    "emailVerified" timestamp,
    "image" text,
    CONSTRAINT "user_email_unique" UNIQUE ("email")
);

CREATE TABLE IF NOT EXISTS "verificationToken" (
    "identifier" text NOT NULL,
    "token" text NOT NULL,
    "expires" timestamp NOT NULL,
    CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY ("identifier", "token")
);

DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "jurnal_user" ADD CONSTRAINT "jurnal_user_id_user_user_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;