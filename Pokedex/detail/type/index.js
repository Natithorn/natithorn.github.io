document.addEventListener('DOMContentLoaded', async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const typeName = urlParams.get("type");

        if (!typeName) {
            throw new Error("Type name not specified.");
        }

        const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch type "${typeName}".`);
        }
        const typeData = await response.json();
        document.getElementById("type-name").textContent = typeData.name;

        const pokemonUrls = typeData.pokemon.map(entry => entry.pokemon.url);
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
