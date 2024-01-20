const htmlElement = document.getElementsByClassName('section')[0]

async function ApiFunction() {
    const dataBase = 'https://jsonplaceholder.typicode.com/posts'

    try {
        const getInfoFromBack = await fetch(dataBase)
        const changeInfoToFront = await getInfoFromBack.json()
        
        for (let i = 0; i < changeInfoToFront.length; i++) {
            htmlElement.innerHTML += `
            
            <div class="card-body col-12 col-md-6 col-lg-3">
                <h5 class="card-title">${changeInfoToFront[i].title}</h5>
                <p class="card-text">${changeInfoToFront[i].body}</p>
                <a href="#" class="btn btn-primary">${changeInfoToFront[i].id}</a>
            </div>
        
              `
        }

    } catch (error) {

        console.log(`${error} happened`);

    }
}

window.addEventListener('load', ApiFunction())