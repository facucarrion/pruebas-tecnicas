<script>
  export let value
  export let label = value
  import { activeFilters as writableActiveFilters } from '@/lib/Filters'

  const handleCheckbox = event => {
    const { value, checked } = event.target

    if (checked) {
      writableActiveFilters.update(filters => {
        filters.genre.push(value)
        return filters
      })
    } else {
      writableActiveFilters.update(filters => {
        filters.genre = filters.genre.filter(item => item !== value)
        return filters
      })
    }
  }
</script>

<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
  <div class="flex items-center pl-3">
    <input
      id={`${value}-checkbox`}
      type="checkbox"
      {value}
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      on:change={handleCheckbox}
    />
    <label
      for={`${value}-checkbox`}
      class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {label}
    </label>
  </div>
</li>
