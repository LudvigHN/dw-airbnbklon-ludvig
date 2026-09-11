const listDOM = document.querySelector(".list")

fetch("data/destinations.json")
    .then(response => {return response.json()}
    )
    .then( data => {
        data.destinations.forEach(destination => {
            const listItem = document.createElement("li")
            listItem.classList.add("list__item")

            const ItemImg = document.createElement("img")
            ItemImg.classList.add("item__img")
            ItemImg.setAttribute("src",`img/${destination.image}`)
            
            listItem.append(ItemImg)
            listDOM.append(listItem)

            
        });
        
        
    }
    )
    