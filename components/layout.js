import Navigation from './Navigation';
import Footer from './Footer';
import {useRouter} from 'next/router'

const layout = ( { children, categories, articles }) => {

	const atHomePage =  useRouter().pathname === "/";

	const stories =  atHomePage ?  articles.filter(article => article.isStory) : null;


	return (
		<>
			<Navigation categories= {categories} stories={stories} atHomePage={atHomePage}/>
				{ children }
			<Footer />
		</>
	)
}

export default layout
