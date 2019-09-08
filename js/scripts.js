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

  function addListItem(pokemon){
  }

  function loadDetails(item) {

  }

  function showModal(item) {
  }


  function showDetails(pokemon){
  }

  function hideModal() {
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
