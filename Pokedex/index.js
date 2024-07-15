fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((data) => {
          const datas = data["results"];
          const ele = document.getElementById("name");
          let count = 1;
          datas.forEach((element) => {
            ele.innerHTML +=
              "<div class='col-3'>" +
              "<div class='card'>" +
              "<img class='card-img-top' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+count+".png'>" +
              "<div class='card-body'>" +
              "<a href =''>" +
              element["name"] +
              "</a></div></div></div>";
              count++;
          });
        })
        .catch((err) => console.error(err));
    