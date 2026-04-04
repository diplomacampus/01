// Import Firebase Modules (v10.8.1)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase, ref as dbRef, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Your Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAaAbo8Q0fhXpMF1tgypr8dkvhBGyQQWig",
    authDomain: "diplomacampus.firebaseapp.com",
    databaseURL: "https://diplomacampus-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "diplomacampus",
    storageBucket: "diplomacampus.firebasestorage.app",
    messagingSenderId: "330061663460",
    appId: "1:330061663460:web:9d22eb10f9a821445b30f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

let currentUser = null;

// ==========================================
// 1. DUMMY NOTES DATA & RENDERING
// ==========================================
const notesData =[
    { id: "n1", title: "C++ Data Structures", desc: "Complete guide to Arrays, Linked Lists, Trees, and Graphs.", price: 49, img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80" },
    { id: "n2", title: "Applied Mathematics-II", desc: "Derivatives, Integrals, and Differential equations simplified.", price: 29, img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=500&q=80" },
    { id: "n3", title: "Computer Networks", desc: "OSI Model, TCP/IP, IP Subnetting, and Routing protocols.", price: 39, img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80" }
];

const notesContainer = document.getElementById('notesContainer');
notesData.forEach(note => {
    // Create card element
    const card = document.createElement('div');
    card.className = "group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col";
    
    card.innerHTML = `
        <div class="relative h-56 overflow-hidden">
            <img src="${note.img}" alt="${note.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute top-4 right-4 bg-white/95 backdrop-blur text-blue-600 text-sm font-black px-4 py-1.5 rounded-full shadow-lg">₹${note.price}</div>
        </div>
        <div class="p-6 flex-1 flex flex-col">
            <h4 class="text-xl font-extrabold text-slate-900 mb-2">${note.title}</h4>
            <p class="text-slate-500 text-sm mb-6 font-medium flex-1">${note.desc}</p>
            <button class="buy-btn w-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white font-bold py-3.5 px-4 rounded-xl transition duration-300 flex justify-center items-center gap-2">
                <i class="fas fa-shopping-cart"></i> Buy Now
            </button>
        </div>`;
    
    // Attach Razorpay trigger dynamically
    card.querySelector('.buy-btn').addEventListener('click', () => initiateRazorpay(note));
    notesContainer.appendChild(card);
});


// ==========================================
// 2. UI VIEW & SIDEBAR TOGGLES
// ==========================================
const homeView = document.getElementById('homeView');
const dashboardView = document.getElementById('dashboardView');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const profileMenu = document.getElementById('profileMenu');
const headerProfileImg = document.getElementById('headerProfileImg');

function toggleSidebar() {
    const isClosed = sidebar.classList.contains('translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
}
document.getElementById('hamburger').onclick = toggleSidebar;
overlay.onclick = toggleSidebar;
document.querySelectorAll('.sidebar-link').forEach(link => link.onclick = toggleSidebar);

function goHome() {
    homeView.classList.remove('hidden-view');
    dashboardView.classList.add('hidden-view');
    profileMenu.classList.add('hidden');
}
document.getElementById('logoBtn').onclick = goHome;
document.getElementById('navHome').onclick = goHome;
document.getElementById('backToHomeBtn').onclick = goHome;

document.getElementById('navDashboardBtn').onclick = () => {
    homeView.classList.add('hidden-view');
    dashboardView.classList.remove('hidden-view');
    profileMenu.classList.add('hidden');
    loadDashboardData();
};

headerProfileImg.onclick = () => profileMenu.classList.toggle('hidden');
window.onclick = (e) => {
    if (!headerProfileImg.contains(e.target) && !profileMenu.contains(e.target)) {
        profileMenu.classList.add('hidden');
    }
};


// ==========================================
// 3. AUTHENTICATION LOGIC
// ==========================================
let isLoginMode = true;
const authModal = document.getElementById('authModal');
const resetModal = document.getElementById('resetModal');
const authBtn = document.getElementById('authBtn');

// Open/Close Modals
authBtn.onclick = () => authModal.classList.remove('hidden-view');
document.getElementById('closeModal').onclick = () => authModal.classList.add('hidden-view');
document.getElementById('forgotPwdLink').onclick = () => {
    authModal.classList.add('hidden-view');
    resetModal.classList.remove('hidden-view');
};
document.getElementById('closeResetModal').onclick = () => resetModal.classList.add('hidden-view');

// Toggle Sign In / Sign Up
document.getElementById('toggleAuthBtn').onclick = (e) => {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    document.getElementById('modalTitle').innerText = isLoginMode ? "Welcome Back" : "Create Account";
    document.getElementById('toggleAuthText').innerText = isLoginMode ? "Don't have an account?" : "Already have an account?";
    e.target.innerText = isLoginMode ? "Sign Up" : "Sign In";
};

// Email & Password Auth
document.getElementById('authForm').onsubmit = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Processing...`;
    
    try {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (isLoginMode) {
            await signInWithEmailAndPassword(auth, email, password);
        } else {
            await createUserWithEmailAndPassword(auth, email, password);
        }
        authModal.classList.add('hidden-view');
        e.target.reset();
    } catch (err) { alert("Error: " + err.message); }
    
    btn.innerHTML = originalText;
};

// Google Auth
document.getElementById('googleSignInBtn').onclick = async () => {
    try { 
        await signInWithPopup(auth, googleProvider); 
        authModal.classList.add('hidden-view'); 
    } catch (err) { alert("Error: " + err.message); }
};

// Password Reset
document.getElementById('resetForm').onsubmit = async (e) => {
    e.preventDefault();
    try {
        await sendPasswordResetEmail(auth, document.getElementById('resetEmail').value);
        alert("Reset email sent! Please check your inbox.");
        resetModal.classList.add('hidden-view');
    } catch (err) { alert("Error: " + err.message); }
};

// Logout
document.getElementById('navLogoutBtn').onclick = async () => {
    await signOut(auth);
    goHome();
};

// Global Auth State Listener
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    if (user) {
        authBtn.classList.add('hidden');
        document.getElementById('userProfileSection').classList.remove('hidden');
        
        const name = user.displayName || "Student";
        const photo = user.photoURL || `https://ui-avatars.com/api/?name=${user.email}&background=2563EB&color=fff&rounded=true&bold=true`;
        
        // Update Header
        document.getElementById('headerName').innerText = name;
        document.getElementById('headerProfileImg').src = photo;
        
        // Update Dashboard Defaults
        document.getElementById('dashProfileImg').src = photo;
        document.getElementById('dashDisplayName').innerText = name;
        document.getElementById('dashDisplayEmail').innerText = user.email;
        document.getElementById('dashName').value = user.displayName || '';
    } else {
        authBtn.classList.remove('hidden');
        document.getElementById('userProfileSection').classList.add('hidden');
    }
});


// ==========================================
// 4. DASHBOARD - DATABASE & IMAGE UPLOAD
// ==========================================

// Image Upload (Firebase Storage)
document.getElementById('imgUpload').onchange = async (e) => {
    const file = e.target.files[0];
    if(!file || !currentUser) return;
    
    const loader = document.getElementById('imgLoader');
    loader.classList.remove('hidden');

    try {
        // Upload file to profiles folder with User UID as filename
        const sRef = storageRef(storage, `profiles/${currentUser.uid}`);
        await uploadBytes(sRef, file);
        
        // Get URL and update user profile
        const downloadURL = await getDownloadURL(sRef);
        await updateProfile(currentUser, { photoURL: downloadURL });
        
        // Update Images in DOM
        document.getElementById('dashProfileImg').src = downloadURL;
        document.getElementById('headerProfileImg').src = downloadURL;
    } catch(error) {
        alert("Upload Failed! Make sure Firebase Storage Rules are set to allow authenticated uploads. Error: " + error.message);
    } finally {
        loader.classList.add('hidden');
    }
};

// Load Real-time Database info
async function loadDashboardData() {
    if(!currentUser) return;
    try {
        const snap = await get(child(dbRef(db), `users/${currentUser.uid}`));
        if (snap.exists()) {
            const data = snap.val();
            document.getElementById('dashCollege').value = data.college || '';
            document.getElementById('dashBranch').value = data.branch || '';
            document.getElementById('dashSemester').value = data.semester || '';
        }
    } catch (e) { console.error("Error loading profile data", e); }
}

// Save Details to Realtime Database
document.getElementById('dashboardForm').onsubmit = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('dashSaveBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Saving...`;
    
    try {
        const newName = document.getElementById('dashName').value;
        
        // 1. Update Auth Display Name
        await updateProfile(currentUser, { displayName: newName });
        document.getElementById('headerName').innerText = newName;
        document.getElementById('dashDisplayName').innerText = newName;

        // 2. Save extra fields to Database
        await set(dbRef(db, 'users/' + currentUser.uid), {
            college: document.getElementById('dashCollege').value,
            branch: document.getElementById('dashBranch').value,
            semester: document.getElementById('dashSemester').value
        });

        // Success State
        btn.classList.replace('bg-blue-600', 'bg-green-500');
        btn.innerHTML = `<i class="fas fa-check"></i> Saved Successfully`;
        setTimeout(() => {
            btn.classList.replace('bg-green-500', 'bg-blue-600');
            btn.innerHTML = originalText;
        }, 2500);

    } catch (err) { 
        alert(err.message); 
        btn.innerHTML = originalText; 
    }
};


// ==========================================
// 5. RAZORPAY PAYMENT GATEWAY
// ==========================================
function initiateRazorpay(note) {
    if (!currentUser) {
        authModal.classList.remove('hidden-view');
        return;
    }

    const options = {
        "key": "rzp_test_YOUR_KEY_HERE", // ⚠️ ADD YOUR RAZORPAY TEST KEY HERE
        "amount": note.price * 100, // Multiplied by 100 because amount is in Paise
        "currency": "INR",
        "name": "Diploma Campus",
        "description": "Premium Notes: " + note.title,
        "image": "https://i.ibb.co/FkPMTt3K/Picsart-26-03-28-17-11-59-786.png",
        "handler": function (response){ 
            // On Success
            alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}\n\nNote added to your account!`);
            // Add Firebase function call here to unlock content
        },
        "prefill": { 
            "name": currentUser.displayName || "", 
            "email": currentUser.email 
        },
        "theme": { "color": "#2563EB" }
    };

    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function (resp){ 
        alert("Payment Failed. Reason: " + resp.error.description); 
    });
    rzp.open();
}