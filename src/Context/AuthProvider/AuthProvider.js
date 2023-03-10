import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user)
    const [loading, setLoading] = useState(true);

    console.log('authprovider', user)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })

    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);

    }

    const passResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside changed', currentUser);
            setUser(currentUser);


            setLoading(false);

        });
        return () => {
            unsubscribe();
        }



    }, [])


    const authInfo = {
        createUser,
        providerLogin,
        user,
        signIn,
        logOut,
        updateUserProfile,
        loading,
        passResetEmail,
        setLoading



    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;