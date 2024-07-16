document.addEventListener('DOMContentLoaded', async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const abilityName = urlParams.get("ability");

        if (!abilityName) {
            throw new Error("Ability name not specified.");
        }

        const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ability "${abilityName}".`);
        }
        const abilityData = await response.json();
        document.getElementById("ability-name").textContent = abilityData.name;

        const pokemonUrls = abilityData.pokemon.map(entry => entry.pokemon.url);
        const pokemonDataRequests = pokemonUrls.map(url => fetch(url).then(res => res.json()));
        const pokemonDataList = await Promise.all(pokemonDataRequests);

        const pokemonContainer = document.getElementById('pokemon-container');
        pokemonContainer.innerHTML = "";
        pokemonDataList.forEach(pokemonData => {
            const card = `
                <div class="col col-3">
                    <div class="card">
                        <img class="card-img-top" src="${pokemonData.sprites.front_default}">
                        <div class="card-body">
                            <h5 class="card-title">${pokemonData.name}</h5>
                            <a href="/natithorn.github.io/Pokedex/detail/index.html?name=${pokemonData.name}" class="btn btn-details">ข้อมูล</a>
                        </div>
                    </div>
                </div>`;
            pokemonContainer.innerHTML += card;
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error display as needed
    }
});
