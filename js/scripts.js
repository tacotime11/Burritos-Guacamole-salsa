var $pokemonRepository = (function() {
  var $repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function getAll() {
    return $repository;
  }

  function showDetails(pokemon) {
    $pokemonRepository.loadDetails(pokemon)
      .then(function(details) {
        showModal(details)
      })
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(value) {
      value.results.forEach(function(pokemon) {
        add(pokemon)
     });
   })
  }

  function add(pokemon) {
    $repository.push(pokemon);
  }

  function addListItem(pokemonItem) {
    var listItemText = $(pokemon.name);
    var buttonText = $('show details');
    var $detailsButton = $('button');
    var $li = $('li');
    var $p =  $('p');
    var $ul = $('.pokemon-list');

    $detailsButton.classlist.add('details-button');
    $p.appendChild(listItemText);
    $li.appendChild($p);
    $li.appendChild($li);

    $detailsButton.addEventListener('click', function(event){
      showDetails(pokemonItem);
    });
  }

  function showModal(details) {

    $modalContainer.innerHTML = '';

    var $modal = $('div');
    $modal.classList.add('modal');


    var $closeButtonElement = $('button');
    $closeButtonElement.innerHTML('modal-close');
    $closeButtonElement.innerText('Close');
    $closeButtonElement.addEventListener('click', hideModal);

    var $titleElement = $('h1');
    $titleElement.innerText(details.name);

    var $contentElement = $('p');
    $contentElement.innerText(details.height);

    var $imageElement = $('img');
    $imageElement.src(details.imageUrl);

    $('body').append($closeButtonElement);
    $('body').append($titleElement);
    $('body').append($contentElement);
    $('body').append($imageElement);
    $('body').append($modal);

    $modalContainer.classList.add('is-visible');
  }

  function loadDetails(pokemon){
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
        return item;
      }).catch(function (e) {
        console.error(e);
      });
}

  function hideModal() {
    $modalContainer.classList.remove('is-visible');

    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }

  return {
    add: add,
    getAll: getAll,
    showDetails: showDetails,
    loadList: loadList,
    addListItem: addListItem,
    loadDetails: loadDetails,
  };
})();

$pokemonRepository.loadList().then(function(){
var $pokemon = $pokemonRepository.getAll();

$pokemonRepository.getAll().forEach(function(pokemon){
  $pokemonRepository.addListItem(pokemon);
});
});
