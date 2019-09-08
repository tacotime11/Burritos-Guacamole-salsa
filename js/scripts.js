var $pokemonRepository = (function() {
  function getAll() {
  }

  function showDetails(pokemon) {
  }

  function loadList(){
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
