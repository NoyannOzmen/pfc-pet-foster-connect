document.addEventListener('DOMContentLoaded', ()=>{
    
    handleSpeciesFilters();
});



function handleSpeciesFilters () {
    
    const animalCards =  document.querySelectorAll('.animal_card');
    
    const speciesCheckboxes = document.querySelectorAll('.species-checkbox');
    
    const allCheckbox = document.getElementById('espece_all');
    
    allCheckbox.addEventListener('change', () => {
        
        if (allCheckbox.checked) {
            
            speciesCheckboxes.forEach(element => {
                element.checked=false;
            });
            
            animalCards.forEach(animalCard => {
                animalCard.classList.remove('hidden')
            })
            
        }
    })
    
    
    speciesCheckboxes.forEach(speciesCheck => {
        
        speciesCheck.addEventListener('change', () => {
            
            if (allCheckbox.checked) {
                const animalCards =  document.querySelectorAll('.animal_card');
                allCheckbox.checked=false
                animalCards.forEach(animalCard => {
                    animalCard.classList.add('hidden')
                })
            }
            
            const animalCards =  document.querySelectorAll(`[data-espece*="${speciesCheck.value}"]`);
            animalCards.forEach(card => {
                card.classList.toggle('hidden');
            });
            
        })
        
    });
    
    
}