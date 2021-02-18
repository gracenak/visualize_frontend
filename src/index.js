const visionsURL = "http://localhost:3000/api/v1/visions"

document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    getVisions()

    const visionForm = document.querySelector("#create-vision-form")
    visionForm.addEventListener('submit', (e) => 
    createFormHandler(e))
})

function getVisions() {
    fetch(visionsURL)
    .then(response => response.json())
    .then(visions => {
             // remember our JSON data is a bit nested due to our serializer
      visions.data.forEach(vision => {
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object
        renderVision(vision)
      })
    //   .catch(err => console.log(err))
    })
}

function renderVision(vision) {
    const visionMarkup = `
          <div data-id=${vision.id}>
            <img src=${vision.attributes.image_url} height="200" width="250">
            <h3>${vision.attributes.title}</h3>
            <h4>${vision.attributes.description}</h4>
            <p>${vision.attributes.theme.name}</p>
            <button data-id=${vision.id}>Edit</button>
            <button data-id=${vision.id} class='delete-btn'>Delete</button>
          </div>
          <br><br>`;

          document.querySelector('#vision-container').innerHTML += visionMarkup
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const descriptionInput = document.querySelector("#input-description").value
    const imgInput = document.querySelector("#input-url").value
    const themeId = parseInt(document.querySelector("#themes").value)
    postFetch(titleInput, descriptionInput, imgInput, themeId)

} 

function postFetch(title, description, image_url, theme_id) {
    const bodyData = {title, description, image_url, theme_id}
    fetch(visionsURL, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(vision => {
        const visionData = vision.data
        renderVision(visionData)
    })
  }

  function solve() {
      console.log(e)
      let visionCollection = document.querySelector('#vision-container')
      visionCollection.addEventListener('click', function(e) {
          e.preventDefault()
          deleteVision(e)
          e.target.parentElement.remove()
      })
  }

  function deleteVision(e) {
      fetch(`${visionsURL}/${e.target.dataset.id}`, {
          method: "DELETE"
      })
  }


