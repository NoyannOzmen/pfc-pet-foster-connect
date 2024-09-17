document.addEventListener('DOMContentLoaded', ()=>{
    
    handleSpeciesFilters();
    handleStatutFilters();
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

function handleStatutFilters () {

    const statutCheckboxes = document.querySelectorAll('.statut-checkbox');
    const allCheckbox = document.getElementById('statut_all');

    statutCheckboxes.forEach(statutCheck => {

        statutCheck.addEventListener('change', () => {
            
            if (allCheckbox.checked) {
                
                const visibleCards =  document.querySelectorAll('.animal_card--visible');
                allCheckbox.checked=false
                visibleCards.forEach(animalCard => {
                    animalCard.classList.add('hidden')
                    animalCard.classList.remove('animal_card--visible')
                })
            }
            
            const visibleCards =  document.querySelectorAll(`[data-espece*="${statutCheck.value}"]`);
            visibleCards.forEach(card => {
                card.classList.toggle('hidden');
            });
            
        })

    })


}