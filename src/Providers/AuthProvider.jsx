import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = (name, image, type, email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password, type) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password, type)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {

                setUser(result.user);

            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
            });
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in auth change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
    
        return () => {
            unSubscribe();
        };
    }, []); 


    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;