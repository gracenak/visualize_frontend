class Vision {
    constructor(vision, visionAttributes) {
        this.id = vision.id
        this.title = visionAttributes.title
        this.description = visionAttributes.description
        this.image_url = visionAttributes.image_url
        this.theme = visionAttributes.theme 
        Vision.all.push(this)
    }

    static renderVisions() {
        apiService.fetchVisions()
            .then(visions => {
                visions.data.forEach(vision => {
                let newVision = new Vision(vision, vision.attributes)
                document.querySelector('#vision-container').innerHTML += newVision.renderVision()
            })
        })
    }

    static findById(id) {
        return this.all.find(vision => vision.id === id)
    }
    
    renderVision() {
        // debugger
    return `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
            <div class="card shadow-sm h-100" style="width: 18rem" >
                <img src=${this.image_url} class="card-img-top" alt="..." width="100%" height="225">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <small class="text-muted">${this.theme.name}</small>
                    <p class="card-text">${this.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button data-id=${this.id} type="button" class="edit-btn btn-sm btn-outline-secondary">Edit</button>
                            <button data-id=${this.id} type="button" class="delete-btn btn-sm btn-outline-secondary">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted"></small>
                </div>
            </div>
        </div>
    </div>   
    `
    }

    static createVisionForm(e) {
        const visionForm = document.querySelector("#create-vision-form")
        visionForm.addEventListener('submit', e => {
        e.preventDefault()
        const titleInput = document.querySelector("#input-title").value
        const descriptionInput = document.querySelector("#input-description").value
        const imgInput = document.querySelector("#input-url").value
        const themeId = parseInt(document.querySelector("#themes").value) 
        apiService.postFetch(titleInput, descriptionInput, imgInput, themeId)
        visionForm.reset()
        })
    } 

    static mountEditDestroy() {
        const visionCard = document.querySelector('.card')
        const imageContainer = document.querySelector('.card-image-top')
        const visionBody = document.querySelector('.card-body')
        const editDeleteBtn = document.querySelector('.btn-group')
        const themeFooter = document.querySelector('.card-footer')
        const visionContainer = document.querySelector('#vision-container')
        visionContainer.addEventListener('click', e => {
            console.log("click")
            if (e.target.className === "edit-btn btn-sm btn-outline-secondary") {
        
                const currentImage = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('img')
                const currentTitle = e.target.parentElement.parentElement.parentElement.querySelector('.card-title')
                const currentDescription = e.target.parentElement.parentElement.parentElement.querySelector('.card-text')
                const currentTheme = e.target.parentElement.parentElement.parentElement.querySelector('.text-muted')
                const id = e.target.dataset.id
                const vision = Vision.findById(id)
    
                const formTitle = document.querySelector('h4')
                const image = document.querySelector('#input-url')
                const title = document.querySelector('#input-title')
                const description = document.querySelector('#input-description')
                const theme = document.querySelector('#themes').value
                const submit = document.querySelector('#create-button')
    
                image.value = currentImage.src
                title.value = currentTitle.innerText
                description.value = currentDescription.innerText
                theme.value = currentTheme.value
    
                formTitle.innerText = "Edit Vision!"
                submit.value = "Edit Vision"
    
                const form = document.querySelector('#create-vision-form')
                form.dataset.action = "update"
                form.dataset.vision = id
    
                updateFormHandler(e)
    
    
            }
    
            else if (e.target.className === "delete-btn btn-sm btn-outline-secondary") {
                apiService.deleteVision(e)
                e.target.parentElement.parentElement.parentElement.parentElement.remove()
            }
        })    
    }

    updateFormHandler(e) {
        const visionForm = document.querySelector("#create-vision-form")
        visionForm.addEventListener('submit', e => {
        e.preventDefault()
        const id = e.target.dataset.id;
     
        const vision = Vision.findById(id);
        console.log(vision)
        debugger
        const title = document.querySelector("#input-title").value
        const description = document.querySelector("#input-description").value
        const image_url = document.querySelector("#input-url").value
        const theme_id = parseInt(document.querySelector("#themes").value)
    
        // const title = e.target.querySelector('#input-title').value;
        // const description = e.target.querySelector('#input-description').value;
        // const image_url = e.target.querySelector('#input-url').value;
        // const theme_id = parseInt(e.target.querySelector('#themes').value);
        apiService.updateVision(vision, title, description, image_url, theme_id)
        e.target.reset()
        })
    }




}

Vision.all = []