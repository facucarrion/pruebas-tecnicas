import { writable } from 'svelte/store'
import { library } from '@/data/books.json'
import type { Book, WritableBooks } from '@/types/books.types'

export const bookList = library.map(({ book }) => book)

export const books = writable<WritableBooks>({
  unread: bookList,
  read: []
})

export const readBook = (book: Book) => {
  books.update(prevBooks => ({
    unread: prevBooks.unread.filter(b => b.ISBN !== book.ISBN),
    read: [...prevBooks.read, book]
  }))
}

export const unreadBook = (book: Book) => {
  books.update(prevBooks => ({
    unread: [...prevBooks.unread, book],
    read: prevBooks.read.filter(b => b.ISBN !== book.ISBN)
  }))
}
