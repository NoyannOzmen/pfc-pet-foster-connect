document.addEventListener('DOMContentLoaded',() =>{

  tableToggleCollapse();
})

function tableToggleCollapse() {
  
  const rows = document.querySelectorAll('.view');

  rows.forEach(row => {
      row.addEventListener('click',(event)=>{
        
          let foldNode = row.nextElementSibling.nextElementSibling;
          foldNode.classList.toggle('hidden')
          let nextSibling = foldNode.nextElementSibling;

          while(nextSibling && !nextSibling.classList.contains('font-grands')) {
            nextSibling.classList.toggle('hidden');
            nextSibling = nextSibling.nextElementSibling;
          }
      })
      
  });
}