var scroll = window.requestAnimationFrame ||
    function (callback){
        window.setTimeout(callback,1/600)
    };
var elementShow = document.querySelectorAll('.scroll-animation');
var home = document.getElementById('home-nav');
var about = document.getElementById('about-nav');
var gallery = document.getElementById('gallery-nav');
var contact = document.getElementById('contact-nav');


function loop() {

    elementShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            if(element.id === 'about'){
                about.classList.add('active');
            }
            else if(element.id === 'gallery'){
                gallery.classList.add('active');
            }
            else if(element.id === 'contact'){
                contact.classList.add('active');
            }
            else if(element.id === 'home'){
                home.classList.add('active');
            }
        } else {
            if(element.id === 'about'){
                about.classList.remove('active');
            }
            else if(element.id === 'gallery'){
                gallery.classList.remove('active');
            }
            else if(element.id === 'contact'){
                contact.classList.remove('active');
            }
            else if(element.id === 'home'){
                home.classList.remove('active');
            }
        }
    });

    scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 80
            && rect.bottom >= 80)
    );
}