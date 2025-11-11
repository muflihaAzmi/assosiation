"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Bold, Italic, ListOrdered, List, Heading1 } from "lucide-react"

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit], // ✅ Only this needed
    content: "",
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white">
      {/* Toolbar */}
      <div className="flex items-center gap-2 mb-3 border-b pb-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-100 text-gray-400 ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
        >
          <Bold className="size-4" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-100 text-gray-400 ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
        >
          <Italic className="size-4" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-gray-100 text-gray-400 ${
            editor.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""
          }`}
        >
          <Heading1 className="size-4" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-100 text-gray-400 ${
            editor.isActive("bulletList") ? "bg-gray-200" : ""
          }`}
        >
          <List className="size-4" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-100 text-gray-400 ${
            editor.isActive("orderedList") ? "bg-gray-200" : ""
          }`}
        >
          <ListOrdered className="size-4" />
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="min-h-[150px] outline-none prose prose-sm max-w-none"
      />
    </div>
  )
}

export default Tiptap
