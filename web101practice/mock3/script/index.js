let limit = 5
let apiKey = 'live_tCCKovOhfUzYniZo8qbnNchlYevFTF1cbWMKzj0FLKPFN6moGo54OVVimHXAyqvm '
let page = 0
let cardBody = document.querySelector('.card_body')
let pagiantion_body = document.querySelector('.pagiantion_body')
function getDataFromApi(page) {
    fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}&api_key=${apiKey}&page=${page}`)
        .then((response) => {
            return Promise.all([response.json(), response.headers.get('pagination-count')])
        }
        )
        .then((data) => {
            let [allData, pagination] = data
            console.log(pagination)

            displayData(allData)
            pagination_button(pagination)
        })
        .catch((error) => console.log(error))
}

getDataFromApi()

function displayData(data) {
    cardBody.innerHTML = null

    data.forEach((ele) => {
        let mainDiv = document.createElement('div')
        let catImage = document.createElement('img')
        catImage.setAttribute('src', ele.image.url)
        let name = document.createElement('h1')
        name.innerHTML = ele.name
        let description = document.createElement('p')
        description.innerHTML = ele.description
        let life_span = document.createElement('h4')
        life_span.innerHTML = ele.life_span
        let origin = document.createElement('h4')
        origin.innerHTML = ele.origin
        let tags = document.createElement('div')
        tags.innerHTML = `${ele.temperament.split(",").join(' ')}`

        let read = document.createElement("h5");
        let link = document.createElement("a");
        link.innerText = "Wikipedia";
        link.href = ele.wikipedia_url;
        read.innerText = "Read More: ";
        read.appendChild(link);

        let view_more = document.createElement('button')
        view_more.innerHTML = 'View More'
        view_more.addEventListener('click', () => {
            localStorage.setItem('id', ele.id)
            window.location.href = '/cats.html'
        })

        mainDiv.append(catImage, name, description, life_span, origin, tags, read, view_more
        )

        cardBody.append(mainDiv)
    })

}


function pagination_button(data) {
    pagiantion_body.innerHTML = null

    for (let i = 0; i < Math.ceil(data / limit); i++) {
        let button = document.createElement('button')
        button.innerText = i + 1
        button.setAttribute('value', i)
        button.setAttribute("class",'primary')
        pagiantion_body.append(button)
        button.addEventListener('click', (e) => handlePgae(e.target.value))
    }

}

function handlePgae(value) {
    value = +value
    getDataFromApi(value)

}