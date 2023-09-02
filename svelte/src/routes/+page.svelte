<script>
  let numbers = [];
  let sum = 0;
  let average = 0;
  let input = "";

  const addNumber = () => {
    let number = parseFloat(input);
    if (isNaN(number)) {
      return;
    }
    numbers = [...numbers, number];
    sum += number;
    average = sum / numbers.length;
    input = "";
  };
</script>

<h1>Statistics generator</h1>

<input type="text" bind:value={input} placeholder="number here">
<button on:click={addNumber}>Add value</button>

<h2>Statistics</h2>

<p>Sum: {sum}</p>
<p>Total numbers: {numbers.length}</p>
<p>Average: {average}</p>

<h2>Numbers entered so far</h2>

<ul>
  {#each numbers as number, index (index)}
    <li>{number}</li>
  {/each}
</ul>