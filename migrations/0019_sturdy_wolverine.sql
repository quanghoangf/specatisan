ALTER TABLE "stars" ADD COLUMN "workspace_id" uuid;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "stars" ADD CONSTRAINT "stars_workspace_id_workspaces_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
