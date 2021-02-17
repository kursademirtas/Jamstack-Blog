import React from 'react';
import Link from 'next/link';
import Image from './image';
import styles from './Card.module.css';

const Card = ( { article }) => {



	return (
		<Link as={`/article/${article.slug}`}  href="/article/[id]">
			<a className={styles.post_link}>
				
				<div className={styles.card_container} >
					<p className={styles.article_category_name}>{article.category.name}</p>
					<div className={styles.card_img}>
						<Image image={article.image} />
					</div>
					<div className="">
						<p className={styles.article_title}> {article.title} </p>
						
					</div>

				</div>
			</a>
		</Link>
	)
}

export default Card
