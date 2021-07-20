import '../styles/global.scss'
import { ChallengesProvider } from '../contexts/ChallengeContexts'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>

  )
}

export default MyApp
