import { useTheme } from "../../../shared/lib/ThemeContext";

interface EyesLogoProps {
  className?: string;
}

export function EyesLogo({ className = "" }: EyesLogoProps) {
  const { isDark } = useTheme();
  console.log(isDark);
  return (
    <div className={`relative flex items-end gap-2 ${className}`}>
      {isDark ? <img src="/dark-maskot.svg" /> : <img src="/mascot.svg" />}
    </div>
  );
}
