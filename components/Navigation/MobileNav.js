import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './MobileNav.module.css';
import Story from './Story'

const MobileNav = ({ categories, atHomePage, stories } ) => {

	const[toggleMenu,  setToggleMenu] = useState(false);

	return (
		<div className={styles.menu_container}>
			<div className={styles.toggle_icons} onClick={() => setToggleMenu(!toggleMenu)}>
				<svg className={styles.menu_open_icon}  viewBox="0 0 100 80" width="40" height="40">
					<rect width="100" height="12" rx="8" ></rect>
					<rect  y="30" width="100" height="12" rx="8" ></rect>
					<rect y="60" width="100" height="12" rx="8" ></rect>
				</svg>
			</div>
			<div className={atHomePage ? styles.banner_container : styles.passive}>
				<Link as = "/" href="/" >
					<a className={styles.logo}>Logo</a>
				</Link>
				{atHomePage ? <Story stories={stories} /> : null}

				</div>
			<nav  >
				<ul className={toggleMenu ? styles.nav_links_active : styles.passive}>
					{categories.map((category) => {
						return (
							<li onClick={() => setToggleMenu(!toggleMenu)} key={category.id} >
								<Link as = {`/category/${category.slug}` } href={`/category/${category.slug}` } >
									<a className={styles.link_item}>{category.name}</a>
								</Link>
							</li>
								)})}
				</ul>
			</nav>
		</div>
	)
}

export default MobileNav;



