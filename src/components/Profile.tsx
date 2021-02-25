import styles from '../styles/component/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/rogerio137.png" alt="Rogério Barrucalle Ortiz" />
            <div>
                <strong>Rogerio Barrucalle Ortiz</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}