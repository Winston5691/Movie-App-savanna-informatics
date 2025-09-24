// Mock environment variables
process.env.NEXT_PUBLIC_TMDB_API_KEY = 'test-api-key'
process.env.NEXT_PUBLIC_TMDB_BASE_URL = 'https://api.themoviedb.org/3'
process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

// Mock Next.js Image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: Record<string, unknown>) => {
        return React.createElement('img', props)
    },
}))

// Mock Next.js Link component
jest.mock('next/link', () => ({
    __esModule: true,
    default: ({ children, href, ...props }: { children: React.ReactNode; href: string;[key: string]: unknown }) => {
        return React.createElement('a', { href, ...props }, children)
    },
}))

// Mock Next.js useRouter
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        back: jest.fn(),
        forward: jest.fn(),
        refresh: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
        get: jest.fn(),
    }),
    usePathname: () => '/',
}))

// Mock NextAuth
jest.mock('next-auth/react', () => ({
    useSession: () => ({
        data: null,
        status: 'unauthenticated',
    }),
    signIn: jest.fn(),
    signOut: jest.fn(),
    getProviders: jest.fn(() => Promise.resolve({})),
}))

// Import React for createElement
import React from 'react'