import { useEffect, useState } from "react"
import { createContext } from "react"
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import app from "../../Firebase/FIrebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()



    const newUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleGoolgeLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    const userlogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
            .then(() => {
            })
            .catch(err => {
                console.log("Error signing out: ", err.message)
            })

    }

    const updateUserProfile = (userData) => {
        return updateProfile(auth.currentUser, userData)
        // .then(() => {
        //     setUser({ ...auth.currentUser })
        // })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth), currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])




    const authInfo = {
        user, setUser, newUser, userlogIn, logOut, updateUserProfile, handleGoolgeLogIn, loading
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
