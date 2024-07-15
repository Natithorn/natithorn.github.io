/*const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get("name");
      const id = urlParams.get("id");
      console.log(name);
      document.getElementById("name").innerText = name;
      document.getElementById("Id").innerText = id;*/
fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((data) => {
          const urlParams = new URLSearchParams(window.location.search);
          const name = urlParams.get("name");
          const id = urlParams.get("id");
          document.getElementById("name").innerText = name;
          datas.forEach((element) => {
            const name = element["name"];
            ele.innerHTML +=
              "<div class='col-3'>" +
              "<div class='card'>" +
              "<img class='card-img-top' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'>" +
              "<div class='card-body'>" +
              "<a href='detail/index.html?name=" +
              name +
              "'>" +
              name +
              "</a></div></div></div>";
          });
        })
        .catch((err) => console.error(err));



    