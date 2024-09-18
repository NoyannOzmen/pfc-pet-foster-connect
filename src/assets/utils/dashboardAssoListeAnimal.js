document.addEventListener('DOMContentLoaded', ()=>{
    handleFilters();
});


function handleFilters () {
    
    const checkboxes = document.querySelectorAll('.checkbox');
    
    checkboxes.forEach(checkbox => {
        
        checkbox.addEventListener('change', (event) => {
            
            if (event.target.classList.contains('species-checkbox') ) {
                const allSpeciesCheckbox = document.getElementById('espece_all');
                allSpeciesCheckbox.checked=false
            }
            const allStatutCheckbox = document.getElementById('statut_all');
            if (event.target.classList.contains('statut-checkbox') ) {
                allStatutCheckbox.checked=false
            }
            
            //* On initialise et remplit un tableau avec les valeurs qui doivent filtrer 
            const speciesFilter = [];
            const speciesCheckboxes = document.querySelectorAll('.species-checkbox');
            speciesCheckboxes.forEach(species => {
                if (species.checked) {
                    speciesFilter.push(species.value)
                }
            });
            
            const statutFilter = [];
            const statutCheckboxes = document.querySelectorAll('.statut-checkbox');
            statutCheckboxes.forEach(statut => {
                if (statut.checked) {
                    statutFilter.push(statut.value)
                }
            });
            
            const animalCards =  document.querySelectorAll('.animal_card');
            animalCards.forEach(animalCard => {
                
                animalCard.classList.add('hidden');
            });
            
            const visibleCards = Array.from(animalCards).filter(animalCard => {
                
                const F1 = speciesFilter.length ? speciesFilter.includes(animalCard.dataset.espece) : true;
                const F2 = statutFilter.length ? statutFilter.includes(animalCard.dataset.statut) : true;
                
                return (F1 && F2)
                
            })
            
            visibleCards.forEach(visibleCard => {
                visibleCard.classList.remove('hidden');
            });
            
            
        })
        
    });
    
    const allSpeciesCheckbox = document.getElementById('espece_all');
    allSpeciesCheckbox.addEventListener('change', () => {
        
        const speciesCheckboxes = document.querySelectorAll('.species-checkbox');
        
        speciesCheckboxes.forEach(checkbox => {
            checkbox.checked=false
        });
        
        const statutFilter = [];
        const statutCheckboxes = document.querySelectorAll('.statut-checkbox');
        statutCheckboxes.forEach(statut => {
            if (statut.checked) {
                statutFilter.push(statut.value)
            }
        });
        
        const animalCards =  document.querySelectorAll('.animal_card');
        animalCards.forEach(animalCard => {
            
            animalCard.classList.add('hidden');
        });
        
        const visibleCards = Array.from(animalCards).filter(animalCard => {
            
            const F2 = statutFilter.length ? statutFilter.includes(animalCard.dataset.statut) : true;
            return F2
            
        })
        
        visibleCards.forEach(visibleCard => {
            visibleCard.classList.remove('hidden');
        });
        
        
    })
    
    const allStatutCheckbox = document.getElementById('statut_all');
    allStatutCheckbox.addEventListener('change', () => {
        
        const statutCheckboxes = document.querySelectorAll('.statut-checkbox');
        
        statutCheckboxes.forEach(checkbox => {
            checkbox.checked=false
        });
        
        const speciesFilter = [];
        const speciesCheckboxes = document.querySelectorAll('.species-checkbox');
        speciesCheckboxes.forEach(species => {
            if (species.checked) {
                speciesFilter.push(species.value)
            }
        });
        
        const animalCards =  document.querySelectorAll('.animal_card');
        animalCards.forEach(animalCard => {
            
            animalCard.classList.add('hidden');
        });
        
        const visibleCards = Array.from(animalCards).filter(animalCard => {
            
            const F2 = speciesFilter.length ? speciesFilter.includes(animalCard.dataset.espece) : true;
            return F2
            
        })
        
        visibleCards.forEach(visibleCard => {
            visibleCard.classList.remove('hidden');
        });
        
        
    })
    
}