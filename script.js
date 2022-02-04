const container=document.getElementById('container');
const source="https://iskarr.github.io/austindonovan.github.io/api/business.json";

let RestaurantsArray=[];

function CreateElements(){
    let i=0;
    const results=RestrauntsArray.business;
   results.forEach(()=> {
    const card=document.createElement('div');
    card.classList.add('card');
    card.classList.add('row');
    //image
    const image=document.createElement('img');
    image.src=results[i].imageurl;
    image.alt='Company photo';
    //Address
    const Address=document.createElement('p');
    Address.textContent=results[i].address;
    //title
    const Name=document.createElement('h3');
    Name.textContent=results[i].name;
    //description
    const Description=document.createElement('p');
    Description.textContent=results[i].description;
    //Append
    document.body.appendChild(card);
    card.appendChild(image);
    card.appendChild(Name);
    card.appendChild(Description)
    card.appendChild(Address);
    i++;
   });

}
async function getBusiness(){
    try{
    const response=await fetch(source);
    RestrauntsArray=await response.json();
    }catch(error) {
    }
    CreateElements();
}

//on Load

getBusiness();





