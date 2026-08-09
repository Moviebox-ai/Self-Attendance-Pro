// Firebase Configuration for Self Attendance Pro (Project: selfattendance-42445)
const firebaseConfig = {
  apiKey: "AIzaSyDUVWpZOV3KsxUvx--iZmuGEfhfMqg4DYs",
  authDomain: "selfattendance-42445.firebaseapp.com",
  databaseURL: "https://selfattendance-42445-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "selfattendance-42445",
  storageBucket: "selfattendance-42445.firebasestorage.app",
  messagingSenderId: "611062377939",
  appId: "1:611062377939:web:e7724df005cf63fdd21326",
  measurementId: "G-LBFVVJN8GK"
};

// Global handles
let db = null;
let auth = null;

// Initialize Firebase Compat Mode if SDK scripts are loaded
if (typeof firebase !== 'undefined') {
    if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("🔥 Firebase initialized with project: selfattendance-42445");
    }
    
    if (firebase.firestore) {
        db = firebase.firestore();
        window.db = db;
    }
    if (firebase.auth) {
        auth = firebase.auth();
        window.auth = auth;
    }
    if (firebase.analytics) {
        try {
            firebase.analytics();
        } catch (e) {
            console.log("Analytics initialized");
        }
    }
} else {
    console.warn("Firebase SDK scripts not found in window.");
}

// Function to save attendance record to Firestore
async function saveAttendanceToFirebase(attendanceData) {
    if (!window.db) {
        console.log("Firestore not available, skipping cloud sync.");
        return false;
    }
    try {
        const docRef = await window.db.collection("attendance").add({
            ...attendanceData,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Attendance saved to Firestore with ID: ", docRef.id);
        return true;
    } catch (error) {
        console.error("Error writing attendance to Firestore: ", error);
        return false;
    }
}

// Function to save withdrawal request to Firestore
async function saveWithdrawalToFirebase(withdrawalData) {
    if (!window.db) {
        console.log("Firestore not available, skipping withdrawal cloud sync.");
        return false;
    }
    try {
        const docRef = await window.db.collection("withdrawals").add({
            ...withdrawalData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Withdrawal request saved to Firestore with ID: ", docRef.id);
        return true;
    } catch (error) {
        console.error("Error saving withdrawal to Firestore: ", error);
        return false;
    }
}

// Function to update user profile & debited coins in Firestore
async function updateUserBalanceInFirebase(userId, userData) {
    if (!window.db) {
        console.log("Firestore not available, skipping balance sync.");
        return false;
    }
    try {
        let userRef = window.db.collection("users").doc(userId);
        const directSnapshot = await userRef.get();
        if (!directSnapshot.exists) {
            const byUniqueId = await window.db.collection("users")
                .where("uniqueId", "==", userId)
                .limit(1)
                .get();
            if (!byUniqueId.empty) {
                userRef = window.db.collection("users").doc(byUniqueId.docs[0].id);
            }
        }
        await userRef.set({
            ...userData,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log("User balance updated in Firestore for:", userId);
        return true;
    } catch (error) {
        console.error("Error updating user balance in Firestore:", error);
        return false;
    }
}

window.saveAttendanceToFirebase = saveAttendanceToFirebase;
window.saveWithdrawalToFirebase = saveWithdrawalToFirebase;
window.updateUserBalanceInFirebase = updateUserBalanceInFirebase;
