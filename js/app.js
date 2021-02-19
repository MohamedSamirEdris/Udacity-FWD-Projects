/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let numberOfListItems = sections.length;

const goToTopElement = document.getElementById('scrollToTop');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
///// Add Function to create list of items and use innerHTML ///////////////////////////////////////
function CreateListItem(){
    for ( section of sections){
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');

        listItem = document.createElement('li');
        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;

        menu.appendChild(listItem); 
    }
}

/////////////Add Function to get position of the section by using "getBoundingClientRect" /////////////////////
function sectionPosition(elem){

    let sectionposition = elem.getBoundingClientRect();
    return (sectionposition.top >=0 );
}


function moveClass() {
    for (section of sections){
        if (sectionPosition(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }

        } else {
            section.classList.remove('your-active-class');
        }
    }

}

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

CreateListItem();
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', moveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active