import type { Book } from '@/types/books.types'
import type { Filters, GenreFilter } from '@/types/filters.types'
import { writable } from 'svelte/store'
import { bookList } from './Books'

const maxPages = Math.max(...bookList.map(book => book.pages))

export const activeFilters = writable<Filters>({
  genre: [],
  pages: maxPages + (1000 - +(maxPages % 1000)),
  search: ''
})

export const isInGenre = (book: Book, genres: GenreFilter[]) => {
  return genres.length === 0 || genres.some(genre => book.genre.includes(genre))
}

export const isInPages = (book: Book, pages: number) => {
  return book.pages <= pages
}

export const isInSearch = (book: Book, search: string) => {
  return (
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.name.toLowerCase().includes(search.toLowerCase())
  )
}
