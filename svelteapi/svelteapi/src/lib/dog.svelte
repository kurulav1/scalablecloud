<script>
  const fetchDogFact = async () => {
    const response = await fetch('https://dogapi.dog/api/v2/facts');
    const data = await response.json();
    return data.data[0].attributes.body;
  };

  let fact = "";

  const updateFact = async () => {
    fact = await fetchDogFact();
  };
</script>

<button on:click={updateFact}>Fetch a dog fact</button>

<p>{fact}</p>
