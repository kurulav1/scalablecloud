<script>
    import { items } from "./itemStore.js";
  </script>
  
  <h2>Items</h2>
  
  <ul>
    {#each $items as item (item)}
      <li>{item}</li>
    {/each}
  </ul>
  