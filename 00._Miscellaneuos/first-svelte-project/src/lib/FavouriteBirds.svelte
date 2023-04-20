<script>
    import Bird from "./Bird.svelte";

    const birds = ["pigeon","crow", "Raven"];

    let birdIndex = 0;
    let FavouriteBird = birds[birdIndex];


    function changeFavouriteBird() {
        birdIndex = (birdIndex + 1) %birds.length;
        FavouriteBird = birds[birdIndex];
    }
</script>
<div>
    <Bird 
        on:click={changeFavouriteBird}
        name={FavouriteBird}
    />
</div>

