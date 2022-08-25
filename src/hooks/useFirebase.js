import { useState, useEffect, useRef } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import initializeAuthentication from "../components/Security/Firebase/firebase.init";
import { render } from "react-dom";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [getuser, setGetuser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [authInfo, setAuthInfo] = useState("");
  const [admin, setAdmin] = useState(false);
  const isHave = useRef(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, biodataNumber, navigate) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        setAuthInfo("");

        const newUser = {
          email,
          displayName: name,
        };
        setUser(newUser);
        saveUser(email, name, biodataNumber, "POST");

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setAuthInfo("");
        setAuthError("This email already registered.");
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        setAuthInfo("");

        if (location.state) {
          let from = location.state.from.pathname || "/";
          navigate(from, { replace: true });
        } else {
          navigate("/");
        }
      })

      .catch((error) => {
        setAuthInfo("");
        setAuthError("Email address or password are incorrect.");
      })
      .finally(() => setIsLoading(false));
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setAuthError("");
        setAuthInfo(
          "Your request successfully submitted! Please check your email ..."
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthInfo("");
        setAuthError(error.message);
        // ..
      });
  };

  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
      // ...
    });
  };

  const deleteUserAccount = () => {
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        // User deleted.
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
  };

  const signInWithGoogle = (biodataNumber, location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        getuser.map((check) => {
          if (check.email == user.email) {
            isHave.current = true;
            biodataNumber = check.biodataNumber;
          }
        });

        if (isHave.current) {
          saveUser(user.email, user.displayName, biodataNumber, "PUT");
        } else {
          saveUser(user.email, user.displayName, biodataNumber, "POST");
        }

        if (location.state) {
          let from = location.state.from.pathname || "/";
          navigate(from, { replace: true });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const pinGenerator = (setBiodataNumber) => {
    const pinMake = Math.round(Math.random() * 1000000) + "";

    getuser.map((check) => {
      if (check.biodataNumber == pinMake && pinMake.length != 6) {
        pinGenerator(setBiodataNumber);
      } else {
        setBiodataNumber(pinMake);
      }
    });
    setBiodataNumber(pinMake);
  };

  useEffect(() => {
    fetch("https://biodata-server.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setGetuser(data));
  }, []);

  useEffect(() => {
    fetch(`https://biodata-server.herokuapp.com/users/admin/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);

  const saveUser = (email, displayName, biodataNumber, method) => {
    const user = { email, displayName, biodataNumber };
    fetch("https://biodata-server.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    authError,
    authInfo,
    admin,
    registerUser,
    loginUser,
    logout,
    resetPassword,
    emailVerification,
    deleteUserAccount,
    signInWithGoogle,
    pinGenerator,
  };
};

export default useFirebase;
