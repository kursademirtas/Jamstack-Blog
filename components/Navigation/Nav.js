
import Link from 'next/link';
import styles from './Nav.module.css'


import Image from '../Image'
import Story from './Story';

export const NavBar = ( {categories , fixNav, atHomePage, stories} ) => {

	console.log(stories)
	let i = 0;


	return (	
		<>
		<div className={atHomePage?styles.banner_container:styles.passive }>
			{atHomePage ? <Story stories={stories} /> : null}
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