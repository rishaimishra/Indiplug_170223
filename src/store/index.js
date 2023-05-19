import { useStore } from 'zustand';
import { userStore } from './userStore';
import { homeStore } from './homeStore';

export const useUserStore = (selector) => useStore(userStore, selector);
export const useHomeStore = (selector) => useStore(homeStore, selector);
