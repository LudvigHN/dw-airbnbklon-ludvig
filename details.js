const url = window.location.search

const param = new URLSearchParams(url)

const id = param.get("id")

const main = document.querySelector("main")

fetch(`data/${id}.json`)
    .then(response => {return response.json()}
    )
    .then( data => {
        const detailsImg = document.createElement("img")
        detailsImg.setAttribute("src",`img/${data.image}`)
        detailsImg.classList.add("details__img")

        const detailsSection = document.createElement("section")
        detailsSection.classList.add("details__section")

        const detailsLocation = document.createElement("h2")
        detailsLocation.textContent = data.destination
        detailsLocation.classList.add("details__location")

        const detailsTitle = document.createElement("h1")
        detailsTitle.textContent = data.title
        detailsTitle.classList.add("details__title")

        const detailsSubTitle = document.createElement("h3")
        detailsSubTitle.textContent = data.subtitle
        detailsSubTitle.classList.add("details__subtitle")

        const detailsText = document.createElement("p")
        detailsText.textContent = data.text
        detailsText.classList.add("details__text")

        const facilitiesList = document.createElement("ul")
        facilitiesList.classList.add("facilities__list")
        
        const facilitiesHeader = document.createElement("h4")
        facilitiesHeader.textContent = "Facilities"
        facilitiesList.append(facilitiesHeader)

        data.facilities.forEach(facility => {
            const facilitiesItem = document.createElement("li")
            facilitiesItem.classList.add("details_list__item")
            facilitiesItem.textContent = facility
            facilitiesList.append(facilitiesItem)
        });

        detailsSection.append(detailsLocation,detailsTitle,detailsSubTitle,detailsText,facilitiesList)
        main.append(detailsImg,detailsSection)
    }
    
        
        
    
    )