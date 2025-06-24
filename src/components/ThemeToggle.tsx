import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark" ||
            (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-lg flex items-center justify-center transition-colors duration-500"
        >
            <span style={{ textShadow: "0 0 8px #facc15" }}>
                {isDark ? "☀️" : "🌙"}
            </span>
        </button>
    );
}
