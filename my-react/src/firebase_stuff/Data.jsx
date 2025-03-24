// import React, { useEffect, useState } from "react";
import { db} from "./firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";



const [Habitling, setHabitling] = useState("");
const [messages, setMessages] = useState([]);

// // Save data to Firestore
// const saveData = async () => {
//   if (!authFromFirebase.currentUser) {
//     alert("Please login first");
//     return;
//   }

  //also need update docs
export const sendData = async (habitling, userId) => {
  try {
    await addDoc(collection(db, "messages"), {
      Habitling,
      userId: authFromFirebase.currentUser.uid,
      createdAt: new Date(),//changed this from timestamp. maybe will break
    });
    alert("Message saved!");
    setHabitling(""); // Clear input after saving
    fetchHabits(); // This method should be what fills out our habitlings. We can use this to populate the right and give that nice effect I was thinking about
  } catch (error) {
    alert(error.message);
  }
};

// Fetch user-specific data from Firestore 
//this needs to be updated to retrieve habitlings instead of messages
export const fetchHabits = async () => {
  // if (!authFromFirebase.currentUser) return;
  try{
    const q = query(collection(db, "messages"), where("userId", "==", authFromFirebase.currentUser.uid));
    const snapshot = await getDocs(q);
    setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  } catch {
    console.error("Error fetching messages:", error.message);
    return [];
  }
};





