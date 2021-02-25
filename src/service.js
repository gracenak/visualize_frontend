class ApiService {
    //houses fetch calls
    constructor() {
        this.visionsURL = `http://localhost:3000/api/v1/visions`
    }

    //read //index
    fetchVisions() {
        return fetch(`${this.visionsURL}`)
        .then(response => response.json())
    }




    //create
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
        .catch(err => {
            alert("You must have a title for your vision creation!")
            console.log(err.message)
        })
        }
        

    updateVision(vision, title, description, image_url, theme_id) {
        // const bodyJSON = { title, description, image_url, theme_id }
        fetch(`${this.visionsURL}/${vision.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                description: description.value,
                image: image_url.value,
                theme_id: theme_id.value
            })
            })
            .then(resp => resp.json())
            .then(updatedVision => {
                console.log(updatedVision)
            })
    }


    //delete
    deleteVision(e) {
        fetch(`${this.visionsURL}/${e.target.dataset.id}`, {
            method: "DELETE"
        })
    }

}