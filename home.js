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
     const cardElement = document.createElement("div");
     cardElement.className = "card  w-100 px-6 border-t-6 border-green-600 mt-6 shadow-lg "
     cardElement.innerHTML = `
     <div class="flex justify-between px-4">
          <img src="./assets/Open-Status.png" alt="">
          <div class="text-[#EF4444] w-15 text-center rounded-3xl bg-slate-300">${card.priority}</div>
        </div>
        <div>
          <h1 class="text-2xl">${card.title}</h1>
          <br>
          <p>${card.description}</p>
          <div class="flex gap-4 mt-3">
            <div class="bg-[#FECACA] text-[#EF4444] rounded  text-center">${card.labels}</div>
            <div class="text-[#D97706] bg-[#FDE68A] rounded px-3">${card.labels}</div>
          </div>
          <br>
          <div>
            <p>#${card.id} by ${card.author}</p>
            <p>${card.createdAt}</p>
          </div>
        </div>
`
        cardContainer.appendChild(cardElement);

    })
}
loadcards();

   
