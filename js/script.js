document.addEventListener("DOMContentLoaded", function () {
	// HANDLE FOOTER YEAR
	const handleFooterYear = () => {
		const footerSpan = document.querySelector(".footer__year");
		const currentYear = new Date().getFullYear();
		footerSpan.textContent = currentYear;
	};
	handleFooterYear();

	// NAV SECTION
	const nav = document.querySelector(".nav");
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
			document.body.style = "overflow: hidden";
		} else {
			closeNav();
			document.body.style = "overflow: visible";
		}
	};

	const handleNavBg = () => {
		const scrollHeight = window.scrollY;

		if (scrollHeight >= 200) {
			nav.classList.add("show-bg");
		} else {
			nav.classList.remove("show-bg");
		}
	};

	allMobileLinks.forEach((link) =>
		link.addEventListener("click", () => {
			closeNav();
		})
	);

	window.addEventListener("scroll", handleNavBg);
	navToggler.addEventListener("click", handleNav);
});
