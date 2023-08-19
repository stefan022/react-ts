import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../../firebase/config';
import { toast } from 'react-toastify';
import { Routes } from '../../../../router/Routes';
import { doc, setDoc } from 'firebase/firestore';

const AuthGoogleButton = () => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

	const signInWithGoogle = () => { 
		signInWithPopup(auth, provider)
  			.then((userCredential) => {
				toast.success("Login successfully");
				navigate(Routes.HOME);

                const firstNameAndLastName = userCredential.user.displayName!.split(" ");

                const email = userCredential.user.email!;
                const username = email.split("@")[0];
                const firstName = firstNameAndLastName[0];
                const lastName = firstNameAndLastName[1];

                const userId = userCredential.user.uid;
                const timestamp = new Date().getTime();
				
				userCredential.user.getIdToken()
					.then(token => {
                        setDoc(doc(db, "users", userId), {
                            userId,
                            firstName,
                            lastName,
                            username,
                            email,
                            sinceMember: timestamp,
                            token
                        });

                        localStorage.setItem("token", token);
                        localStorage.setItem("userId", userId);
                    });

  			}).catch((error) => {
				toast.error(error.message);
  			});
	};

    return (
        <button
            onClick={signInWithGoogle}
            className="hover:bg-gray-100 text-gray-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full border border-gray-400 flex items-center justify-center"
            type="button"
        >
            <FcGoogle size={24}/>
            <p className="ml-2 text-base">Sign In with Google</p>
        </button>
    )
}

export default AuthGoogleButton