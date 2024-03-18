// Wait for the document to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the "dropdown" class
    var dropdowns = document.getElementsByClassName("dropdown");

    // Iterate over each dropdown element
    for (var i = 0; i < dropdowns.length; i++) {
        // Add event listener for mouse hover on each dropdown element
        dropdowns[i].addEventListener("mouseover", function() {
            // Get the dropdown content within the current dropdown element
            var dropdownContent = this.getElementsByClassName("dropdown-content")[0];
            // Display the dropdown content
            dropdownContent.style.display = "block";
        });

        // Add event listener for mouse leave on each dropdown element
        dropdowns[i].addEventListener("mouseleave", function() {
            // Get the dropdown content within the current dropdown element
            var dropdownContent = this.getElementsByClassName("dropdown-content")[0];
            // Hide the dropdown content
            dropdownContent.style.display = "none";
        });
    }
});
