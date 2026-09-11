

fetch("data/destinations.json")
    .then(response => {return response.json()}
    )
    .then( data => {
        data.destinations.forEach(destination => {
            console.log(destination);
            
        });
        
        
    }
    )
    