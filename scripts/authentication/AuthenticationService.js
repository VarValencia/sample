import auth from '@react-native-firebase/auth';

const AuthenticationService = {
  login(user) {
    auth()
      .signInWithEmailAndPassword(user.email, user.pwd)
      .then(() => {
        console.log('Logged in!');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          console.log('User not found in database');
          return 0;
        }

        console.error(error);
      });
  },

  signup(user) {
    auth()
      .createUserWithEmailAndPassword(user.email, user.pwd)
      .then(() => {
        console.log('User registered!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          return 1;
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          return 2;
        }

        console.error(error);
      });
  },
  logout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  },
};

export default AuthenticationService;
