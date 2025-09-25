'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { debounce } from '@/lib/utils'

interface SearchBarProps {
  initialQuery?: string
  placeholder?: string
  showClearButton?: boolean
  onSearch?: (query: string) => void
}

export default function SearchBar({ 
  initialQuery = '', 
  placeholder = 'Search movies...',
  showClearButton = true,
  onSearch 
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const debouncedSearch = debounce((searchQuery: string) => {
    if (onSearch) {
      onSearch(searchQuery)
    } else {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  } as any, 300)

  useEffect(() => {
    if (query) {
      debouncedSearch(query)
    }
  }, [query, debouncedSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleClear = () => {
    setQuery('')
    if (onSearch) {
      onSearch('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {showClearButton && query && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </form>
  )
}
