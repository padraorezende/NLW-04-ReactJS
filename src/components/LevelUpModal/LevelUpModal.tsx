import { useContext } from 'react';
import { ChallengesContext } from '../../hooks/ChallengeContext';
import styles from './styles.module.scss'

export function LevelUpModal () {
    const { level, closeLevelUpModal} = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabens</strong>
                <p>Voce alcançou um novo nivel</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal" />
                </button>

            </div>

        </div>
    );
}