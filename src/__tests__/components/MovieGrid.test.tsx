import { render, screen } from '@testing-library/react'
import MovieGrid from '@/components/movies/MovieGrid'
import { Movie } from '@/types/movie'

const mockMovies: Movie[] = [
  {
    id: 1,
    title: 'Test Movie 1',
    overview: 'This is a test movie overview 1',
    poster_path: '/test-poster1.jpg',
    backdrop_path: '/test-backdrop1.jpg',
    release_date: '2023-01-01',
    vote_average: 8.5,
    vote_count: 1000,
    genre_ids: [28, 12],
    adult: false,
    original_language: 'en',
    original_title: 'Test Movie 1',
    popularity: 100,
    video: false,
  },
  {
    id: 2,
    title: 'Test Movie 2',
    overview: 'This is a test movie overview 2',
    poster_path: '/test-poster2.jpg',
    backdrop_path: '/test-backdrop2.jpg',
    release_date: '2023-02-01',
    vote_average: 7.5,
    vote_count: 500,
    genre_ids: [35, 18],
    adult: false,
    original_language: 'en',
    original_title: 'Test Movie 2',
    popularity: 80,
    video: false,
  },
]

describe('MovieGrid', () => {
  it('renders movies correctly', () => {
    render(<MovieGrid movies={mockMovies} title="Test Movies" />)
    
    expect(screen.getByText('Test Movies')).toBeInTheDocument()
    expect(screen.getByText('Test Movie 1')).toBeInTheDocument()
    expect(screen.getByText('Test Movie 2')).toBeInTheDocument()
  })

  it('renders loading skeleton when loading', () => {
    render(<MovieGrid movies={[]} isLoading={true} title="Test Movies" />)
    
    expect(screen.getByText('Test Movies')).toBeInTheDocument()
    // Check for loading skeletons (they should have specific classes)
    const skeletons = document.querySelectorAll('.animate-pulse')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('renders no movies message when empty', () => {
    render(<MovieGrid movies={[]} isLoading={false} title="Test Movies" />)
    
    expect(screen.getByText('No movies found')).toBeInTheDocument()
    expect(screen.getByText('Try adjusting your search criteria')).toBeInTheDocument()
  })

  it('hides title when showTitle is false', () => {
    render(<MovieGrid movies={mockMovies} title="Test Movies" showTitle={false} />)
    
    expect(screen.queryByText('Test Movies')).not.toBeInTheDocument()
  })
})
