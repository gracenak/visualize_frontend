const apiService = new ApiService()

document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to Visualize!');
    Vision.renderVisions()
    Vision.mountDestroy()
    Vision.createVisionForm()
    Theme.renderThemes()
    Theme.filterByTheme()
    Theme.renderFilteredVisions()
})