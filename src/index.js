const apiService = new ApiService()

// const image = document.querySelector('#input-url')
// const title = document.querySelector('#input-title')
// const description = document.querySelector('#input-description')
// const theme = document.querySelector('#themes')
const visionForm = document.querySelector("#create-vision-form")
const visionContainer = document.querySelector('#vision-container')
const visionCard = document.querySelector('.card')


document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    Vision.renderVisions()
    Vision.mountEditDestroy()
    Vision.createVisionForm()

    // const visionForm = document.querySelector("#create-vision-form")
    // visionForm.addEventListener('submit', e => {
    // createFormHandler(e)
    // updateFormHandler(e)
    // e.target.reset()

    

    // })
})

// function getVisions() {
//     fetch(visionsURL)
//     .then(response => response.json())
//     .then(visions => {
//              // remember our JSON data is a bit nested due to our serializer
//       visions.data.forEach(vision => {
//         // double check how your data is nested in the console so you can successfully access the attributes of each individual object
//         // debugger
//         let newVision = new Vision(vision, vision.attributes)
//         document.querySelector('#vision-container').innerHTML += newVision.renderVision()
//         // debugger
//       })
//     //   .catch(err => console.log(err))
//     })
// }

// function createFormHandler(e) {
//     e.preventDefault()
//     const titleInput = document.querySelector("#input-title").value
//     const descriptionInput = document.querySelector("#input-description").value
//     const imgInput = document.querySelector("#input-url").value
//     const themeId = parseInt(document.querySelector("#themes").value)
//     postFetch(titleInput, descriptionInput, imgInput, themeId)
//     e.target.reset

// } 

// function postFetch(title, description, image_url, theme_id) {
//     const bodyData = {title, description, image_url, theme_id}
//     fetch(visionsURL, {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(bodyData)
//     })
//     .then(response => response.json())
//     .then(vision => {
//         const visionData = vision.data
//         let newVision = new Vision(visionData, visionData.attributes)
//         document.querySelector('#vision-container').innerHTML += newVision.renderVision()
//     })
//   }

  
// function mountEditDestroy() {
//     const visionCard = document.querySelector('.card')
//     const imageContainer = document.querySelector('.card-image-top')
//     const visionBody = document.querySelector('.card-body')
//     const editDeleteBtn = document.querySelector('.btn-group')
//     const themeFooter = document.querySelector('.card-footer')
//     const visionContainer = document.querySelector('#vision-container')
//     visionContainer.addEventListener('click', e => {
//         console.log("click")
//         if (e.target.className === "edit-btn btn-sm btn-outline-secondary") {
    
//             const currentImage = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('img')
//             const currentTitle = e.target.parentElement.parentElement.parentElement.querySelector('.card-title')
//             const currentDescription = e.target.parentElement.parentElement.parentElement.querySelector('.card-text')
//             const currentTheme = e.target.parentElement.parentElement.parentElement.querySelector('.text-muted')
//             const id = e.target.dataset.id
//             const vision = Vision.findById(id)

//             const formTitle = document.querySelector('h4')
//             const image = document.querySelector('#input-url')
//             const title = document.querySelector('#input-title')
//             const description = document.querySelector('#input-description')
//             const theme = document.querySelector('#themes').value
//             const submit = document.querySelector('#create-button')

//             image.value = currentImage.src
//             title.value = currentTitle.innerText
//             description.value = currentDescription.innerText
//             theme.value = currentTheme.value

//             formTitle.innerText = "Edit Vision!"
//             submit.value = "Edit Vision"

//             const form = document.querySelector('#create-vision-form')
//             form.dataset.action = "update"
//             form.dataset.vision = id

//             updateFormHandler(e)


//         }

//         else if (e.target.className === "delete-btn btn-sm btn-outline-secondary") {
//             deleteVision(e)
//             e.target.parentElement.parentElement.parentElement.parentElement.remove()
//         }
//     })    
// }

// function updateFormHandler(e) {
//     e.preventDefault()
//     const id = e.target.dataset.id;
 
//     const vision = Vision.findById(id);
//     console.log(vision)
//     debugger
//     const title = document.querySelector("#input-title").value
//     const description = document.querySelector("#input-description").value
//     const image_url = document.querySelector("#input-url").value
//     const theme_id = parseInt(document.querySelector("#themes").value)

//     // const title = e.target.querySelector('#input-title').value;
//     // const description = e.target.querySelector('#input-description').value;
//     // const image_url = e.target.querySelector('#input-url').value;
//     // const theme_id = parseInt(e.target.querySelector('#themes').value);
//     updateVision(vision, title, description, image_url, theme_id)
// }

// function updateVision(vision, title, description, image_url, theme_id) {
//     // const bodyJSON = { title, description, image_url, theme_id }
//     fetch(`${visionsURL}/${vision.id}`, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             title: title.value,
//             description: description.value,
//             image: image_url.value,
//             theme_id: theme_id.value
//         })
//         })
//         .then(resp => resp.json())
//         .then(updatedVision => {
//             console.log(updatedVision)
//         })
// }


// function deleteVision(e) {
//     fetch(`${visionsURL}/${e.target.dataset.id}`, {
//         method: "DELETE"
//     })
// }

