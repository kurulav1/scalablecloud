<script>
  import { items } from "./itemStore.js";

  let itemText = "";

  function addItem() {
      if (itemText.trim()) {
          // Use the update method to add the item to the items store
          items.update(currentItems => [...currentItems, itemText]);
          itemText = "";
      }
  }
</script>

<h2>Add an item</h2>

<input type="text" bind:value={itemText} placeholder="Add an item"/>
<button on:click={addItem}>Add!</button>
