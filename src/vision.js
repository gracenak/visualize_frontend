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
            <div data-id=${this.id}>
                <img src=${this.image_url} height="200" width="250">
                <h3>${this.title}</h3>
                <h4>${this.description}</h4>
                <p>${this.theme.name}</p>
                <button data-id=${this.id} class='edit-button'>Edit</button>
                <button data-id=${this.id} class='delete-btn'>Delete</button>
            </div>
        <br><br>`;
    }

    renderUpdateForm() {
        return `
    <form data-id=${this.id} >
      <h3>Edit a Vision!</h3>

      <label>Title</label>
      <input id='input-title' type="text" name="title" value="${this.title}" class="input-text">
      <br><br>

      <label>Description</label>
      <textarea id='input-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
      <br><br>

      <label>Image URL</label>
      <input id='input-url' type="text" name="image" value="${this.image_url}" class="input-text">
      <br><br>

      <p>Choose A Theme</p>
      <select id="themes" name="themes">
        <option value="1">Empowerment</option>
        <option value="2">Self Love</option>
        <option value="3">Career</option>
        <option value="4">Love</option>
        <option value="5">Home</option>
        <option value="6">Travel</option>
        <option value="7">Health</option>
        <option value="8">Fitness</option>
        <option value="9">Family</option>
        <option value="10">Growth Mindset</option>
        <option value="11">Creativity</option>
        <option value="12">Music</option>
        <option value="13">Art</option>
        <option value="3">Other</option>
      </select>
      <br><br>

      <input id='edit-button' type="submit" name="submit" value="Edit Vision" class="submit">
    </form>
  `;
  }
}

Vision.all = []