import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContexts';
import styles from './styles.module.scss'

export function CompletedChallenges(){
    const { challengesCompleted} = useContext(ChallengesContext)

    return (
        <div className ={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}