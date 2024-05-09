import React from "react";
import { isEnabled } from "@/lib/plate/is-enabled";
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";

import { ValueId } from "@/config/customizer-plugins";
import { Icons } from "@/components/icons";
import { CommentToolbarButton } from "@/components/plate-ui/comment-toolbar-button";
import { LinkToolbarButton } from "@/components/plate-ui/link-toolbar-button";
import { MarkToolbarButton } from "@/components/plate-ui/mark-toolbar-button";
import { ToolbarSeparator } from "@/components/plate-ui/toolbar";

import { MoreDropdownMenu } from "./more-dropdown-menu";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";

export function FloatingToolbarButtons({ id }: { id?: ValueId }) {
  const readOnly = useEditorReadOnly();

  return (
    <>
      {!readOnly && (
        <>
          <TurnIntoDropdownMenu />

          <MarkToolbarButton nodeType={MARK_BOLD} tooltip="Bold (⌘+B)">
            <Icons.bold />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={MARK_ITALIC} tooltip="Italic (⌘+I)">
            <Icons.italic />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_UNDERLINE}
            tooltip="Underline (⌘+U)"
          >
            <Icons.underline />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={MARK_STRIKETHROUGH}
            tooltip="Strikethrough (⌘+⇧+M)"
          >
            <Icons.strikethrough />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={MARK_CODE} tooltip="Code (⌘+E)">
            <Icons.code />
          </MarkToolbarButton>

          <ToolbarSeparator />

          {isEnabled("link", id) && <LinkToolbarButton />}
        </>
      )}

      {isEnabled("comment", id) && <CommentToolbarButton />}

      <MoreDropdownMenu />
    </>
  );
}
