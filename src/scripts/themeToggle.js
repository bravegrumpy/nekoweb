const toggleButton = document.getElementById("theme-toggle");
const body = document.documentElement;
const themes = ["dark", "light"]
const theme = (function calcTheme() {
    const localStorageTheme = localStorage?.getItem("theme") ?? '';
    return themes.includes(localStorageTheme) ?
        localStorageTheme :
        window.matchMedia('(prefers-color-scheme: dark)').matches ?
            'dark' : 'light'
})();

theme === "light" ? 
    body.classList.remove("dark") :
    body.classList.add("dark")

window.localStorage.setItem("theme", theme);

function handleClick() {
    body.classList.contains("dark") ?
        body.classList.remove("dark") :
        body.classList.add("dark")
    
    const isDark = body.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
}

toggleButton.addEventListener("click", handleClick)