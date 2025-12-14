import {
	HiHome,
	HiUser,
	HiAcademicCap,
	HiBriefcase,
	HiNewspaper,
	HiMail,
} from "react-icons/hi";

export const navItems = [
	{ href: "/", icon: HiHome, label: "Home" },
	{ href: "/about", icon: HiUser, label: "About" },
	{ href: "/resume", icon: HiAcademicCap, label: "Resume" },
	{ href: "/projects", icon: HiBriefcase, label: "Projects" },
	{ href: "/blog", icon: HiNewspaper, label: "Blog" },
	{ href: "/contact", icon: HiMail, label: "Contact" },
];

export function getPageIcon(pathname: string) {
	const item = navItems.find((item) => item.href === pathname);
	return item ? item.icon : null;
}
