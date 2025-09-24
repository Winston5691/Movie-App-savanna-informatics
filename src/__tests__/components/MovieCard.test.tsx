import { render, screen } from '@testing-library/react'
import MovieCard from '@/components/movies/MovieCard'
import { Movie } from '@/types/movie'

const mockMovie: Movie = {
  id: 1,
  title: 'Test Movie',
  overview: 'This is a test movie overview',
  poster_path: '/test-poster.jpg',
  backdrop_path: '/test-backdrop.jpg',
  release_date: '2023-01-01',
  vote_average: 8.5,
  vote_count: 1000,
  genre_ids: [28, 12],
  adult: false,
  original_language: 'en',
  original_title: 'Test Movie',
  popularity: 100,
  video: false,
}

describe('MovieCard', () => {
  it('renders movie information correctly', () => {
    render(<MovieCard movie={mockMovie} />)
    
    expect(screen.getByText('Test Movie')).toBeInTheDocument()
    expect(screen.getByText('This is a test movie overview')).toBeInTheDocument()
    expect(screen.getByText('8.5')).toBeInTheDocument()
  })

  it('renders with priority when specified', () => {
    const { container } = render(<MovieCard movie={mockMovie} priority={true} />)
    
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('priority', 'true')
  })

  it('renders without priority by default', () => {
    const { container } = render(<MovieCard movie={mockMovie} />)
    
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('priority', 'false')
  })

  it('has correct link href', () => {
    render(<MovieCard movie={mockMovie} />)
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/movies/1')
  })
})
