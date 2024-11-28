import { create } from "zustand";

interface Store {
    brands: any[];
    selectedBrand: string | null;
    selectedImage: File | null;
    setBrands: (brands: any[]) => void;
    setSelectedBrand: (selectedBrand: string | null) => void;
    setSelectedImage: (selectedImage: File | null) => void;
}

const useStore = create<Store>()((set) => ({
    brands: [],
    selectedBrand: null,
    selectedImage: null,
    setBrands: (brands) => set({ brands }),
    setSelectedBrand: (selectedBrand) => set({ selectedBrand }),
    setSelectedImage: (selectedImage) => set({ selectedImage }),
}));

export default useStore;