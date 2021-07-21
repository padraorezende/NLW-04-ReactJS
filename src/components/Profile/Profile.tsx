import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';
import styles from './styles.module.scss';

export function Profile () {
    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}> 
            <img src="https://github.com/padraorezende.png" alt="Lucas Padrão" />
            <div>
                <strong>Lucas Padrão</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}