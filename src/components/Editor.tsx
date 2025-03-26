import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
}

export const Editor: React.FC<EditorProps> = ({
  value,
  onChange,
  onBlur,
  placeholder,
}) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
  ];

  return (
    <div className="editor-container">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
      />
      <style>
        {`
          .editor-container {
            width: 100%;
          }
          .editor-container .ql-container {
            border-radius: 0 0 4px 4px;
            font-size: 14px;
            font-family: inherit;
            height: auto;
            max-height: 200px;
            overflow-y: scroll;
          }
          .editor-container .ql-toolbar {
            border-radius: 4px 4px 0 0;
            border-color: #e2e8f0;
          }
        
          .editor-container .ql-editor {
            font-size: 14px;
            line-height: 1.5;
            min-height: 50px;
            height: auto;
          }
          .editor-container .ql-editor.ql-blank::before {
            color: #94a3b8;
            font-style: normal;
          }
        `}
      </style>
    </div>
  );
};
