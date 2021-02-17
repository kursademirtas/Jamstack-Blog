import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css'


export const NavBar = ( {categories} ) => {
	return (
		<div className={styles.navbar_container}>

			<div className={styles.banner_img}>
				<nav >
						<ul className={styles.navbar_nav}>
							{categories.map((category) => {
								return (
									<li key={category.id}>
										<Link as = {`/category/${category.slug}` } href={`/category/${category.slug}` } >
											<a className={styles.link_reset}>{category.name}</a>
										</Link>
									</li>
								)
							})}
						</ul>
				
				</nav>
		
			</div>
		</div>
	)
}


export default NavBar;