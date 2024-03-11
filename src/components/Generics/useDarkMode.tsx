import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import useLocalStorageState from "use-local-storage-state";

export function useDarkMode() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
  );

  const [isDark, setIsDark] = useLocalStorageState("dark-mode", {
    defaultValue: systemPrefersDark,
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return { isDark, setIsDark };
}
