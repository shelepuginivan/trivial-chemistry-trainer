import React, { FC, useState } from 'react'

import styles from './questionCard.module.sass'

type PropsType = {
	answer: string
	question: string
}

const QuestionCard: FC<PropsType> = ({ answer, question }) => {
	const [revealed, setRevealed] = useState<boolean>(false)

	const flipCard = () => {
		setRevealed(prev => !prev)
		setTimeout(() => setRevealed(false), 3000)
	}

	return (
		<div className={styles.card} data-revealed={revealed} onClick={flipCard}>
			<div className={styles.questionSide}>{question}</div>
			<div className={styles.answerSide}>{answer}</div>
		</div>
	)
}

export default QuestionCard
