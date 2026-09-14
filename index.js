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

            const itemFav = document.createElement("p")
            itemFav.innerHTML = "&hearts;"

            const itemLink = document.createElement("a")
            itemLink.classList.add("item_div__link")
            itemLink.setAttribute("href",`details.html?id=${destination.id}`)
            itemLink.textContent="More"
            itemDiv.append(itemFav,itemLink)
            listItem.append(ItemImg,itemDiv)
            listDOM.append(listItem)

            
        });
        
        
    }
    )
    