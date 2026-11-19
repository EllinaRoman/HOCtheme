export default function ThemedButton({ theme }: { theme: string }) {
  const currentTheme = theme === "dark" ? "dark-theme" : "light-theme";
  return (
    <button className={currentTheme}>
      Текущая тема {theme}
    </button>
  );
}
