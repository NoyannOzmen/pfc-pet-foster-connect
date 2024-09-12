document.addEventListener('DOMContentLoaded',() =>{

    tableToggleCollapse();
})

function tableToggleCollapse() {
    
    const rows = document.querySelectorAll('.view');

    rows.forEach(row => {
        row.addEventListener('click',()=>{
            const foldNode = event.currentTarget.nextSibling.nextSibling;
            foldNode.classList.toggle('hidden');
        })
        
    });
}