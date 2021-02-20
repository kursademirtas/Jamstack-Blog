import React from 'react';
import styles from './Footer.module.css'

function Footer() {
	return (
		<div className={styles.footer_container}>
			<div className={styles.footer_top}>
				<h2 className={styles.logo}>Logo</h2>
				<div className={styles.contact}>
					<a><img className={styles.icon} src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/142_Github_logo_logos-512.png"  alt="github icon"/></a>
					<a ><img className={styles.icon} src="https://image.flaticon.com/icons/png/512/23/23931.png" alt="twitter icon"/> </a>
					<a> <img className={styles.icon} src="https://cdn2.iconfinder.com/data/icons/essential-web-1-1/50/linkedin-social-media-logo-website-512.png" alt="linkedin icon"/> </a>
				</div>
			</div>
			<span className={styles.footer_text}>Made with	&hearts;</span>
		</div>
	)
}

export default Footer;