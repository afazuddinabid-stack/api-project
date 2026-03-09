const cardContainer = document.getElementById("card-container");
async function loadcards() {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    console.log(data);
    displayCard(data.data);
}



function displayCard(cards){
    console.log(cards);
    cards.forEach(card => {
     console.log(card);

    })
}
loadcards();

   
