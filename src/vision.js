class Vision {
    constructor(vision, visionAttributes) {
        this.id = vision.id
        this.title = visionAttributes.title
        this.description = visionAttributes.description
        this.image_url = visionAttributes.image_url
        this.theme = visionAttributes.theme 
        Vision.all.push(this)
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



        // return `
        //     <div data-id=${this.id}>
        //         <img src=${this.image_url} height="200" width="250">
        //         <h3>${this.title}</h3>
        //         <h4>${this.description}</h4>
        //         <p>${this.theme.name}</p>
        //         <button data-id=${this.id} class='edit-btn'>Edit</button>
        //         <button data-id=${this.id} class='delete-btn'>Delete</button>
        //     </div>
        // <br><br>`;
    }

    renderUpdateForm() {






  }
}

Vision.all = []