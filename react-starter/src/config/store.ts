import { create } from 'zustand';

export type Theme = 'light' | 'dark';
export type Lang = 'zh' | 'en' | 'ja' | 'ko';

interface AppState {
  theme: Theme;
  lang: Lang;
  chatOpen: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLang: (lang: Lang) => void;
  setChatOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: (localStorage.getItem('theme') as Theme) || 'light',
  lang: (localStorage.getItem('lang') as Lang) || 'zh',
  chatOpen: false,
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    set({ theme });
  },
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return { theme: newTheme };
    });
  },
  setLang: (lang) => {
    localStorage.setItem('lang', lang);
    set({ lang });
  },
  setChatOpen: (chatOpen) => set({ chatOpen }),
}));

// 初始化主题
if (typeof document !== 'undefined') {
  const theme = localStorage.getItem('theme') as Theme || 'light';
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
}