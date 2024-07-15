fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        const datas = data["results"];
        const ele = document.getElementById("name");
        let count = 1;
        datas.forEach((element) => {
            const name = element["name"];
            ele.innerHTML +=
                "<div class='col col-3'>" +
                "<div class='card'>" +
                "<img class='card-img-top' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + count + ".png'>" +
                "<div class='card-body'>" +
                "<a href='detail/index.html?name=" +
                name +
                "'>" +
                name +
                "</a></div></div></div>";
            count++;
        });
    })
    .catch((err) => console.error(err));



