'use client'

import { Movie } from '@/types/movie'
import MovieCard from './MovieCard'
import LoadingSkeleton from './LoadingSkeleton'

interface MovieGridProps {
  movies: Movie[]
  isLoading?: boolean
  title?: string
  showTitle?: boolean
}

export default function MovieGrid({ 
  movies, 
  isLoading = false, 
  title,
  showTitle = true 
}: MovieGridProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        {showTitle && title && (
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 20 }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No movies found</div>
        <p className="text-gray-400 mt-2">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {showTitle && title && (
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie, index) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            priority={index < 8} // Prioritize first 8 images for LCP
          />
        ))}
      </div>
    </div>
  )
}
