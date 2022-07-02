import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
    title: string
}

type TypeGenres = "theme" | "home" | "search" | "popular" | "new" | "genres"

interface NavigationItemProps {
    type: TypeGenres
    active?: boolean
}