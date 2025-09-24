import { tmdbService } from '@/services/tmdb'

// Mock fetch
global.fetch = jest.fn()

describe('TMDB Service', () => {
    beforeEach(() => {
        (fetch as jest.Mock).mockClear()
        tmdbService.clearCache()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('getPopularMovies', () => {
        it('should fetch popular movies successfully', async () => {
            const mockResponse = {
                page: 1,
                results: [
                    {
                        id: 1,
                        title: 'Test Movie',
                        overview: 'Test overview',
                        poster_path: '/test.jpg',
                        backdrop_path: '/backdrop.jpg',
                        release_date: '2023-01-01',
                        vote_average: 8.5,
                        vote_count: 1000,
                        genre_ids: [28],
                        adult: false,
                        original_language: 'en',
                        original_title: 'Test Movie',
                        popularity: 100,
                        video: false,
                    },
                ],
                total_pages: 10,
                total_results: 200,
            }

                ; (fetch as jest.Mock).mockResolvedValueOnce({
                    ok: true,
                    json: async () => mockResponse,
                })

            const result = await tmdbService.getPopularMovies(1)

            expect(fetch).toHaveBeenCalledWith(
                expect.stringContaining('/movie/popular')
            )
            expect(result).toEqual(mockResponse)
        })

        it('should handle API errors', async () => {
            ; (fetch as jest.Mock).mockResolvedValueOnce({
                ok: false,
                status: 500,
                statusText: 'Internal Server Error',
            })

            await expect(tmdbService.getPopularMovies(1)).rejects.toThrow(
                'TMDB API error: 500 Internal Server Error'
            )
        })
    })

    describe('getMovieDetails', () => {
        it('should fetch movie details successfully', async () => {
            const mockResponse = {
                id: 1,
                title: 'Test Movie',
                overview: 'Test overview',
                poster_path: '/test.jpg',
                backdrop_path: '/backdrop.jpg',
                release_date: '2023-01-01',
                vote_average: 8.5,
                vote_count: 1000,
                genre_ids: [28],
                adult: false,
                original_language: 'en',
                original_title: 'Test Movie',
                popularity: 100,
                video: false,
                genres: [{ id: 28, name: 'Action' }],
                runtime: 120,
                budget: 100000000,
                revenue: 500000000,
                status: 'Released',
                tagline: 'Test tagline',
                production_companies: [],
                production_countries: [],
                spoken_languages: [],
                credits: { cast: [], crew: [] },
                videos: { results: [] },
                images: { backdrops: [], posters: [] },
            }

                ; (fetch as jest.Mock).mockResolvedValueOnce({
                    ok: true,
                    json: async () => mockResponse,
                })

            const result = await tmdbService.getMovieDetails(1)

            expect(fetch).toHaveBeenCalledWith(
                expect.stringContaining('/movie/1')
            )
            expect(result).toEqual(mockResponse)
        })
    })

    describe('searchMovies', () => {
        it('should search movies successfully', async () => {
            const mockResponse = {
                page: 1,
                results: [],
                total_pages: 1,
                total_results: 0,
            }

                ; (fetch as jest.Mock).mockResolvedValueOnce({
                    ok: true,
                    json: async () => mockResponse,
                })

            const result = await tmdbService.searchMovies({
                query: 'test',
                page: 1,
            })

            expect(fetch).toHaveBeenCalledWith(
                expect.stringContaining('/search/movie')
            )
            expect(result).toEqual(mockResponse)
        })
    })

    describe('caching', () => {
        it('should cache responses', async () => {
            const mockResponse = { page: 1, results: [], total_pages: 1, total_results: 0 }

                ; (fetch as jest.Mock).mockResolvedValueOnce({
                    ok: true,
                    json: async () => mockResponse,
                })

            // First call
            await tmdbService.getPopularMovies(1)
            expect(fetch).toHaveBeenCalledTimes(1)

            // Second call should use cache
            await tmdbService.getPopularMovies(1)
            expect(fetch).toHaveBeenCalledTimes(1)
        })
    })
})
