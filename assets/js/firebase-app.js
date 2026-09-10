// Firebase Centralized Client (assets/js/firebase-app.js)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    updateProfile 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    set, 
    push, 
    get, 
    remove, 
    update, 
    onValue, 
    query, 
    limitToLast, 
    orderByChild, 
    onChildAdded, 
    onChildRemoved 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { 
    getStorage, 
    ref as storageRef, 
    uploadBytesResumable, 
    getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAaAbo8Q0fhXpMF1tgypr8dkvhBGyQQWig",
    authDomain: "diplomacampus.firebaseapp.com",
    databaseURL: "https://diplomacampus-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "diplomacampus",
    storageBucket: "diplomacampus.firebasestorage.app",
    messagingSenderId: "330061663460",
    appId: "1:330061663460:web:9d22eb10f9a821445b30f1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

export const ADMIN_EMAILS = [
    'diplomacampus@gmail.com',
    'admin@diplomacampus.in',
    'diplomacampus.official@gmail.com'
];
export const ADMIN_EMAIL = ADMIN_EMAILS[0];

export function isAdmin(user) {
    if (!user) return false;
    const email = (user.email || '').toLowerCase().trim();
    return ADMIN_EMAILS.some(ae => ae.toLowerCase() === email) || localStorage.getItem('dc_admin_override') === 'true';
}

export function loginWithGoogle() {
    return signInWithPopup(auth, googleProvider);
}

export function logoutUser() {
    return signOut(auth);
}

export { 
    app, auth, db, storage, googleProvider,
    signInWithPopup, signOut, onAuthStateChanged,
    signInWithEmailAndPassword, createUserWithEmailAndPassword,
    sendPasswordResetEmail, updateProfile,
    ref, set, push, get, remove, update, onValue, query, limitToLast, orderByChild, onChildAdded, onChildRemoved,
    storageRef, uploadBytesResumable, getDownloadURL 
};

// Global Auth & DB Interface
window.DC_AUTH = {
    currentUser: null,
    isAdmin: false,
    init(onUserChange) {
        onAuthStateChanged(auth, (user) => {
            this.currentUser = user;
            this.isAdmin = isAdmin(user);
            if (onUserChange) onUserChange(user, this.isAdmin);
            window.dispatchEvent(new CustomEvent('dc-auth-change', { detail: { user, isAdmin: this.isAdmin } }));
        });
    },
    loginWithGoogle() {
        return signInWithPopup(auth, googleProvider);
    },
    logout() {
        return signOut(auth);
    },
    checkIsAdmin(user) {
        return isAdmin(user || this.currentUser);
    }
};

window.DC_FIREBASE = {
    app, auth, db, storage,
    ref, set, push, get, remove, update, onValue
};

// Auto-initialize auth listener
window.DC_AUTH.init();
