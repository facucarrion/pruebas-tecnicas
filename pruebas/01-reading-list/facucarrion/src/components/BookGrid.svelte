<script lang="ts">
  import { unreadBook, readBook, books as writableBookList } from '@/lib/Books'
  import {
    activeFilters as writableActiveFilters,
    isInGenre,
    isInPages,
    isInSearch
  } from '@/lib/Filters'
  import type { WritableBooks } from '@/types/books.types'
  import type { Filters } from '@/types/filters.types'

  let books: WritableBooks
  let activeFilters: Filters

  writableBookList.subscribe(value => {
    books = value
  })

  writableActiveFilters.subscribe(value => {
    activeFilters = value
  })
</script>

<section class="flex w-full max-w-[800px] justify-between">
  <section class="flex flex-wrap gap-5 items-start w-[73%] h-max">
    {#each books.unread.filter(book => isInGenre(book, activeFilters.genre) && isInPages(book, activeFilters.pages) && isInSearch(book, activeFilters.search)) as unreadBook}
      <button
        class="w-[31%] overflow-hidden flex justify-center h-[275px]"
        on:click={() => {
          readBook(unreadBook)
        }}
      >
        <img
          src={unreadBook.cover}
          alt={unreadBook.title}
          class="object-cover w-full"
        />
      </button>
    {/each}
  </section>
  <section
    class="flex flex-col w-1/4 px-2 gap-4 border-2 border-dark dark:border-light"
  >
    {#each books.read as readBook}
      <button
        class="w-full overflow-hidden flex justify-center h-[275px] bg-dark dark:bg-light"
        on:click={() => {
          unreadBook(readBook)
        }}
      >
        <img
          src={readBook.cover}
          alt={readBook.title}
          class="object-cover w-full"
        />
      </button>
    {/each}
  </section>
</section>
