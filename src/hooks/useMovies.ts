'use client'

import { useEffect } from 'react'
import { useMovieStore } from '@/store/movieStore'
import { tmdbService } from '@/services/tmdb'
import { SearchParams } from '@/types/movie'

export function usePopularMovies(page: number = 1) {
    const {
        popularMovies,
        setPopularMovies,
        setLoading,
        setError,
        isLoading,
        error
    } = useMovieStore()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await tmdbService.getPopularMovies(page)
                setPopularMovies(response.results, response.total_pages, response.total_results)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch popular movies')
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [page, setPopularMovies, setLoading, setError])

    return { movies: popularMovies, isLoading, error }
}

export function useTopRatedMovies(page: number = 1) {
    const {
        topRatedMovies,
        setTopRatedMovies,
        setLoading,
        setError,
        isLoading,
        error
    } = useMovieStore()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await tmdbService.getTopRatedMovies(page)
                setTopRatedMovies(response.results, response.total_pages, response.total_results)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch top rated movies')
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [page, setTopRatedMovies, setLoading, setError])

    return { movies: topRatedMovies, isLoading, error }
}

export function useNowPlayingMovies(page: number = 1) {
    const {
        nowPlayingMovies,
        setNowPlayingMovies,
        setLoading,
        setError,
        isLoading,
        error
    } = useMovieStore()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await tmdbService.getNowPlayingMovies(page)
                setNowPlayingMovies(response.results, response.total_pages, response.total_results)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch now playing movies')
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [page, setNowPlayingMovies, setLoading, setError])

    return { movies: nowPlayingMovies, isLoading, error }
}

export function useUpcomingMovies(page: number = 1) {
    const {
        upcomingMovies,
        setUpcomingMovies,
        setLoading,
        setError,
        isLoading,
        error
    } = useMovieStore()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await tmdbService.getUpcomingMovies(page)
                setUpcomingMovies(response.results, response.total_pages, response.total_results)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch upcoming movies')
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [page, setUpcomingMovies, setLoading, setError])

    return { movies: upcomingMovies, isLoading, error }
}

export function useMovieDetails(movieId: number) {
    const {
        selectedMovie,
        setSelectedMovie,
        setMovieDetailsLoading,
        setError,
        isMovieDetailsLoading,
        error
    } = useMovieStore()

    useEffect(() => {
        if (!movieId) return

        const fetchMovieDetails = async () => {
            try {
                setMovieDetailsLoading(true)
                setError(null)
                const movie = await tmdbService.getMovieDetails(movieId)
                setSelectedMovie(movie)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch movie details')
            } finally {
                setMovieDetailsLoading(false)
            }
        }

        fetchMovieDetails()
    }, [movieId, setSelectedMovie, setMovieDetailsLoading, setError])

    return { movie: selectedMovie, isLoading: isMovieDetailsLoading, error }
}

export function useSearchMovies(searchParams: SearchParams) {
    const {
        searchResults,
        setSearchResults,
        setSearching,
        setError,
        isSearching,
        error
    } = useMovieStore()

    useEffect(() => {
        if (!searchParams.query.trim()) {
            setSearchResults([], 0, 0)
            return
        }

        const searchMovies = async () => {
            try {
                setSearching(true)
                setError(null)
                const response = await tmdbService.searchMovies(searchParams)
                setSearchResults(response.results, response.total_pages, response.total_results)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to search movies')
            } finally {
                setSearching(false)
            }
        }

        const timeoutId = setTimeout(searchMovies, 300)
        return () => clearTimeout(timeoutId)
    }, [searchParams, setSearchResults, setSearching, setError])

    return { movies: searchResults, isLoading: isSearching, error }
}

export function useRecommendations(movieId: number) {
    const {
        recommendations,
        setRecommendations,
        setLoading,
        setError,
        isLoading,
        error
    } = useMovieStore()

    useEffect(() => {
        if (!movieId) return

        const fetchRecommendations = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await tmdbService.getRecommendations({ movieId })
                setRecommendations(response.results)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch recommendations')
            } finally {
                setLoading(false)
            }
        }

        fetchRecommendations()
    }, [movieId, setRecommendations, setLoading, setError])

    return { movies: recommendations, isLoading, error }
}
