import { create } from "zustand";
import { authSlice, createAuthSlice } from "./slices";

type StoreState = authSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
}));
