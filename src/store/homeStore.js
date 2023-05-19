/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

export const homeStore = create((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
