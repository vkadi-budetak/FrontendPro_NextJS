CREATE TABLE "real_estates" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "real_estates_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(250) NOT NULL,
	"address" varchar(250) NOT NULL,
	"price" numeric NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "real_estates" ADD CONSTRAINT "real_estates_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;