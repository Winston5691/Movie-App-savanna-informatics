import { create } from 'zustand'
import { Movie, MovieDetails, SearchParams } from '@/types/movie'

interface MovieState {
    // Movies data
    popularMovies: Movie[]
    topRatedMovies: Movie[]
    nowPlayingMovies: Movie[]
    upcomingMovies: Movie[]
    searchResults: Movie[]
    recommendations: Movie[]
    similarMovies: Movie[]

    // Current selections
    selectedMovie: MovieDetails | null
    searchQuery: string
    searchParams: SearchParams

    // Pagination
    currentPage: number
    totalPages: number
    totalResults: number

    // Loading states
    isLoading: boolean
    isSearching: boolean
    isMovieDetailsLoading: boolean

    // Error states
    error: string | null

    // Actions
    setPopularMovies: (movies: Movie[], totalPages: number, totalResults: number) => void
    setTopRatedMovies: (movies: Movie[], totalPages: number, totalResults: number) => void
    setNowPlayingMovies: (movies: Movie[], totalPages: number, totalResults: number) => void
    setUpcomingMovies: (movies: Movie[], totalPages: number, totalResults: number) => void
    setSearchResults: (movies: Movie[], totalPages: number, totalResults: number) => void
    setRecommendations: (movies: Movie[]) => void
    setSimilarMovies: (movies: Movie[]) => void
    setSelectedMovie: (movie: MovieDetails | null) => void
    setSearchQuery: (query: string) => void
    setSearchParams: (params: SearchParams) => void
    setCurrentPage: (page: number) => void
    setLoading: (loading: boolean) => void
    setSearching: (searching: boolean) => void
    setMovieDetailsLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    clearSearch: () => void
    clearError: () => void
}

export const useMovieStore = create<MovieState>((set) => ({
    // Initial state
    popularMovies: [],
    topRatedMovies: [],
    nowPlayingMovies: [],
    upcomingMovies: [],
    searchResults: [],
    recommendations: [],
    similarMovies: [],
    selectedMovie: null,
    searchQuery: '',
    searchParams: { query: '' },
    currentPage: 1,
    totalPages: 0,
    totalResults: 0,
    isLoading: false,
    isSearching: false,
    isMovieDetailsLoading: false,
    error: null,

    // Actions
    setPopularMovies: (movies, totalPages, totalResults) =>
        set({ popularMovies: movies, totalPages, totalResults }),

    setTopRatedMovies: (movies, totalPages, totalResults) =>
        set({ topRatedMovies: movies, totalPages, totalResults }),

    setNowPlayingMovies: (movies, totalPages, totalResults) =>
        set({ nowPlayingMovies: movies, totalPages, totalResults }),

    setUpcomingMovies: (movies, totalPages, totalResults) =>
        set({ upcomingMovies: movies, totalPages, totalResults }),

    setSearchResults: (movies, totalPages, totalResults) =>
        set({ searchResults: movies, totalPages, totalResults }),

    setRecommendations: (movies) =>
        set({ recommendations: movies }),

    setSimilarMovies: (movies) =>
        set({ similarMovies: movies }),

    setSelectedMovie: (movie) =>
        set({ selectedMovie: movie }),

    setSearchQuery: (query) =>
        set({ searchQuery: query }),

    setSearchParams: (params) =>
        set({ searchParams: params }),

    setCurrentPage: (page) =>
        set({ currentPage: page }),

    setLoading: (loading) =>
        set({ isLoading: loading }),

    setSearching: (searching) =>
        set({ isSearching: searching }),

    setMovieDetailsLoading: (loading) =>
        set({ isMovieDetailsLoading: loading }),

    setError: (error) =>
        set({ error }),

    clearSearch: () =>
        set({
            searchResults: [],
            searchQuery: '',
            searchParams: { query: '' },
            currentPage: 1,
            totalPages: 0,
            totalResults: 0,
        }),

    clearError: () =>
        set({ error: null }),
}))
