import { Upload, X } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useDropzone } from "react-dropzone";

const ImagePicker = ({
  value,
  onChange,
}: {
  value: File[];
  onChange: (value: File[]) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      onChange([...value, ...acceptedFiles]);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onChange([...value, ...Array.from(e.target.files)]);
    }
  };

  const removeImage = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    e.stopPropagation();
    onChange(
      value.filter((file, index) => {
        return index !== idx;
      })
    );
  };

  return (
    <div {...getRootProps()}>
      <div className="flex flex-wrap gap-4 items-center">
        {value.map((file, index) => (
          <div key={index} className="relative w-[100px] h-[100px]">
            <Image
              src={URL.createObjectURL(file)}
              alt="Selected Image"
              fill
              className="object-cover p-4"
            />
            <div
              className="absolute top-0 right-0 cursor-pointer p-1 rounded-full bg-black text-white m-2 z-50"
              onClick={(e) => removeImage(e, index)}
            >
              <X className="h-2 w-2" />
            </div>
          </div>
        ))}
      </div>
      <input
        type="file"
        hidden
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
        {...getInputProps()}
      />
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center gap-4 cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload />
        <p className="text-center text-sm">
          {isDragActive
            ? "Drop the image here..."
            : "Drag and drop the images here, or click to select a file"}
        </p>
      </div>
    </div>
  );
};

export default ImagePicker;
