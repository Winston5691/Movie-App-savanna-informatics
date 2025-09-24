'use client'

import { useState } from 'react'
import { usePopularMovies } from '@/hooks/useMovies'
import { useMovieStore } from '@/store/movieStore'
import MovieGrid from '@/components/movies/MovieGrid'
import Pagination from '@/components/ui/Pagination'

export default function PopularMoviesPage() {
  const [page, setPage] = useState(1)
  const { movies, isLoading, error } = usePopularMovies(page)
  const { totalPages, setCurrentPage } = useMovieStore()

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    setCurrentPage(newPage)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Popular Movies</h1>
        <p className="text-gray-600 mt-2">Discover the most popular movies right now</p>
      </div>

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
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}
