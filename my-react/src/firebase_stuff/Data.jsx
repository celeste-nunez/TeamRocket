// import React, { useEffect, useState } from "react";
import { auth, db} from "./firebase_imports";
import { collection, setDoc, updateDoc, deleteDoc, doc, query, where, getDocs } from "firebase/firestore";


//this only saves one habitling. Why would we need more? if you make a new habitling it is saved
//if you make two they are saved.
//if you update one it's updated. We should never need to save the user's entier roster because 
export const saveHabitling = async (habitling) => {
 
  try {
    const docRef = doc(db, auth.currentUser.uid, habitling.petName);//pet name now has to be unique, but we can add a qualifier for that.
    await setDoc(docRef, {
      habitling
      // userId: auth.currentUser.uid
    });
    alert("habitling saved!");

  } catch (error) {
    alert(error.message);
  }
};


export const deleteHabitling = async (petName) => {
  try {
    await deleteDoc(doc(db, auth.currentUser.uid, petName));
    alert("habitling deleted");
  } catch (error) {
    alert(error.message);
  }
};

export const updateHabitling = async (streakCurrent, streakBest, completion, petName) => {
  const habitlingName = doc(db, auth.currentUser.uid, petName);
  try {
    await updateDoc(habitlingName, {
      "habitling.currentStreak": streakCurrent,//this can be changed to increment(1) if we wanted to.
      "habitling.bestStreak": streakBest,
      "habitling.completion": completion,
    });
    alert("habitling saved!");   
  } catch (error) {
    alert(error.message);
  }
};

//this pulls all of the habitlings down
export const fetchHabits = async () => {
  try{
    const q = query(collection(db, auth.currentUser.uid)/*, where("userId", "==", auth.currentUser.uid)*/);
   
    const everyHabitYouOwn = await getDocs(q);
    const habitsArray = everyHabitYouOwn.docs.map((doc) => doc.data().habitling);

    return habitsArray;
    //need to see how it stores, then make it unwrap in a way that habits wants it to be
  } catch {
    console.log("no habits ya shrimp!")
    console.error("Error fetching messages:", error.message);
    
    return [];
  }
};





