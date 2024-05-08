import { useAppState } from "@/lib/providers/state-provider";
import { updateCollection } from "@/lib/supabase/queries";
import { Collection } from "@/lib/supabase/supabase.types";
import { cn } from "@/lib/utils";
import {
  CircleEllipsis,
  Delete,
  Edit2,
  Keyboard,
  Mail,
  Plus,
  PlusCircle,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import EmojiPicker from "../global/emoji-picker";
import TooltipComponent from "../global/tooltip-component";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import CustomDialogTrigger from "../global/custom-dialog-trigger";

type Props = {
  collection: Collection;
  workspaceId: string;
};

const CollectionItem: React.FC<Props> = ({ collection, workspaceId }) => {
  const { dispatch } = useAppState();
  const [isRename, setIsRename] = React.useState(false);
  const onChangeEmoji = async (selectedEmoji: string) => {
    if (!workspaceId) return;
    dispatch({
      type: "UPDATE_FOLDER",
      payload: {
        workspaceId,
        collectionId: collection.id,
        collection: { icon: selectedEmoji },
      },
    });
    const { data, error } = await updateCollection(
      { icon: selectedEmoji },
      collection.id
    );
    if (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Could not update the emoji for this collection",
      });
    } else {
      toast({
        title: "Success",
        description: "Update emoji for the collection",
      });
    }
  };

  return (
    <li className="flex flex-1 w-full px-2 py-1 rounded-md dark:bg-muted hover:bg-muted justify-start items-center dark:text-white dark:hover:bg-muted dark:hover:text-white">
      <EmojiPicker getValue={onChangeEmoji}>{collection.icon}</EmojiPicker>
      <Link
        href={`/dashboard/${workspaceId}/collections/${collection.id}`}
        className={cn("flex-1 w-full justify-start ml-2")}
      >
        {collection.name}
      </Link>
      <TooltipComponent message="Edit collection">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} onClick={() => {}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ellipsis text-slate-600"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Collection</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <CustomDialogTrigger
                content={
                  <div className="flex items-center absolute w-12 h-4">
                    <Label htmlFor="width">Name</Label>
                    <Input
                      id="width"
                      defaultValue={collection.name}
                      className="flex-1 ml-2"
                    />
                  </div>
                }
              >
                <DropdownMenuItem>
                  <Edit2 className="mr-2 h-4 w-4" />
                  <span>Rename</span>
                </DropdownMenuItem>
              </CustomDialogTrigger>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Delete className="mr-2 h-4 w-4" />
              <span>Delete</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TooltipComponent>
    </li>
  );
};

export default CollectionItem;
