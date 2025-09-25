'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useSearchMovies } from '@/hooks/useMovies'
import { useMovieStore } from '@/store/movieStore'
import { SearchParams } from '@/types/movie'
import SearchBar from '@/components/search/SearchBar'
import SearchFilters from '@/components/search/SearchFilters'
import MovieGrid from '@/components/movies/MovieGrid'
import Pagination from '@/components/ui/Pagination'

function SearchPageContent() {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState<Partial<SearchParams>>({
    query: searchParams.get('q') || '',
    page: 1,
    sort_by: 'popularity.desc'
  })

  const { movies, isLoading, error } = useSearchMovies(filters as SearchParams)
  const { totalPages, currentPage, setCurrentPage } = useMovieStore()

  useEffect(() => {
    const query = searchParams.get('q')
    if (query) {
      setFilters(prev => ({ ...prev, query, page: 1 }))
    }
  }, [searchParams])

  const handleFiltersChange = (newFilters: Partial<SearchParams>) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }))
  }

  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page }))
    setCurrentPage(page)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Movies</h1>
        
        <div className="mb-6">
          <SearchBar
            initialQuery={filters.query || ''}
            placeholder="Search for movies..."
            onSearch={(query) => handleFiltersChange({ query })}
          />
        </div>

        <SearchFilters
          initialFilters={filters}
          onFiltersChange={handleFiltersChange}
        />
      </div>

      {filters.query && (
        <div className="mb-6">
          <p className="text-gray-600">
            {isLoading ? 'Searching...' : `Found ${movies.length} movies for "${filters.query}"`}
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <MovieGrid
        movies={movies}
        isLoading={isLoading}
        showTitle={false}
      />

      {!isLoading && movies.length > 0 && totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  )
}
