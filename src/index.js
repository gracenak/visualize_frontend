const visionsURL = "http://localhost:3000/api/v1/visions"
document.addEventListener('DOMContentLoaded', () => {
    alert('LOADED');
    getVisions()
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