  (function () {
    var $pokemonRepository = (function() {
  var $repository = [];
  var $apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
})

  function getAll() {
    return $repository;
  }

  function showDetails(pokemon) {
    function showDetails(pokemon){
      $pokemonRepository.loadDetails(pokemon)
  }

  function loadList(){
    return $.ajax(apiUrl, {dataType: 'json'}).then(function(item){
      $.each(item.results, function(index, item){
        var $pokemon = {
          name: item.name,
          detailsUrl: item.url
        }
        add(pokemon)
      })
      }).catch(function(e){
      console.error(e);
    });
  }

  function addListItem(pokemon){
    var $listItem = $();
    listItem.text(pokemon.name);
    $pokemonList.append(listItem);
    listItem.click(function() {
      showDetails(pokemon)
    });
  }

  function loadDetails(item) {
    var $url = item.detailsUrl;
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

  var $modalContainer = document.querySelector('#modal-container');
  var dialogPromiseReject;

  function showModal(details) {

    $modalContainer.innerHTML = '';

    var $modal = document.createElement('div');
    $modal.addclass('modal');


    function showDetails(pokemon){
      pokemonRepository.loadDetails(pokemon).then(function() {
        var modal = $('.modal-body');
        var name = $('.modal-title').text(pokemon.name);
        var height = $('modal.height>').text(pokemon.height);
        var image = $('<img class="pokemon-image">');
        image.attr('src', pokemon.imageUrl);


        if(modal.children().length) {
          modal.children().remove();
        }

        modal.append(image)
             .append(height)
             .append(type);

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

  $.each($pokemon, function{
        addListItem.$pokemon;
  });
});
})();
