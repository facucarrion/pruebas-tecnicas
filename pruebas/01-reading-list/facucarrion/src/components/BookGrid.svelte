<script>
  import { library as books } from '../data/books.json'
</script>

<section
  class="flex flex-wrap flex-grow w-full max-w-[650px] gap-6 justify-center"
>
  {#each books as book}
    <img src={book.book.cover} class="w-[30%] h-auto" alt="" />
  {/each}
</section>
