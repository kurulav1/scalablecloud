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
    numbers.push(number);
    sum += number;
    average = sum / numbers.length;
    input = "";
  };
</script>

<input type="text" bind:value={input} placeholder="Enter a number">
<button on:click={addNumber}>Add Number</button>

<p>
  The sum of the numbers is: {sum}
</p>

<p>
  The count of numbers is: {numbers.length}
</p>

<p>
  The average of the numbers is: {average}
</p>

<p>
  Here are the numbers you have inputted:
</p>

<ul>
  {#each numbers as number}
    <li>{number}</li>
  {/each}
</ul>
