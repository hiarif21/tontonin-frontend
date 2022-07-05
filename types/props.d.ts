interface LayoutProps {
    children: React.ReactNode
    title: string
}

// atoms

interface IconsProps {
    icon: TypeGenres | "chevron" | "refresh" | "close" | "mute" | "unmute"
    type?: "outline" | "solid"
    color?: "default" | "primary" | "light"
    size?: "default" | "smallest"
}

// molecules

interface NavigationItemProps {
    type: TypeGenres
    active?: boolean
}

interface MovieCardProps {
    data: MovieData
    imagePriority?: boolean
    className?: string
}

interface InfiniteScrollingProps {
    loadMore: () => void
    finished: boolean
    markFinished?: boolean
}

// organisms

// template

// pages

interface HomeProps {
    dataDiscovers: DataDiscover[]
    totalDataDiscovers: number
    dataMovies: DataMovie[]
    totalDataMovies: number
}