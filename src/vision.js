class Vision {

    constructor(vision, visionAttributes = {}) {
        this.id = vision.id
        this.title = visionAttributes.title
        this.description = visionAttributes.description
        this.image_url = visionAttributes.image_url
        this.theme = visionAttributes.theme
        this.themeId = visionAttributes.theme_id
        Vision.all.unshift(this)
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
    
    renderVision() {
    return `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="vision-card">
        <div class="col">
            <div class="card shadow-sm h-100" style="width: 18rem" >
                <img src=${this.image_url} class="card-img-top" alt="..." width="100%" height="225">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <small class="text-muted" id="theme-name">${this.theme.name}</small>
                    <p class="card-text">${this.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
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
        apiService.fetchPost(titleInput, descriptionInput, imgInput, themeId)
        visionForm.reset()
        })
    } 

    static getParentNode(element, level=1) { // 1 - default value (if no 'level' parameter is passed to the function)
        while(level-- > 0) {
            element = element.parentNode;
            if(!element) {
                return null; // to avoid a possible "TypeError: Cannot read property 'parentNode' of null" if the requested level is higher than document
            }
        }
        return element;
    }

    static mountDestroy() {
        const visionContainer = document.querySelector('#vision-container')
        visionContainer.addEventListener('click', e => {
            if (e.target.className === "delete-btn btn-sm btn-outline-secondary") {
                apiService.fetchDelete(e)
                this.getParentNode(e.target, 6).remove() 
            }
        })    
    }
}

Vision.all = []
