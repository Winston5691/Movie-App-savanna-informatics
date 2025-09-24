'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MovieDetails } from '@/types/movie'
import { 
  getImageUrl, 
  getBackdropUrl, 
  formatDate, 
  formatRuntime, 
  formatCurrency 
} from '@/lib/utils'
import { 
  StarIcon, 
  CalendarIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  PlayIcon 
} from '@heroicons/react/24/solid'
import TrailerModal from './TrailerModal'

interface MovieDetailsProps {
  movie: MovieDetails
}

export default function MovieDetailsComponent({ movie }: MovieDetailsProps) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)
  
  const trailer = movie.videos?.results?.find(
    video => video.site === 'YouTube' && video.type === 'Trailer'
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={getBackdropUrl(movie.backdrop_path)}
          alt={movie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Poster */}
              <div className="flex-shrink-0">
                <Image
                  src={getImageUrl(movie.poster_path, 'w500')}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Movie Info */}
              <div className="flex-1 text-white">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  {movie.title}
                </h1>
                
                {movie.tagline && (
                  <p className="text-xl text-gray-300 mb-6 italic">
                    &ldquo;{movie.tagline}&rdquo;
                  </p>
                )}
                
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-lg font-semibold">
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="text-gray-300">
                      ({movie.vote_count.toLocaleString()} votes)
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-5 h-5 text-white" />
                    <span>{formatDate(movie.release_date)}</span>
                  </div>
                  
                  {movie.runtime && (
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-5 h-5 text-white" />
                      <span>{formatRuntime(movie.runtime)}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
                
                {trailer && (
                  <button 
                    onClick={() => setIsTrailerOpen(true)}
                    className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <PlayIcon className="w-5 h-5" />
                    <span>Watch Trailer</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{movie.overview}</p>
            </section>
            
            {/* Cast */}
            {movie.credits?.cast && movie.credits.cast.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cast</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {movie.credits.cast.slice(0, 8).map((actor) => (
                    <div key={actor.id} className="text-center">
                      <Image
                        src={getImageUrl(actor.profile_path, 'w185')}
                        alt={actor.name}
                        width={150}
                        height={225}
                        className="rounded-lg mx-auto mb-2"
                      />
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {actor.name}
                      </h3>
                      <p className="text-gray-600 text-xs">{actor.character}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Production Info */}
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Production Details
              </h3>
              
              <div className="space-y-4">
                {movie.budget > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                      <CurrencyDollarIcon className="w-4 h-4 text-gray-600" />
                      <span>Budget</span>
                    </div>
                    <p className="font-medium">{formatCurrency(movie.budget)}</p>
                  </div>
                )}
                
                {movie.revenue > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                      <CurrencyDollarIcon className="w-4 h-4 text-gray-600" />
                      <span>Revenue</span>
                    </div>
                    <p className="font-medium">{formatCurrency(movie.revenue)}</p>
                  </div>
                )}
                
                <div>
                  <div className="text-sm text-gray-600 mb-1">Status</div>
                  <p className="font-medium">{movie.status}</p>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-1">Original Language</div>
                  <p className="font-medium uppercase">{movie.original_language}</p>
                </div>
              </div>
            </section>
            
            {/* Production Companies */}
            {movie.production_companies && movie.production_companies.length > 0 && (
              <section className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Production Companies
                </h3>
                <div className="space-y-2">
                  {movie.production_companies.map((company) => (
                    <div key={company.id} className="flex items-center space-x-2">
                      {company.logo_path && (
                        <Image
                          src={getImageUrl(company.logo_path, 'w92')}
                          alt={company.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      )}
                      <span className="text-sm font-medium">{company.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      
      {/* Trailer Modal */}
      {trailer && (
        <TrailerModal
          isOpen={isTrailerOpen}
          onClose={() => setIsTrailerOpen(false)}
          videoKey={trailer.key}
          title={movie.title}
        />
      )}
    </div>
  )
}
