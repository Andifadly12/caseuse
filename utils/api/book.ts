import { create } from "zustand";

// Mendefinisikan tipe untuk setiap item data
interface Book {
  id: number;
  name: string;
  easyToUnderstand: boolean;
}

// Mendefinisikan tipe untuk store Zustand
interface Store {
  data: Book[];
  addData: (id: number, name: string, easyToUnderstand: boolean) => void;
  updateData: (id: number, name: string, easyToUnderstand: boolean) => void;
  removeData: (id: number) => void;
}

// Membuat store Zustand dengan tipe data yang sesuai
const useStore = create<Store>((set) => ({
  data: [
    { id: 1, name: "fadly", easyToUnderstand: true },
    { id: 2, name: "Achmad", easyToUnderstand: false },
  ],
  addData: (id, name, easyToUnderstand) =>
    set((state) => ({
      data: [...state.data, { id, name, easyToUnderstand }],
    })),
  updateData: (id, name, easyToUnderstand) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id
          ? { ...item, name, easyToUnderstand }  // Perbaikan di sini
          : item
      ),
    })),
  removeData: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),
}));

export default useStore;
