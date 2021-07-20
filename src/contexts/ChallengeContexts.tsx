import {createContext, ReactNode, useState} from 'react'
import challenges from '../../challenges.json'

type Challenge = {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

type ChallengesContextData = {
    level:number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenges: Challenge;
    experienceToNextLevel:number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

type ChallengesProviderProps ={
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenges, setActiveChallenges] = useState(null);

    const experienceToNextLevel = Math.pow((level+1)*4,2)

    function levelUp(){
        setLevel(level+1);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() + challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenges(challenge)
    }

    function resetChallenge(){
        setActiveChallenges(null);
    }

    return (
    <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted, activeChallenges,experienceToNextLevel, levelUp, startNewChallenge,resetChallenge}}>
        {children}
    </ChallengesContext.Provider>
    )
}

