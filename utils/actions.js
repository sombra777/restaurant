import { firebaseApp } from "./firebase";
import * as firebase from "./firebase";
//acceso a la base de datos
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export const isUserLogged = () => {
  let isLogged = false;
  //onAuthStateChange nos informa cuando el usuario cambia de estar loggeado o no y nos devuelve como parametro el usuario
  firebase.auth().onAuthStateChange((user) => {
    user !== null && (isLogged = true);
  });
};
