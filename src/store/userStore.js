/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

export const userStore = create((set) => ({
  user: {},
  setUser: (user) => set({ user }),
}));
