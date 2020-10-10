let emailCollector = document.getElementById('emailCollector');

emailCollector.addEventListener('submit', e => {
    //Stop default event behaviour
    e.preventDefault();

    //Use FormData to get user's name and email
    let ourFormData = new FormData(e.target);
})