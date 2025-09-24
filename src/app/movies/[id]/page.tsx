'use client'

import { useParams } from 'next/navigation'
import { useMovieDetails, useRecommendations } from '@/hooks/useMovies'
import MovieDetailsComponent from '@/components/movies/MovieDetails'
import MovieGrid from '@/components/movies/MovieGrid'
import LoadingSkeleton from '@/components/movies/LoadingSkeleton'

export default function MovieDetailsPage() {
  const params = useParams()
  const movieId = parseInt(params.id as string)

  const { movie, isLoading, error } = useMovieDetails(movieId)
  const { movies: recommendations, isLoading: recommendationsLoading } = useRecommendations(movieId)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Movie Not Found</h1>
          <p className="text-gray-600">The movie you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <MovieDetailsComponent movie={movie} />
      
      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <MovieGrid
            movies={recommendations}
            isLoading={recommendationsLoading}
            title="Recommended Movies"
          />
        </div>
      )}
    </div>
  )
}
