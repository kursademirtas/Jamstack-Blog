import NavBar from './NavBar';


const layout = ( {children, categories }) => {
	return (
		<>
			<NavBar categories= {categories} />
			{ children }
		</>
	)
}

export default layout
