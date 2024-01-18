document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // In a real-world scenario, you would handle form submission, possibly using AJAX.
    // For simplicity, let's just log the form data to the console.
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});

