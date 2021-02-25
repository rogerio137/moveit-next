import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/component/Profile.module.css';

export function Profile(){

    const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/rogerio137.png" alt="Rogério Barrucalle Ortiz" />
            <div>
                <strong>Rogerio Barrucalle Ortiz</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}