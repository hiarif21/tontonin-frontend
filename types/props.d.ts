interface LayoutProps {
    children: React.ReactNode
    title: string
}

// atoms

interface IconsProps {
    icon: TypeGenres | "chevron" | "refresh" | "close" | "mute" | "unmute" | "back"
    type?: "outline" | "solid"
    color?: "default" | "primary" | "light" | "secondary"
    size?: "default" | 'small' | "smallest"
}

interface ModalProps {
    children: React.ReactNode
    show?: boolean
    onClickOutside: () => void
    _ref?: RefObject<HTMLElement>;
}

interface LoadingProps {
    _ref?: RefObject<HTMLElement>;
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
    dataLength: number
    totalData: number
    markFinished?: boolean
}

interface GenreProps {
    data: GenreData
}

// organisms
interface MovieListProps {
    data: MoviesData[]
    totalData: number
    loadMore: () => void
    title?: string
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

interface GenresProps {
    data: GenreData[]
}