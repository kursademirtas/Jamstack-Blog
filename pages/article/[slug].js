import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import { fetchAPI } from '../../lib/api';
import Layout from '../../components/layout';
import Image from '../../components/Image';
import { getStrapiMedia } from '../../lib/media';

import styles from './article.module.css'

export async function getStaticPaths() {
	const articles = await fetchAPI("/articles");

	return {
		paths: articles.map((article) => ({
			params: {
				slug:article.slug,
			},
		})),
		fallback:false,

	};
}

export async function getStaticProps({ params }) {
	const articles = await fetchAPI(
		`/articles?slug=${params.slug}&status=published`
	);
	const categories = await fetchAPI("/categories");

	return {
		props: { article: articles[0], categories},
		revalidate:1,
	};
}

const Article = ({ article, categories})  => {

	const imageUrl = getStrapiMedia(article.image);

	console.log()

	return(
		<Layout categories={categories}>
			<div className={styles.article_container}> 
				<h1 className={styles.article_title}>{article.title}</h1>
				<img src={imageUrl} className={styles.hero_img}/>
				<div className={styles.article_body}>
					<div>
						<hr className={styles.divider} />
						<div className="grid-small flex-left" data-uk-grid="true">
							<div>
								{article.author.picture && (
									<Image 
										image={article.author.picture}
										style={{
											position: "static",
											borderRadius: "50%",
											height:56,

										}}
									/>	
								)}
							</div>
							<div >
								<p className={styles.author_name} >{article.author.name}</p>
								<p className={styles.published_date} >
									<Moment format="MMM Do YYYY">{article.published_at}</Moment>
								</p>
							</div>
							<ReactMarkdown source={article.content} escapeHtml={false} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Article;