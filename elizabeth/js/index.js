// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");
const body = document.querySelector(".flow");

// functions of all event listeners
const allEventListners = () => {
	// toggler icon click event
	navToggler.addEventListener("click", togglerClick);
	// nav links click event
	navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
};

// togglerClick function
const togglerClick = () => {
	navToggler.classList.toggle("toggler-open");
	navMenu.classList.toggle("open");
	if (navMenu.classList.contains("open")) {
		body.classList.add("seize");
	} else {
		body.classList.remove("seize");
	}
};

// navLinkClick function
const navLinkClick = () => {
	if (navMenu.classList.contains("open")) {
		navToggler.click();
	}
};

// load all event listners
allEventListners();
