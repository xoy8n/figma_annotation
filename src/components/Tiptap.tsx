import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import Underline from "@tiptap/extension-underline";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import {
  Tag,
  List,
  Bold as BoldIcon,
  Underline as UnderlineIcon,
  Link as LinkIcon,
} from "lucide-react";

const extensions = [
  Document,
  Paragraph,
  Text,
  TextStyle,
  Color,
  Bold,
  Underline,
  BulletList.configure({
    HTMLAttributes: {
      class: "list-disc pl-4",
    },
  }),
  ListItem,
  Placeholder.configure({
    placeholder: "Tell your design",
    emptyEditorClass:
      "cursor-text before:content-[attr(data-placeholder)] before:absolute before:top-2 before:left-2 before:text-mauve-11 before:opacity-50 before-pointer-events-none",
  }),
  Link.configure({
    openOnClick: true,
    autolink: true,
    defaultProtocol: "https",
    HTMLAttributes: {
      class: "underline text-blue-500 hover:cursor-pointer hover:text-blue-600",
    },
  }),
];

const content = "";

const ButtonMenu = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex flex-row items-center gap-[6px] border-grey-03 bg-grey-00 p-[6px] border-b">
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className="w-[18px] h-[18px] flex flex-row items-center justify-center hover:bg-grey-01"
      >
        <BoldIcon />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className="w-[18px] h-[18px] flex flex-row items-center justify-center hover:bg-grey-01"
      >
        <UnderlineIcon />
      </Button>
      <div className="border-grey-05 border-l h-[12px]" />
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="w-[18px] h-[18px] flex flex-row items-center justify-center hover:bg-grey-01"
      >
        <List />
      </Button>
      <div className="border-grey-05 border-l h-[12px]" />
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={true}
        className="w-[18px] h-[18px] flex flex-row items-center justify-center hover:bg-grey-01 disabled:opacity-50"
      >
        <LinkIcon />
      </Button>
      <div className="border-grey-05 border-l h-[12px]" />
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={true}
        className="w-[18px] h-[18px] flex flex-row items-center justify-center hover:bg-grey-01 disabled:opacity-50"
      >
        <Tag />
      </Button>
      <input
        type="color"
        onChange={(e) => {
          const color = e.target.value;
          editor.chain().focus().setColor(color).run();
        }}
        className="w-[18px] h-[18px] p-0 border-none bg-transparent cursor-pointer"
        title="Text color"
      />
    </div>
  );
};

const Tiptap = ({ id, content = "", onUpdate, index }) => {
  const editor = useEditor({
    extensions,
    content,
    onUpdate: ({ editor }) => onUpdate({ editor, index }),
    editorProps: {
      attributes: {
        class: "min-h-[88px] p-2 outline-none text-left",
      },
    },
  });

  return (
    <div key={id} className="border rounded-md w-[308px]">
      <ButtonMenu editor={editor} />
      <EditorContent editor={editor} className="overflow-y-scroll" />
    </div>
  );
};

export default Tiptap;
