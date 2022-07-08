type TypeGenres = "theme" | "home" | "search" | "popular" | "new" | "genres"

type UseTheme = () => {
    isDarkTheme: boolean
    toggleTheme: () => void
}