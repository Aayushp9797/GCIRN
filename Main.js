document.addEventListener("DOMContentLoaded", function () {
    const incidentForm = document.getElementById("incident-form");

    incidentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const incidentType = document.getElementById("incident-type").value;
        const incidentDescription = document.getElementById("incident-description").value;

        if (incidentType && incidentDescription) {
            // Display selected incident type and description in an alert
            const message = `Incident Type: ${incidentType}\nIncident Description: ${incidentDescription}`;
            alert(message);

            // Clear form fields after submission
            incidentForm.reset();
        } else {
            alert("Please select incident type and provide incident description.");
        }
    });
});
