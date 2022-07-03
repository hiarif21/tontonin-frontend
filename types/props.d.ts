interface LayoutProps {
    children: React.ReactNode
    title: string
}

// atoms

interface IconsProps {
    icon: TypeGenres | "chevron" | "refresh"
    type?: "outline" | "solid"
    color?: "default" | "primary"
    size?: "default" | "smallest"
}

// molecules

interface NavigationItemProps {
    type: TypeGenres
    active?: boolean
}

interface MovieCardProps {
    data: { _id: string, title: string, image: string }
    imagePriority?: boolean
    height?: number
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