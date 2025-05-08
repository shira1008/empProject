export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  photo: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
