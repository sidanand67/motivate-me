const options = {
    method: "POST",
    headers: {
        "content-type": "application/json",
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
        "X-RapidAPI-Key": "5805d7d488msh4ac8f7ed66f0346p1e0527jsn3a103af397b0",
    },
    body: '{"key1":"value", "key2":"value"}', 
};

const quoteEl = document.querySelector(".quote"); 
const authorEl = document.querySelector(".author"); 

async function fetchAPI(){
    let imageURL = await fetch("https://source.unsplash.com/random/?city,night")
                            .then(response => response.url); 

    document.body.style.background = `url("${imageURL}") no-repeat`; 
    document.body.style.backgroundSize = "cover"; 

    await fetch("https://motivational-quotes1.p.rapidapi.com/motivation", options)
        .then((response) => response.text())
        .then(response => {
            let result = response.split('\n'); 
            result[1] = result[1].slice(1); 
            result[1] = "- " + result[1]; 
            quoteEl.textContent = result[0]; 
            authorEl.textContent = result[1]; 
        })
        .catch((err) => console.error(err));    
  
}


fetchAPI(); 