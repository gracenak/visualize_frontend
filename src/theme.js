class Theme {

    constructor(theme) {
    this.id = theme.id
    this.name = theme.attributes.name
    this.visions = theme.attributes.visions
    Theme.all.push(this)
    }


    static renderThemes() {
        apiService.fetchThemes()
        .then(themes => {

            themes.data.forEach(theme => {
                let dropDown = document.querySelector('select')
                let options = document.createElement('option')

                options.setAttribute("value", theme.id)
                options.innerHTML = theme.attributes.name
                dropDown.append(options)
            })
        })
    }

    static filterByTheme() {
        let search = document.querySelector('.search-input')
        let select = document.createElement('select')
        let submit = document.createElement('p')

        select.setAttribute("class", "filter-options")
        submit.innerHTML = "Filter By Theme"
        search.appendChild(select, submit)
 
        apiService.fetchThemes()
        .then(themes => {

            themes.data.forEach(theme => {
                let themeName = document.createElement('option')    
                themeName.setAttribute("value", theme.attributes.name)
                themeName.innerHTML = theme.attributes.name
                select.append(themeName)
            })
        })
    }

    static renderFilteredVisions() {
        let select = document.querySelector('.filter-options')
        select.addEventListener("change", e =>{
            let searchSelect = e.target.value
            let visionCard = document.querySelectorAll('#vision-card')
            visionCard.forEach((vision) => {
                if (vision.innerHTML.indexOf(searchSelect) != -1) {
                    vision.style.display = "block"
                } else {
                    vision.style.display = "none"
                }
            })
            // let filteredVisions = Vision.all.filter((vision) => {
            //     return (
            //         vision.theme.name.includes(searchSelect)
            //     )
            // })
            // console.log(filteredVisions)
            // Vision.renderVisions(filteredVisions)
        })
    }
}
Theme.all = []
