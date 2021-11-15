import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import sytles from './styles.module.scss'
import { signIn, signOut, useSession } from 'next-auth/client'

export const SignInButton = () => {

    const [session] = useSession()

    
    return session ? (

        <button
        type="button"
        className={sytles.signInButton}
        onClick={() => signOut()}
        >
        <FaGithub color="#04d361" />
        {session.user.name}
        <FiX color="#737373" className={ sytles.closeIcon } />
        </button>
       
    ) : (
        <button
        type="button"
        className={sytles.signInButton}
        onClick={() => signIn('github')}
        >
        <FaGithub color="#eba417" />
        Sign in with Github
        </button>

    )
};