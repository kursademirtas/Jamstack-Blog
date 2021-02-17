import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './MobileNav.module.css'

const MobileNav = ({ categories } ) => {

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
				<Link as = "/" href="/" >
					<a className={styles.logo}>Logo</a>
				</Link>
				
				<img  className={styles.banner_img} src="https://images.unsplash.com/photo-1521650326612-126383c9c0e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1752&q=80" />
				<h4 className={styles.banner_title}>Nothing in the Weeping</h4>
			
			<nav  >
				<ul className={toggleMenu ? styles.nav_links_active : styles.passive}>
					{categories.map((category) => {
						return (
							<li onClick={() => setToggleMenu(!toggleMenu)} key={category.id} >
								<Link as = {`/category/${category.slug}` } href={`/category/${category.slug}` } >
									<a className={styles.link_item}>{category.name}</a>
								</Link>
							</li>
								)
				})}
				</ul>
			</nav>
		</div>
	)
}

export default MobileNav



