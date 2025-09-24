'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Movie } from '@/types/movie'
import { getImageUrl, formatDate } from '@/lib/utils'
import { StarIcon, CalendarIcon } from '@heroicons/react/24/outline'

interface MovieCardProps {
  movie: Movie
  priority?: boolean
}

export default function MovieCard({ movie, priority = false }: MovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={getImageUrl(movie.poster_path, 'w500')}
          alt={movie.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
          priority={priority}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200" />
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-90 text-white px-2 py-1 rounded-md flex items-center space-x-1 shadow-lg border border-yellow-400/20">
          <StarIcon className="w-3 h-3 text-yellow-400 stroke-2" />
          <span className="text-xs font-medium text-white">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600">
          <CalendarIcon className="w-4 h-4 text-gray-700 stroke-2" />
          <span className="text-gray-600">{formatDate(movie.release_date)}</span>
        </div>
        
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {movie.overview}
        </p>
      </div>
    </Link>
  )
}
