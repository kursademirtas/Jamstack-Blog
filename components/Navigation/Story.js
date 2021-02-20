import React,{useState} from 'react';
import Link from 'next/link';
import Image from '../Image'
import styles from './Story.module.css'


const Story = ({ stories }) => {

	const [currentStory, setCurrentStory] = useState(0);
	const articleSlug = `/article/${stories[currentStory].slug}`;

	function showNextStory() {
		if(currentStory >= stories.length-1) return;
		setCurrentStory(currentStory+ 1)
	}
	
	function showPreviousStory() {
		if(currentStory <= 0) return;
		setCurrentStory(currentStory - 1)
	}

	return (
		<div className={styles.story_container}>
			<div className={styles.slide_container}>
				<button className={styles.btn_previous}onClick={showPreviousStory} >&#8249;</button>
				<Link as={articleSlug} href={articleSlug}>
					<a>
						<Image  image={stories[currentStory].image}  style={styles.story_img} />
					</a>
				</Link>
				<button className={styles.btn_next} onClick={showNextStory}>&#8250;</button>	
			</div>		
			<h2 className={styles.story_text}>{stories[currentStory].title}</h2>
		</div>
	
	);
}

export default Story;
