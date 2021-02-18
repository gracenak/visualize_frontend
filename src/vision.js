class Vision {
    constructor(vision, visionAttributes) {
        this.id = vision.id
        this.title = visionAttributes.title
        this.description = visionAttributes.description
        this.image_url = visionAttributes.image_url
        this.theme = visionAttributes.theme
        Vision.all.push(this)
        debugger
    }

    static findById(id) {
        return this.all.find(vision => vision.id === id)
    }
    
    renderVision() {
        // debugger
        return `
            <div data-id=${this.id}>
                <img src=${this.image_url} height="200" width="250">
                <h3>${this.title}</h3>
                <h4>${this.description}</h4>
                <p>${this.theme.name}</p>
                <button data-id=${this.id}>Edit</button>
                <button data-id=${this.id} class='delete-btn'>Delete</button>
            </div>
        <br><br>`;
    }
}
Vision.all = []