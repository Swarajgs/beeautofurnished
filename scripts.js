// FAQ toggle function
function toggleFAQ(element) {
    var faqAnswer = element.nextElementSibling;
    var faqIcon = element.querySelector('.faq-icon');

    if (faqAnswer.style.display === "block") {
        faqAnswer.style.display = "none";
        faqIcon.textContent = "+";
    } else {
        faqAnswer.style.display = "block";
        faqIcon.textContent = "-";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // FAQ event listeners
    document.querySelectorAll('.faq-question').forEach(function(item) {
        item.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    

    // Initialize AOS if you're using it
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
});