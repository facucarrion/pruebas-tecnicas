<script>
  import { theme } from '../lib/Theme'
  import { toggleTheme } from '../lib/Theme'
  let checked = false

  theme.subscribe(value => {
    checked = value === 'dark' ? true : false
  })
</script>

<label class="relative inline-flex items-center mb-5 cursor-pointer">
  <input
    type="checkbox"
    class="sr-only peer"
    {checked}
    on:change={toggleTheme}
  />
  <div
    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
  />
</label>
