"use client";

import { SelectGroup, SelectItem } from "@radix-ui/react-select";
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select";
import useStore from "@/app/store/store";
import { useState } from "react";

const SelectionComponent = () => {
    const { brands } = useStore();
    const { selectedBrand, setSelectedBrand } = useStore();

    const handleValueChange = (value: string) => {
        setSelectedBrand(value);
    }

    return (
        <div className="w-1/2">
            <Select value={selectedBrand || ""} onValueChange={handleValueChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a brand" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {brands.map((brand) => <SelectItem className="cursor-pointer p-2 m-1 hover:bg-gray-100 rounded-lg" key={brand.id} value={brand.name}>{brand.name}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectionComponent;