
document.addEventListener('DOMContentLoaded', ()=> {
    
    handleAddTag();
});


function handleAddTag() {
    
    const addTagBtn = document.getElementById('create-tag');
    const addTagModal =  document.getElementById('create-tags-modal');
    const addTagForm = document.getElementById('create-tags-form');
    
    addTagBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        addTagModal.classList.toggle('hidden');
        
    })
    
    const closeBtns = document.querySelectorAll('.cancel');
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click',(event)=>{
            event.preventDefault();
            
            addTagModal.classList.toggle('hidden');
            addTagForm.reset();
        })
        
    });
    
    //TODO Fetch pour update la liste des tags ?
    addTagForm.addEventListener('submit', async (event)=>{
        event.preventDefault();
        
        const tagData = new FormData(addTagForm)
        
        
        //* FETCH POUR AJOUTER UN TAG EN BDD 
        //! ATTENTION ICI A REVOIR : L'ADRESSE A CHANGER EN PROD ? LA RECUPERER DEPUIS UN .ENV ?
        //! EGALEMENT MANQUE DE SECURISATION ?
        let url = `http://localhost:3000/tags/create`;
        
        const response = await fetch(
            url, 
            {
                method:'POST',
                body:tagData,
            }
            );
            
            
            const data= await response.json();
            
            //* VIDE LES OPTIONS PRESENTES DANS LE SELECT
            const selectTagForm = document.getElementById('tags-animal');
            
            selectTagForm.innerHTML='';
            
            //* REMPLIT LE SELECT AVEC LA LISTE DE TAG UPDATED
            data.forEach(tag => {
                const tagOption = document.createElement('input');
                //TODO CHANGER POUR UN FIELD DE CHECKBOX A LA PLCE DES OPTIONS
                tagOption.value= `${tag.id}`
                tagOption.innerText=`${tag.nom}`

                selectTagForm.appendChild(tagOption);
            });
            addTagModal.classList.toggle('hidden');



        })
    }
    
    