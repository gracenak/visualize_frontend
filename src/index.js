const visionsURL = "http://localhost:3000/api/v1/visions"

document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    getVisions()
    mountEditDestroy()

    const visionForm = document.querySelector("#create-vision-form")
    visionForm.addEventListener('submit', e => {
    createFormHandler(e)
    e.target.reset()
    })
    // const visionContainer = document.querySelector('#vision-container')
    // visionContainer.addEventListener('click', e => {
    //     const id = parseInt(e.target.dataset.id)
    //     const vision = Vision.findById(id)
    //     document.querySelector('#update-vision').addEventListener('submit', e => updateFormHandler(e))
    // })
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
    e.target.reset

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
        if (e.target.className === "edit-button") {
            const currentImage = e.target.parentElement.querySelector('img')
            const currentTitle = e.target.parentElement.querySelector('h3')
            const currentDescription = e.target.parentElement.querySelector('h4')
            const currentTheme = e.target.parentElement.querySelector('p')
            const id = e.target.dataset.id

            const formTitle = document.querySelector('h3')
            const image = document.querySelector('#input-url')
            const title = document.querySelector('#input-title')
            const description = document.querySelector('#input-description')
            const theme = document.querySelector('#themes')
            const submit = document.querySelector('#create-button')

            image.value = currentImage.src
            title.value = currentTitle.innerText
            description.value = currentDescription.innerText
            theme.value = currentTheme.innerText

            formTitle.innerText = "Edit Vision!"
            submit.value = "Edit Vision"

            const form = document.querySelector('#create-vision-form')
            form.dataset.action = "update"
        }
        else if (e.target.className === "delete-button") {
            deleteVision(e)
            e.target.parentElement.remove()
        // document.querySelector('#update-vision').innerHTML = vision.renderUpdateForm()
        }
    })    
}

function updateFormHandler(e) {
    visionForm.addEventListener('submit', e => {
        e.preventDefault()
        const titleInput = document.querySelector("#input-title").value
        const descriptionInput = document.querySelector("#input-description").value
        const imgInput = document.querySelector("#input-url").value
        const themeId = parseInt(document.querySelector("#themes").value)
        postFetch(titleInput, descriptionInput, imgInput, themeId)
    })
}

// function updateFormHandler(e) {
//     e.preventDefault()
//     const id = parseInt(e.target.dataset.id);
//     const vision = Vision.findById(id);
//     const title = e.target.querySelector('#input-title').value;
//     const description = e.target.querySelector('#input-description').value;
//     const image_url = e.target.querySelector('#input-url').value;
//     const theme_id = parseInt(e.target.querySelector('#themes').value);
//     patchVision(vision, title, description, image_url, theme_id)
// }

// function patchVision(vision, title, description, image_url, theme_id) {
//     const bodyJSON = { title, description, image_url, theme_id }
//     fetch(`${visionsURL}/${vision.id})`, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(bodyJSON),
//         })
//         .then(resp => resp.json())
//         .then(updatedVision => {
//             console.log(updatedVision)
//         })
// }


function deleteVision(e) {
    fetch(`${visionsURL}/${e.target.dataset.id}`, {
        method: "DELETE"
    })
}

function updateVision(visionObj) {
    fetch(`${visionsURL}/${visionObj.id})`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({vision: visionObj})
        })
        .then(resp => resp.json())
        .then(vision => {
        console.log(vision)
    })
}

