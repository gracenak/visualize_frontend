class ApiService {

    constructor() {
        this.visionsURL = `http://localhost:3000/api/v1/visions`
    }

    fetchVisions() {
        return fetch(`${this.visionsURL}`)
        .then(response => response.json())
    }

    postFetch(title, description, image_url, theme_id) {
        const bodyData = {title, description, image_url, theme_id}
        return fetch(`${this.visionsURL}`, {
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
        
        
    deleteVision(e) {
        fetch(`${this.visionsURL}/${e.target.dataset.id}`, {
            method: "DELETE"
        })
    }
}