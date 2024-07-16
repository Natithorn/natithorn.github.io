const offset = 0;
const limit = 40;
let apiUrl;

const fetchData = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const typeName = urlParams.get("type");
        const abilityName = urlParams.get("ability");

        if (typeName) {
            apiUrl = `https://pokeapi.co/api/v2/type/${typeName}?limit=${limit}&offset=${offset}`;
        } else if (abilityName) {
            apiUrl = `https://pokeapi.co/api/v2/ability/${abilityName}?limit=${limit}&offset=${offset}`;
        } else {
            apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        const pokemons = typeName || abilityName ? data.pokemon : data.results;
        const pokemonContainer = document.getElementById('pokemon-container');

        pokemons.forEach((entry, index) => {
            const pokemon = entry.pokemon || entry;
            const card = document.createElement('div');
            card.classList.add('col', 'col-3');
        
            card.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.name}</h5>
                        <a href="detail/index.html?name=${pokemon.name}" class="btn btn-details">ข้อมูล</a>
                    </div>
                </div>
            `;
            
            pokemonContainer.appendChild(card);
        });

        
        offset += limit;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const handleLoadMore = () => {
    fetchData();
};

document.getElementById('load-more').addEventListener('click', handleLoadMore);


document.addEventListener('DOMContentLoaded', fetchData);
