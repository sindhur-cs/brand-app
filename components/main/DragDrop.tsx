"use client";
import useStore from "@/app/store/store";
import { Upload, X } from "lucide-react"
import Image from "next/image";
import { useRef } from "react";
import {useDropzone} from 'react-dropzone'

const DragDrop = () => {  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setSelectedImage, selectedImage } = useStore();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setSelectedImage(acceptedFiles[0]);
    }
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }

  const removeImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectedImage(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div {...getRootProps()}>
        <input type="file" hidden ref={fileInputRef} onChange={handleFileChange} {...getInputProps()}/>
        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center gap-4 mt-20 cursor-pointer w-[450px] h-[140px]" onClick={() => fileInputRef.current?.click()}>
            {selectedImage ? <><div className="absolute top-0 right-0 cursor-pointer p-1 rounded-full bg-black text-white m-2 z-50" onClick={removeImage}><X className="h-4 w-4"/></div><Image src={URL.createObjectURL(selectedImage)} alt="Selected Image" fill className="object-contain p-4"/></> : <>
              <Upload className="h-6 w-6"/>
            <p className="text-sm">Drag and drop an image here, or click to select a file</p></>}
        </div>
    </div>
  )
}

export default DragDrop