
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallanges/CompletedChallenges'
import { Countdown } from '../components/Countdown/Countdown'
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar'
import { Profile } from '../components/Profile/Profile'
import { ChallengesProvider } from '../hooks/ChallengeContext'
import { CountdownProvider } from '../hooks/CountdownContext'
import styles from '../styles/home.module.scss'

type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Incio | move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>

        </CountdownProvider>
      </div>

    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props:{level:Number(level), currentExperience:Number(currentExperience), challengesCompleted:Number(challengesCompleted)}
  }
}
