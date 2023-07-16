<script lang="ts">
  import Checkbox from './Checkbox.svelte'
</script>

<ul
  class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
>
  <li
    class="w-full border-b py-2 text-xl border-gray-200 rounded-t-lg dark:border-gray-600"
  >
    <div class="flex items-center pl-3">Géneros</div>
  </li>
  <Checkbox value="Fantasía" />
  <Checkbox value="Ciencia ficción" label="Ciencia Ficción" />
  <Checkbox value="Terror" />
  <Checkbox value="Zombies" />
</ul>
