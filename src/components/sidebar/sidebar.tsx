"use client";
import {
  createDocument,
  getCollaboratingWorkspaces,
  getCollections,
  getPrivateWorkspaces,
  getSharedWorkspaces,
} from "@/lib/supabase/queries";
import { cn } from "@/lib/utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Settings from "../settings/settings";
import WorkspaceSwitcher from "./WorkspaceSwitcher";

import type {
  Collection,
  Document,
  Workspace,
} from "@/lib/supabase/supabase.types";
import {
  Download,
  FolderIcon,
  PanelLeft,
  Plus,
  Settings2,
  Trash2,
} from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import AccountInfo from "./AccountInfo";
import SearchCommandPalette from "./SearchCommandPalette";
import CollectionsDropdownList from "./collections-dropdown-list";
import { v4 } from "uuid";
import { toast } from "../ui/use-toast";
import { useAppState } from "@/lib/providers/state-provider";
import { UUID } from "crypto";
import { AuthUser } from "@supabase/supabase-js";
import UserCard from "./user-card";
import FavoritesList from "./Favorites";
import { LoadingEditor } from "../Loading";

interface SidebarProps {
  params: { workspaceId: string };
  isOpen: boolean;
  toggle: (value: boolean) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ params, isOpen, toggle }) => {
  const router = useRouter();
  const [privateWorkspaces, setPrivateWorkspaces] = useState<Workspace | any>(
    []
  );
  const [collaboratingWorkspaces, setCollaboratingWorkspaces] = useState<
    Workspace | any
  >([]);
  const [sharedWorkspaces, setSharedWorkspaces] = useState<Workspace | any>([]);

  const { dispatch, state } = useAppState();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const supabase = createClientComponentClient();

    const fetchData = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!user) {
          router.push("/auth/login"); // Redirect to login if user is not authenticated
          return;
        }

        setUser(user);

        const [privateWs, collabWs, sharedWs] = await Promise.all([
          getPrivateWorkspaces(user.id),
          getCollaboratingWorkspaces(user.id),
          getSharedWorkspaces(user.id),
        ]);

        setPrivateWorkspaces(privateWs);
        setCollaboratingWorkspaces(collabWs);
        setSharedWorkspaces(sharedWs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.workspaceId, router]);

  const handleCreateNewDoc = async () => {
    if (!params.workspaceId || !user) return;
    const newDocument: Document = {
      createdAt: new Date().toISOString(),
      inTrash: null,
      title: "Untitled",
      workspaceId: params.workspaceId as UUID,
      data: null,
      bannerUrl: null,
      summary: null,
      fullwidth: null,
      emoji: "📄",
      text: null,
      content: undefined,
      createdById: user?.id,
      archivedAt: null,
      publishedAt: null,
      template: null,
      sourceMetadata: undefined,
      parentDocumentId: null,
      lastModifiedById: null,
      collaboratorIds: null,
      collectionId: null,
      id: v4(),
    };
    dispatch({
      type: "ADD_FILE",
      payload: { document: newDocument, workspaceId: params.workspaceId },
    });
    const { error } = await createDocument(newDocument);
    if (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Could not create a document",
      });
    } else {
      toast({
        title: "Success",
        description: "Document created.",
      });
      router.push(`/dashboard/${params.workspaceId}/${newDocument.id}`);
    }
  };

  return (
    <aside
      data-collapsed={isOpen}
      className="group flex flex-col gap-4 w-full py-2 data-[collapsed=true]:py-2"
    >
      <div className="p-2 w-full">
        <div className="flex w-full items-center justify-between">
          <Suspense fallback={<LoadingEditor />}>
            <WorkspaceSwitcher
              privateWorkspaces={privateWorkspaces}
              collaboratingWorkspaces={collaboratingWorkspaces}
              sharedWorkspaces={sharedWorkspaces}
            />
          </Suspense>
          <AccountInfo />
        </div>
        {/* Quick Search */}
        <Separator orientation="horizontal" className="my-6" />

        <SearchCommandPalette />

        <ul className="w-full mt-2 gap-2">
          {/* All Docs */}
          <li className="flex items-center">
            <Link
              href={`/dashboard/${params.workspaceId}/alldocs`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                " w-full justify-start items-center dark:text-white dark:hover:bg-muted dark:hover:text-white"
              )}
            >
              <FolderIcon className="mr-2 h-4 w-4" />
              <span>All docs</span>
            </Link>
          </li>
          {state?.userPermisison === "admin" ||
          state.userPermisison === undefined ? (
            <li className="flex items-center w-full">
              <Settings>
                <Button
                  variant="ghost"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    " w-full justify-start items-center dark:text-white dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <Settings2 className="mr-2 h-4 w-4" />
                  <span>Setting</span>
                </Button>
              </Settings>
            </li>
          ) : null}
        </ul>
        {/* Favorites */}
        {!isOpen && (
          <Suspense fallback={<LoadingEditor />}>
            <FavoritesList />
          </Suspense>
        )}
        {/* Collections */}
        {!isOpen && (
          <Suspense fallback={<LoadingEditor />}>
            <CollectionsDropdownList workspaceId={params.workspaceId} />
          </Suspense>
        )}
        <Separator orientation="horizontal" className="my-2" />
        {/* Others */}
        <ul className="w-full mt-2 gap-2">
          <span
            className="text-Neutrals-8 
        font-bold 
        text-xs"
          >
            Others
          </span>
          <li className="flex items-center">
            <Link
              href={`/dashboard/${params.workspaceId}/trash`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                " w-full justify-start items-center dark:text-white dark:hover:bg-muted dark:hover:text-white"
              )}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              {!isOpen && <span>Trash</span>}
            </Link>
          </li>
          {/* <li className="flex items-center">
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                " w-full justify-start items-center dark:text-white dark:hover:bg-muted dark:hover:text-white"
              )}
            >
              <Download className="mr-2 h-4 w-4" />
              <span>Import</span>
            </Link>
          </li> */}
        </ul>
      </div>

      <Button
        className="mt-auto p-4 flex items-center"
        variant="default"
        onClick={handleCreateNewDoc}
      >
        <Plus size={24} className="mr-2" />
        Create Docs
      </Button>
      <div className="flex flex-col items-center justify-center w-full h-10">
        <span className="text-Neutrals-8 text-xs">© 2024 Specatisan</span>
      </div>
    </aside>
  );
};

export default Sidebar;
