var $pokemonRepository = (function() {
  var $repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function getAll() {
  }

  function showDetails(pokemon) {
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(value) {
      value.results.forEach(function(item) {
        var pokemon = {
          name: item.name,
          details.Url: item.url,
        }
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
