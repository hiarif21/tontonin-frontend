interface LayoutProps {
    children: React.ReactNode
    title: string
}

// atoms

interface IconsProps {
    icon: TypeGenres | "chevron" | "refresh" | "close" | "mute" | "unmute"
    type?: "outline" | "solid"
    color?: "default" | "primary" | "light" | "secondary"
    size?: "default" | 'small' | "smallest"
}

interface ModalProps {
    children: React.ReactNode
    show?: boolean
    onClickOutside?: () => void
    _ref: React.RefObject<HTMLDivElement>
}

// molecules

interface NavigationItemProps {
    type: TypeGenres
    active?: boolean
}

interface MovieCardProps {
    data: MoviesData
    imagePriority?: boolean
    className?: string
}

interface InfiniteScrollingProps {
    loadMore: () => void
    finished: boolean
    markFinished?: boolean
}

interface GenreProps {
    data: GenreData
}

// organisms
interface MovieListProps {
    data: MovieData[]
    totalData: number
    loadMore: () => void
    title: string
}

interface DiscoverListProps {
    data: DiscoverData[]
    totalData: number
    loadMore: () => void
}

// template

interface GenresTemplate {
    data: GenreData[]
}

// pages

interface HomeProps {
    dataDiscovers: DiscoverData[]
    totalDataDiscovers: number
    dataMovies: MoviesData[]
    totalDataMovies: number
}

interface PopularProps {
    data: MoviesData[]
    totalData: number
}

interface NewProps {
    data: MoviesData[]
    totalData: number
}

interface GenresProps {
    data: GenreData[]
}