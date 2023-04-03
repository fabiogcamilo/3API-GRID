
//chamar api pokemon//

function buscarPokemon() {
    const nomePokemon = document.getElementById('nomePokemon').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
      .then(response => response.json())
      .then(data => {
        const imagemPokemon = document.getElementById('imagemPokemon');
        imagemPokemon.removeAttribute('hidden');
        imagemPokemon.src = data.sprites.front_default;
        imagemPokemon.alt = `Imagem do ${nomePokemon}`;
      })
      .catch(error => console.error(error));
  }

