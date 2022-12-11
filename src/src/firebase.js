import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6xItNw9KLS2Ve-Khshlql1yRPKfmGvdY",
  authDomain: "pharma-track-91d0d.firebaseapp.com",
  projectId: "pharma-track-91d0d",
  storageBucket: "pharma-track-91d0d.appspot.com",
  messagingSenderId: "967740548920",
  appId: "1:967740548920:web:9de7f2f28e937dea8d43cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

export const setUserInfo = async (userID, info) => {
	const userRef = doc(firestore, `user/${userID}`);
	await setDoc(userRef, info);
};

export const checkUserInfoExist = async (uid) => {
	const userRef = doc(firestore, `user/${uid}`);
	const snapshot = await getDoc(userRef);
	return snapshot.exists();
};

export const popUpWithGoogle = async (role) => {
	const { user } = await signInWithPopup(auth, provider);
	const { uid } = user;
	!(await checkUserInfoExist(uid)) && (await setUserInfo(uid, { uid, role }));
	return user;
};

export const createUserUsingEmailPassword = async ({ email, password, role, province, username }) => {
	if (!email || !password || !role) return;
	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	const { uid } = user;
	await setUserInfo(uid, { uid, role });
	return user;
};

export const signInUsingEmailPassword = async (email, password, role) => {
	if (!email || !password) return;
	const { user } = await signInWithEmailAndPassword(auth, email, password);
	const { uid } = user;
	!(await checkUserInfoExist(uid)) && (await setUserInfo(uid, { uid, role }));
	return user;
};

export const signOutUser = async () => {
	await signOut(auth);
};
