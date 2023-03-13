import React, { useState, useEffect } from "react";

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const initGoogleSignIn = () => {
      window.gapi.load("auth2", () => {
        window.gapi.auth2
          .init({
            client_id: "TU_CLIENT_ID",
          })
          .then(() => {
            const auth = window.gapi.auth2.getAuthInstance();
            setIsSignedIn(auth.isSignedIn.get());

            auth.isSignedIn.listen(setIsSignedIn);
          })
          .catch((error) => onFailure(error));
      });
    };

    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => initGoogleSignIn();
      document.body.appendChild(script);
    };

    loadGoogleScript();
  }, []);

  const handleSignInClick = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn().then((response) => onSuccess(response));
  };

  const handleSignOutClick = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut().then(() => setIsSignedIn(false));
  };

  return (
    <>
    
      {isSignedIn ? (
       
       <button onClick={handleSignOutClick}>Cerrar sesión</button>
      ) : (
        <button onClick={handleSignInClick}>Iniciar sesión con Google</button>
      )}
    </>
  );
};

export default GoogleLoginButton;
