document.querySelector('#seemore-link').addEventListener('click', function (e) {
    e.preventDefault();

    var paragraph = document.querySelector('.about-more');
    paragraph.classList.toggle('expanded');

    // Update the "See More" link text based on the current state
    if (paragraph.classList.contains('expanded')) {
        this.textContent = 'See Less';
    } else {
        this.textContent = 'See More';
    }
});

// reload page
document.querySelector("#logo1").addEventListener("click",function(){
    location.reload(); 
})

// start ng animation
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('flyinRight');
        } else {
            entry.target.classList.remove('flyinRight');
        }
    });
}, { threshold: 0.5 });

var page1 = document.querySelector(".wrapper-product__page1");
observer.observe(page1);

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('flyin-left');
        } else {
            entry.target.classList.remove('flyin-left');
        }
    });
}, { threshold: 0.5 });

var services = document.querySelector(".product-selection");
var contactForm = document.querySelector(".contact-form");
var about = document.querySelector(".wrapper-about");
observer2.observe(services);
observer2.observe(contactForm);
observer2.observe(about);

const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('flyin-right2');
        } else {
            entry.target.classList.remove('flyin-right2');
        }
    });
}, { threshold: 0.4 });

var productHighlight = document.querySelector(".wrapper-productHighlight");

observer3.observe(productHighlight);
