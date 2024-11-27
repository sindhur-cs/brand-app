"use client";
import { Upload } from "lucide-react"
import { useRef } from "react";

const DragDrop = () => {  
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
        <input type="file" hidden ref={fileInputRef}/>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center gap-4 mt-20 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
            <Upload/>
            <p>Drag and drop an image here, or click to select a file</p>
        </div>
    </>
  )
}

export default DragDrop