import React, {useEffect, useState} from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';

import useWindowSize from '../../hooks/useScreenSize';


export const NavBar = ( { categories, stories,atHomePage } ) => {

	const { width } = useWindowSize()
	
	const [fixNav, setFixNav] = useState(!atHomePage);


	const handleScroll = () => {	
		if(window.scrollY >  720 || !atHomePage){
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
		
		<div>
		{ width > 768 ?	<Nav categories={ categories } fixNav={fixNav} atHomePage={atHomePage} stories={stories}/> : <MobileNav atHomePage={atHomePage} categories={ categories } stories={stories} />}
		</div>
	)
}


export default NavBar;