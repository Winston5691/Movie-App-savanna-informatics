import {
    formatDate,
    formatRuntime,
    formatCurrency,
    getImageUrl,
    getBackdropUrl,
    getProfileUrl,
    debounce
} from '@/lib/utils'

describe('Utils', () => {
    describe('formatDate', () => {
        it('should format date correctly', () => {
            expect(formatDate('2023-01-15')).toBe('January 15, 2023')
            expect(formatDate('2023-12-25')).toBe('December 25, 2023')
        })
    })

    describe('formatRuntime', () => {
        it('should format runtime correctly', () => {
            expect(formatRuntime(90)).toBe('1h 30m')
            expect(formatRuntime(60)).toBe('1h 0m')
            expect(formatRuntime(45)).toBe('45m')
            expect(formatRuntime(0)).toBe('0m')
        })
    })

    describe('formatCurrency', () => {
        it('should format currency correctly', () => {
            expect(formatCurrency(1000000)).toBe('$1,000,000')
            expect(formatCurrency(50000000)).toBe('$50,000,000')
            expect(formatCurrency(0)).toBe('$0')
        })
    })

    describe('getImageUrl', () => {
        beforeEach(() => {
            process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
        })

        it('should return correct image URL', () => {
            expect(getImageUrl('/test.jpg')).toBe('https://image.tmdb.org/t/p/w500/test.jpg')
            expect(getImageUrl('/test.jpg', 'w300')).toBe('https://image.tmdb.org/t/p/w300/test.jpg')
        })

        it('should return placeholder for null path', () => {
            expect(getImageUrl(null)).toBe('/placeholder-movie.jpg')
        })
    })

    describe('getBackdropUrl', () => {
        beforeEach(() => {
            process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
        })

        it('should return correct backdrop URL', () => {
            expect(getBackdropUrl('/backdrop.jpg')).toBe('https://image.tmdb.org/t/p/w1280/backdrop.jpg')
            expect(getBackdropUrl('/backdrop.jpg', 'w780')).toBe('https://image.tmdb.org/t/p/w780/backdrop.jpg')
        })

        it('should return placeholder for null path', () => {
            expect(getBackdropUrl(null)).toBe('/placeholder-backdrop.jpg')
        })
    })

    describe('getProfileUrl', () => {
        beforeEach(() => {
            process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
        })

        it('should return correct profile URL', () => {
            expect(getProfileUrl('/profile.jpg')).toBe('https://image.tmdb.org/t/p/w185/profile.jpg')
            expect(getProfileUrl('/profile.jpg', 'w45')).toBe('https://image.tmdb.org/t/p/w45/profile.jpg')
        })

        it('should return placeholder for null path', () => {
            expect(getProfileUrl(null)).toBe('/placeholder-profile.jpg')
        })
    })

    describe('debounce', () => {
        jest.useFakeTimers()

        it('should debounce function calls', () => {
            const mockFn = jest.fn()
            const debouncedFn = debounce(mockFn, 100)

            debouncedFn('test1')
            debouncedFn('test2')
            debouncedFn('test3')

            expect(mockFn).not.toHaveBeenCalled()

            jest.advanceTimersByTime(100)

            expect(mockFn).toHaveBeenCalledTimes(1)
            expect(mockFn).toHaveBeenCalledWith('test3')
        })

        afterEach(() => {
            jest.useRealTimers()
        })
    })
})
