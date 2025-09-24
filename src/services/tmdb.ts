import { MovieDetails, MovieResponse, SearchParams, RecommendationParams } from '@/types/movie'

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL

if (!API_KEY) {
    throw new Error('TMDB API key is not configured')
}

class TMDBService {
    private cache = new Map<string, { data: unknown; timestamp: number }>()
    private readonly CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

    private async request<T>(endpoint: string, params: Record<string, unknown> = {}): Promise<T> {
        const url = new URL(`${BASE_URL}${endpoint}`)
        url.searchParams.set('api_key', API_KEY)

        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.set(key, value.toString())
            }
        })

        const cacheKey = url.toString()
        const cached = this.cache.get(cacheKey)

        if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
            return cached.data
        }

        try {
            const response = await fetch(url.toString())

            if (!response.ok) {
                throw new Error(`TMDB API error: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()
            this.cache.set(cacheKey, { data, timestamp: Date.now() })

            return data
        } catch (error) {
            console.error('TMDB API request failed:', error)
            throw error
        }
    }

    async getPopularMovies(page: number = 1): Promise<MovieResponse> {
        return this.request<MovieResponse>('/movie/popular', { page })
    }

    async getTopRatedMovies(page: number = 1): Promise<MovieResponse> {
        return this.request<MovieResponse>('/movie/top_rated', { page })
    }

    async getNowPlayingMovies(page: number = 1): Promise<MovieResponse> {
        return this.request<MovieResponse>('/movie/now_playing', { page })
    }

    async getUpcomingMovies(page: number = 1): Promise<MovieResponse> {
        return this.request<MovieResponse>('/movie/upcoming', { page })
    }

    async getMovieDetails(movieId: number): Promise<MovieDetails> {
        return this.request<MovieDetails>(`/movie/${movieId}`, {
            append_to_response: 'credits,videos,images'
        })
    }

    async searchMovies(params: SearchParams): Promise<MovieResponse> {
        const { query, page = 1, year, genre, sort_by } = params

        return this.request<MovieResponse>('/search/movie', {
            query,
            page,
            year,
            with_genres: genre,
            sort_by
        })
    }

    async getRecommendations(params: RecommendationParams): Promise<MovieResponse> {
        const { movieId, page = 1 } = params

        return this.request<MovieResponse>(`/movie/${movieId}/recommendations`, { page })
    }

    async getSimilarMovies(params: RecommendationParams): Promise<MovieResponse> {
        const { movieId, page = 1 } = params

        return this.request<MovieResponse>(`/movie/${movieId}/similar`, { page })
    }

    async getGenres(): Promise<{ genres: Array<{ id: number; name: string }> }> {
        return this.request<{ genres: Array<{ id: number; name: string }> }>('/genre/movie/list')
    }

    clearCache(): void {
        this.cache.clear()
    }
}

export const tmdbService = new TMDBService()
