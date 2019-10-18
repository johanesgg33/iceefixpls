var scroll = window.requestAnimationFrame ||
    function (callback){
        window.setTimeout(callback,1/600)
    };
var elementShow = document.querySelectorAll('.scroll-animation');
var event = document.getElementById('event-nav');
var contact = document.getElementById('contact-nav');


function loop() {

    elementShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            if(element.id === 'event'){
                event.classList.add('active');
            }
            else if(element.id === 'contact'){
                contact.classList.add('active');
            }
        } else {
            if(element.id === 'event'){
                event.classList.remove('active');
            }
            else if(element.id === 'contact'){
                contact.classList.remove('active');
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