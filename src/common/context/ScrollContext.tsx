import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

interface ScrollContextType {
  scrollPosition: number;
  saveScroll: () => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  const saveScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
    console.log(`Saving scroll position: ${window.scrollY}`);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollPosition, saveScroll }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within ScrollProvider");
  }
  return context;
};
