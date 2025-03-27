// import React, { useEffect, useState } from "react";
import { db} from "./firebase_imports";
import { collection, setDoc, updateDoc, deleteDoc, doc, query, where, getDocs } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";



// const [habitling, setHabitling] = useState("");
// const [allHabits, setHabits] = useState([]);

// Save data to Firestore
// const saveData = async () => {
//   if (!authFromFirebase.currentUser) {
//     alert("Please login first");
//     return;
//   }
// };
//this only saves one habitling. Why would we need more? if you make a new habitling it is saved
//if you make two they are saved.
//if you update one it's updated. We should never need to save the user's entier roster because 
export const saveHabitling = async (habitling, petName) => {
  try {
    const docRef = doc(db, "allHabits", petName);//pet name now has to be unique, but we can add a qualifier for that.
    await setDoc(collection(db, "allHabits"), habitling);
    alert("habitling saved!");

  } catch (error) {
    alert(error.message);
  }
};


export const deleteHabitling = async (petName) => {
  try {
    await deleteDoc(doc(db, "allHabits", petName));
    alert("habitling deleted");
  } catch (error) {
    alert(error.message);
  }
};

export const updateHabitling = async (streakCurrent, streakBest, completion, petName) => {
  const habitlingName = doc(db, "allHabits", petName);
  try {
    await updateDoc(habitlingName, {
      current: {streakCurrent},//this can be changed to increment(1) if we wanted to.
      best: {streakBest},
      completion: {completion},
    });
    alert("habitling saved!");   
  } catch (error) {
    alert(error.message);
  }
};

//this pulls all of the habitlings down
export const fetchHabits = async (user) => {
  try{
    const q = query(collection(db, "allHabits"), where("userId", "==", user.uid));
    const snapshot = await getDocs(q);
    // const habits = (snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));dont' think we need this
    //need to see how it stores, then make it unwrap in a way that habits wants it to be
    return snapshot
  } catch {
    console.error("Error fetching messages:", error.message);
    return [];
  }
};





