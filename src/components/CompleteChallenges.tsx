import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/component/CompleteChallenges.module.css'

export function CompleteChallenges(){
    const {challengesCompleted} = useContext(ChallengesContext);
    return(
        <div className={styles.completeChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}