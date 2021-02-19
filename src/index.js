const visionsURL = "http://localhost:3000/api/v1/visions"

document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    getVisions()
    mountEditDestroy()

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
        // debugger
        let newVision = new Vision(vision, vision.attributes)
        document.querySelector('#vision-container').innerHTML += newVision.renderVision()
        // debugger
      })
    //   .catch(err => console.log(err))
    })
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
        let newVision = new Vision(visionData, visionData.attributes)
        document.querySelector('#vision-container').innerHTML += newVision.renderVision()
    })
  }

  
function mountEditDestroy() {
    const visionContainer = document.querySelector('#vision-container')
    visionContainer.addEventListener('click', e => {
        deleteVision(e)
        e.target.parentElement.remove()

        // document.querySelector('#update-vision').innerHTML = vision.renderUpdateForm()
        
    })

}

function deleteVision(e) {
    fetch(`${visionsURL}/${e.target.dataset.id}`, {
        method: "DELETE"
    })
}

