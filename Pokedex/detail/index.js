document.addEventListener('DOMContentLoaded', async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get("name");

        if (!name) {
            throw new Error("Pokemon name not specified.");
        }

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            throw new Error(`Pokemon "${name}" not found.`);
        }
        const pokemonData = await response.json();

        document.getElementById("pokemon-name").innerText = pokemonData.name;
        document.getElementById("pokemon-image").src = pokemonData.sprites.front_default;
        document.getElementById("pokemon-height").innerText = `Height: ${pokemonData.height / 10} m`;
        document.getElementById("pokemon-weight").innerText = `Weight: ${pokemonData.weight / 10} kg`;

        // Types
        const typesContainer = document.getElementById("pokemon-types");
        typesContainer.innerHTML = "";
        pokemonData.types.forEach(type => {
            const typeElement = document.createElement("span");
            typeElement.textContent = type.type.name;
            typeElement.classList.add("badge", "bg-primary", "me-1", "mb-1");
            typeElement.style.cursor = "pointer";
            typeElement.onclick = () => {
                window.location.href = `/natithorn.github.io/Pokedex/detail/type/index.html?type=${type.type.name}`;
            };
            typesContainer.appendChild(typeElement);
        });

        // Stats
        const statsContainer = document.getElementById("pokemon-stats");
        statsContainer.innerHTML = "";
        pokemonData.stats.forEach(stat => {
            const statElement = document.createElement("p");
            statElement.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            statsContainer.appendChild(statElement);
        });

        // Abilities
        const abilitiesContainer = document.getElementById("pokemon-abilities");
        abilitiesContainer.innerHTML = "";
        await Promise.all(pokemonData.abilities.map(async ability => {
            const abilityResponse = await fetch(ability.ability.url);
            const abilityData = await abilityResponse.json();

            const abilityElement = document.createElement("span");
            abilityElement.textContent = abilityData.name;
            abilityElement.classList.add("badge", "bg-secondary", "me-1", "mb-1");
            abilityElement.style.cursor = "pointer";
            abilityElement.onclick = () => {
                window.location.href = `/natithorn.github.io/Pokedex/detail/ability/index.html?ability=${abilityData.name}`;
            };
            abilitiesContainer.appendChild(abilityElement);
        }));

    } catch (error) {
        console.error('Error fetching data:', error);
        const errorContainer = document.getElementById("error-message");
        errorContainer.textContent = error.message;
    }
});
