/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const name = 'potato alu mia';

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser);
    //     }else{
    //         console.log('no user logged in');
    //         setUser(null);
    //     }
    // })
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authInfo ={
        name,
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// 1. create context with null as default
// 2. create provider
// 3. set a default value
// 4. use the auth provider in the main.jsx
// 5. access the children inside the auth provider in the main.jsx