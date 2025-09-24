'use client'

import { useState } from 'react'
import { usePopularMovies, useTopRatedMovies, useNowPlayingMovies, useUpcomingMovies } from '@/hooks/useMovies'
import MovieGrid from '@/components/movies/MovieGrid'
import { useMovieStore } from '@/store/movieStore'
import Pagination from '@/components/ui/Pagination'

export default function HomePage() {
  const [popularPage, setPopularPage] = useState(1)
  const [topRatedPage, setTopRatedPage] = useState(1)
  const [nowPlayingPage, setNowPlayingPage] = useState(1)
  const [upcomingPage, setUpcomingPage] = useState(1)

  const { movies: popularMovies, isLoading: popularLoading } = usePopularMovies(popularPage)
  const { movies: topRatedMovies, isLoading: topRatedLoading } = useTopRatedMovies(topRatedPage)
  const { movies: nowPlayingMovies, isLoading: nowPlayingLoading } = useNowPlayingMovies(nowPlayingPage)
  const { movies: upcomingMovies, isLoading: upcomingLoading } = useUpcomingMovies(upcomingPage)

  const { totalPages: popularTotalPages } = useMovieStore()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Discover Your Next
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Favorite Movie
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore thousands of movies, get personalized recommendations, and find your next cinematic adventure.
          </p>
        </div>
      </section>

      {/* Popular Movies */}
      <section className="mb-12">
        <MovieGrid
          movies={popularMovies}
          isLoading={popularLoading}
          title="Popular Movies"
        />
        {!popularLoading && popularMovies.length > 0 && (
          <div className="mt-8">
            <Pagination
              currentPage={popularPage}
              totalPages={popularTotalPages}
              onPageChange={setPopularPage}
            />
          </div>
        )}
      </section>

      {/* Top Rated Movies */}
      <section className="mb-12">
        <MovieGrid
          movies={topRatedMovies}
          isLoading={topRatedLoading}
          title="Top Rated Movies"
        />
        {!topRatedLoading && topRatedMovies.length > 0 && (
          <div className="mt-8">
            <Pagination
              currentPage={topRatedPage}
              totalPages={popularTotalPages}
              onPageChange={setTopRatedPage}
            />
          </div>
        )}
      </section>

      {/* Now Playing */}
      <section className="mb-12">
        <MovieGrid
          movies={nowPlayingMovies}
          isLoading={nowPlayingLoading}
          title="Now Playing"
        />
        {!nowPlayingLoading && nowPlayingMovies.length > 0 && (
          <div className="mt-8">
            <Pagination
              currentPage={nowPlayingPage}
              totalPages={popularTotalPages}
              onPageChange={setNowPlayingPage}
            />
          </div>
        )}
      </section>

      {/* Upcoming Movies */}
      <section className="mb-12">
        <MovieGrid
          movies={upcomingMovies}
          isLoading={upcomingLoading}
          title="Upcoming Movies"
        />
        {!upcomingLoading && upcomingMovies.length > 0 && (
          <div className="mt-8">
            <Pagination
              currentPage={upcomingPage}
              totalPages={popularTotalPages}
              onPageChange={setUpcomingPage}
            />
          </div>
        )}
      </section>
    </div>
  )
}