const btn = document.getElementById(".btn");

btn.addEventListener("click", ()=>{
    alert("Submitted Succesfully! Please check your email for the ticket.")

});

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const event = document.getElementById("event").value;
    const age = document.getElementById("age").value;

    // Create a text file content
    const data = `Name: ${name}\nEmail: ${email}\nEvent: ${event}\nAge: ${age}\n\n`;

    // Create a Blob with the text content
    const blob = new Blob([data], { type: "text/plain" });

    // Create a download link
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "user_data.txt";
    a.style.display = "none";

    // Append the link to the document and trigger a click event
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
});