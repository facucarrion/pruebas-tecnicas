<script>
  import { activeFilters as writableActiveFilters } from '@/lib/Filters'

  let inputValue

  writableActiveFilters.subscribe(({ pages }) => (inputValue = pages))

  const maxPages = inputValue
  const minPages = 0

  const handleRange = event => {
    inputValue = event.target.value
    writableActiveFilters.update(filters => {
      return {
        ...filters,
        pages: inputValue
      }
    })
  }
</script>

<div class="flex flex-col">
  <label
    for="default-range"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Max Pages:
  </label>

  <input
    id="default-range"
    type="range"
    class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    max="2000"
    min="0"
    step="100"
    bind:value={inputValue}
    on:input={handleRange}
  />
  <span class="w-full flex justify-between mt-2">
    <span
      class="text-sm font-medium text-gray-900 dark:text-white flex-grow basis-0"
    >
      {minPages}
    </span>
    <span class="text-sm font-semibold text-gray-900 dark:text-white mr-2">
      {inputValue}
    </span>
    <span
      class="text-sm font-medium text-gray-900 dark:text-white flex-grow basis-0 flex justify-end"
    >
      {maxPages}
    </span>
  </span>
</div>
