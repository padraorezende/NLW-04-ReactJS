import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import { CompletedChallenges } from '../CompletedChallanges/CompletedChallenges';
import styles from './styles.module.scss'

export function ChallengeBox(){
    const { activeChallenges, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxConatiner}>
            {activeChallenges ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenges.amount} xp</header>

                   <main>
                       <img src={`icons/${activeChallenges.type}.svg`}/>
                       <strong>Novo desafio</strong>
                       <p>{activeChallenges.description}</p>
                   </main>

                   <footer>
                       <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeFailed}>Falhei</button>
                       <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>Completei</button>
                   </footer>
               </div>
            ): (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completando desafios.
                </p>
            </div>
            )} 
        </div>
    );
}