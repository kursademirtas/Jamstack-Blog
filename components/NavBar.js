import React, {useEffect, useState} from 'react';
import MobileNav from './MobileNav';
import Nav from './Nav';



export const NavBar = ( {categories} ) => {



	
	return (
		
		<div>
			<Nav categories={ categories } />
		</div>
	)
}


export default NavBar;