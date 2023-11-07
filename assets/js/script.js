console.log("script chargée !");




    let rue = document.getElementById("rue_facturation");

// Ajouter un écouteur d'événement pour surveiller le clic sur le bouton
        rue.addEventListener("click", function(){
            fetch('https://api.exemple.com/adresse') // Remplacez l'URL par l'URL réelle de l'API
                .then(response => response.json())
                .then(data => {
                    let adresseInput = document.getElementById("adresseInput");
                    adresseInput.value = data.address; // Assurez-vous que la réponse de l'API est correctement traitée ici
});