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

            const itemDiv = document.createElement("div")
            itemDiv.classList.add("item__div")

            const itemP = document.createElement("p")
            itemP.classList.add("item_div__p")
            itemDiv.append(itemP)
            listItem.append(ItemImg,itemDiv)
            listDOM.append(listItem)

            
        });
        
        
    }
    )
    