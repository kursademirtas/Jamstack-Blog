import Articles from "../../components/articles";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";


export async function getStaticPaths() {
	const categories = await fetchAPI("/categories");
  
	return {
	  paths: categories.map((category) => ({
		params: {
		  slug: category.slug,
		},
	  })),
	  fallback: false,
	};
  }
  
  export async function getStaticProps({ params }) {
	const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
	const categories = await fetchAPI("/categories");
  
	return {
	  props: { category, categories },
	  revalidate: 1,
	};
  }
  

const Category = ({ category, categories }) => {

  
	return (
	  <Layout categories={categories}>
		<div className="uk-section">
		  <div className="uk-container uk-container-large">
			<h1>{category.name}</h1>
			<Articles articles={category.articles} />
		  </div>
		</div>
	  </Layout>
	);
  };

  export default Category;