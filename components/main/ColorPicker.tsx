import { useState } from 'react'
import { HexColorPicker } from "react-colorful"
import { Palette } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface ColorPickerProps {
  value: string[]
  onChange: (colors: string[]) => void
}

export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [color, setColor] = useState("#000000");
  const [isOpen, setIsOpen] = useState(false);

  const addColor = (newColor: string) => {
    if (!value.includes(newColor)) {
      console.log(newColor);
      onChange([...value, newColor]);
      setIsOpen(false);
    }
  }

  const removeColor = (colorToRemove: string) => {
    onChange(value.filter((c) => c !== colorToRemove))
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {value.map((c, index) => (
          <button
            key={`${c}-${index}`}
            onClick={() => removeColor(c)}
            className="w-12 h-12 rounded-full overflow-hidden hover:ring-2 ring-offset-2 ring-primary transition-all"
            style={{ backgroundColor: c }}
          >
            <span className="sr-only">Remove color {c}</span>
          </button>
        ))}
        {
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-12 h-12 p-0 rounded-full"
              >
                <Palette className="w-6 h-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3" align="start">
              <div>
                <HexColorPicker
                  color={color}
                  onChange={setColor}
                />
                <div className="mt-4 flex justify-end">
                  <Button
                    size="sm"
                    onClick={() => addColor(color)}
                  >
                    Add Color
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        }
      </div>
    </div>
  )
}

