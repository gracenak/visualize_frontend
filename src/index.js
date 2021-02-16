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
        const visionMarkup = `
          <div data-id=${vision.id}>
            <img src=${vision.attributes.image_url} height="200" width="250">
            <h3>${vision.attributes.title}</h3>
            <h4>${vision.attributes.description}</h4>
            <p>${vision.attributes.user.name}</p>
            <button data-id=${vision.id}>Edit</button>
          </div>
          <br><br>`;

          document.querySelector('#vision-container').innerHTML += visionMarkup
      })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const descriptionInput = document.querySelector("#input-description").value
    const imgInput = document.querySelector("#input-url").value
    const userId = parseInt(document.querySelector("#users").value)
    postFetch(titleInput, descriptionInput, imgInput, userId)

} 

function postFetch(title, description, image_url, user_id) {
    const bodyData = {title, description, image_url, user_id}
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
        const visionData = vision.data.attributes
        const visionMarkup = `
        <div data-id=${vision.id}>
            <img src=${visionData.image_url} height="200" width="250">
            <h3>${visionData.title}</h3>
            <h4>${visionData.description}</h4>
            <p>${visionData.user.name}</p>
            <button data-id=${visionData.id}>Edit</button>
        </div>
        <br><br>`;
  
      document.querySelector('#vision-container').innerHTML += visionMarkup;
    })
  }


