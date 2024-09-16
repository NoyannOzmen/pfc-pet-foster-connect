document.addEventListener('DOMContentLoaded', () => {

makeAdressList();
})


async function gouvApiCall (search) {
    const BASE_URL = 'https://api-adresse.data.gouv.fr/search/?q=';


    
    const searchParams = search.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[\s\W]/g, '+');
    let url = BASE_URL+searchParams+'&limit=5'
    
    const res = await fetch(url);
    const foundAddresses = res.json();

    return foundAddresses
}


async function makeAdressList () {

    const inputApi = document.getElementById('api-gouv');
    
    inputApi.addEventListener('change', async (event)=> {
    
        const adresses = await gouvApiCall(inputApi.value);

        const addressContainer=document.getElementById('address-container');
        addressContainer.textContent='';


        adresses.features.forEach((address,i) => {

            const addressBox = document.createElement('div');
            addressBox.classList.add('bg-fond', 'border-solid', 'border-texte', 'border-2','p-2','hover:bg-accents1');
            addressBox.role='listitem';
            const addressText = document.createElement('p');
            addressText.innerText=`${address.properties.label}`;

            addressBox.appendChild(addressText);
            addressContainer.appendChild(addressBox);
        });
    
        
    })

}
