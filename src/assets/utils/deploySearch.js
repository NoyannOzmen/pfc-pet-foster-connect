const shortSearch = document.getElementById('fullSearch');
const filters = document.getElementById('searchCriterias');

const deployButton = document.getElementById('deploy');

deployButton.addEventListener("click", function() {
  shortSearch.classList.toggle('hidden');
  filters.classList.toggle('hidden');
});