import React, { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// const ThemeProviderContext = createContext<string | undefined>(undefined);
// const ThemeProviderContext = createContext<{ name: string } | undefined>(
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeProviderContext.Provider
      value={{
        // name: 'hello',
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within the ThemeProvider');
  return context;
};
