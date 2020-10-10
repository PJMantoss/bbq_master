let emailCollector = document.getElementById('emailCollector');

emailCollector.addEventListener('submit', e => {
    //Stop default event behaviour
    e.preventDefault();

    //Use FormData to get user's name and email
    let ourFormData = new FormData(e.target);

    let userFirtName = ourFormData.get("first name"),
        userEmail = ourFormData.get("email");

    let updatedHtmlContent = `
         <h2>Congratulations ${userFirstName}!</h2>
         <p>You are on your to becoming a BBQ Master!</p>
         <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmail}</p>
    `
})