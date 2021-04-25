import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedCharllenges.module.css';

export function CompletedCharllenges() {
  const {challengeCompleted} = useContext(ChallengesContext);

  return (
    <div className={styles.completedCharllengesContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}