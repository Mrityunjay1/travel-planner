import { userType } from "@/types/user";
import { StateCreator } from "zustand";

export interface authSlice {
  userInfo: undefined | userType;
  setUserInfo: (userInfo: userType) => void;
}

export const createAuthSlice: StateCreator<authSlice> = (set) => ({
  userInfo: undefined,
  setUserInfo: (userInfo: userType) => set({ userInfo }),
});
