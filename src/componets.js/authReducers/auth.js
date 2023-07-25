import { createSlice } from "@reduxjs/toolkit";
import {
    //getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
    

} from 'firebase/auth';
import { auth } from "../componets/firebase/firebase";



export const authSlice = createSlice({

    name: "auth",
    inialState: {
        user: {

            email: " ",
            password: " "
        },

    },
    reducers: {
        signUp: (state, action) => {
            createUserWithEmailAndPassword(auth, action.payload, action.payload)
                .then(() => {
                    alert("Registered successfully");
                }).catch((error) => {
                    console.log(error.message);
                });

        },
        signIn: (state, action) => {

            signInWithEmailAndPassword(auth, action.payload, action.payload).then(() => {

                alert("Log in succefully");
            })

                .catch((error) => {
                    console.log(action.payload);
                    console.log(action.payload);
                    const errorMessage = error.message;
                    console.log(errorMessage);

                });

        },
        signingOut: () => {
            signOut(auth)
                .then(() => {
                    return true;

                })

                .catch((error) => { });
        },
       

        



    }


});
export const { signUp, signIn, signingOut} = authSlice.actions;
export default authSlice.reducer;