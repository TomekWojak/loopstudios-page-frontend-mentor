document.addEventListener("DOMContentLoaded", function () {
	// NAV SECTION
	const navToggler = document.querySelector(".nav__toggler ");
	const navbar = document.querySelector(".nav__mobile");
	const allMobileLinks = document.querySelectorAll(".nav__mobile-link");

	const openNav = () => {
		navToggler.classList.add("open");
		navToggler.setAttribute("aria-expanded", "true");
		navbar.classList.add("active");
	};
	const closeNav = () => {
		navToggler.classList.remove("open");
		navToggler.classList.add("close");
		navToggler.setAttribute("aria-expanded", "false");
		navbar.classList.remove("active");
		setTimeout(() => {
			navToggler.classList.remove("close");
		}, 400);
	};

	const handleNav = () => {
		const isOpened = navToggler.getAttribute("aria-expanded");
		if (isOpened === "false") {
			openNav();
		} else {
			closeNav();
		}
	};

	allMobileLinks.forEach((link) =>
		link.addEventListener("click", () => {
			closeNav();
		})
	);

	navToggler.addEventListener("click", handleNav);
});
