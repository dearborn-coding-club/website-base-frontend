import React from "react"
import { useTheme } from "../providers/ThemeProvider"
import { Moon, Sun } from "lucide-react"
import "../css/ThemeToggle.css"

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const next = theme === "light" ? "dark" : "light"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-btn theme-toggle"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}

export default ThemeToggle
