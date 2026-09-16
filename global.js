const url = window.location.search

const param = new URLSearchParams(url)

async function fetchData(url, renderFunction) {


    try {
            const respons = await fetch(url, {
                headers: {
                    Accept: "application/json"
                }
            }
        )
        console.log(respons);
        
        
    

        if (!respons.ok) {
            throw new Error("Error" + respons.status)
        }
        const data = await respons.json()

        renderFunction(data)
    } catch (error) {
        console.error(error);
    }



}