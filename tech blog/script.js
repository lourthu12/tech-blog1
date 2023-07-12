
function changeImage(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the text of the clicked link
    var linkText = event.target.innerText;

    // Change the image based on the clicked link
    var image = document.getElementById('image');
    switch (linkText) {
        case 'Programming':
            image.src = './Assets/programming.jpg';
            break;
        case 'Research':
            image.src = './Assets/research.jpg';
            break;
        case 'Development':
            image.src = './Assets/development.jpg';
            break;
        case 'Phases':
            image.src = './Assets/phases.jpg';
            break;
        case 'Design':
            image.src = './Assets/design.jpg';
            break;
        default:
            // If the link text doesn't match any case, do nothing or set a default image
            break;
    }
}

// const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//     faq.addEventListener("click", () => {
//         faq.classList.toggle("active");
//     });
// });

// Get all the FAQ items
