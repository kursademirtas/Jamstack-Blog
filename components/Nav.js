import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import styles from './Nav.module.css'
import {useRouter} from 'next/router'



export const NavBar = ( {categories} ) => {

	const atHomePage =  useRouter().pathname === "/";
	const [fixNav, setFixNav] = useState(!atHomePage);


//When u scroll moren than 626 px set navigation fixed,
// If u are not in homepage set fixed default
	const handleScroll = (e) => {	
		if(window.scrollY > 700 || !atHomePage){
			setFixNav(true);
		}else {
			setFixNav(false);
		}
	}

	  useEffect(() => {
		if (window){
		  window.addEventListener('scroll', handleScroll);
		}
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		}
	  }, []);


	
	return (
		
		<>
	
		<div className={atHomePage?styles.banner_container:styles.passive }>
	
			<img  className={styles.banner_img} src="https://images.unsplash.com/photo-1521650326612-126383c9c0e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1752&q=80" />
		</div>

		<div classNames={styles.navbar_container} >
				<nav  >
						<ul className={fixNav ? styles.nav_fix :styles.navbar_nav  }>
						<h2 className={fixNav ? styles.logo : styles.passive}>Logo</h2>
							{categories.map((category) => {
								return (
									<li key={category.id}>
										<Link as = {`/category/${category.slug}` } href={`/category/${category.slug}` } >
											<a className={styles.link_item}>{category.name}</a>
										</Link>
									</li>
								)
							})}
						</ul>

				</nav>
		
			</div>
	</>
	)
}


export default NavBar;