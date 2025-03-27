// import React, { useEffect, useState } from "react";
import { auth, db} from "./firebase_imports";
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
export const saveHabitling = async (habitling) => {
  console.log("in save");
  try {
    const docRef = doc(db, "allHabits", habitling.petName);//pet name now has to be unique, but we can add a qualifier for that.
    await setDoc(docRef, {
      habitling,
      userId: auth.currentUser.uid
    });
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
export const fetchHabits = async () => {
  try{
    const q = query(collection(db, "allHabits"), where("userId", "==", auth.currentUser.uid));
    console.log(q);
    const EveryHabitYouOwn = await getDocs(q);
    const habitsArray = EveryHabitYouOwn.docs.map((doc) => doc.data().habitling);

    return habitsArray;
    //need to see how it stores, then make it unwrap in a way that habits wants it to be
  } catch {
    console.log("no habits ya shrimp!")
    console.error("Error fetching messages:", error.message);
    
    return [];
  }
};





