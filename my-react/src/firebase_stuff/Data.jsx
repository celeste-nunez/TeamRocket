// import React, { useEffect, useState } from "react";
import { auth, db} from "./firebase_imports";
// add several functions that facilitate querying and inserting into firebase (directly from Firebase)
import { collection, setDoc, updateDoc, deleteDoc, doc, query, where, getDocs } from "firebase/firestore";


//this only saves one habitling. Why would we need more? if you make a new habitling it is saved
//if you make two they are saved.
//if you update one it's updated. We should never need to save the user's entier roster because 
export const saveHabitling = async (habitling) => {
 
  // attempt to access the habitling via user id from authentication with the habitling's name
  try {
    const docRef = doc(db, auth.currentUser.uid, habitling.petName);//pet name now has to be unique, but we can add a qualifier for that.
    // if successful, set the document (in firebase) to the gathered data
    await setDoc(docRef, {
      habitling
      // userId: auth.currentUser.uid
    });
    alert("habitling saved!");

  } catch (error) {
    // if unsuccessful, alert the user + describe the error
    alert(error.message);
  }
};

// delete the habitling, pass the name in as querying element
export const deleteHabitling = async (petName) => {
  try {
    // attempt to delete the document (or habilting) from the database where it matches the user's ID and the specified pet name
    await deleteDoc(doc(db, auth.currentUser.uid, petName));
    alert("habitling deleted");
  } catch (error) {
    // if unsuccessful, alert the user + describe the error
    alert(error.message);
  }
};

// update a habitling, called when updating the user's streak
export const updateHabitling = async (streakCurrent, streakBest, completion, petName) => {
  // retrieve the habitling's name
  const habitlingName = doc(db, auth.currentUser.uid, petName);
  try {
    // retirve the specific streaks, and update them to the new numbers
    await updateDoc(habitlingName, {
      "habitling.currentStreak": streakCurrent,//this can be changed to increment(1) if we wanted to.
      "habitling.bestStreak": streakBest,
      "habitling.completion": completion,
    });
    alert("habitling saved!");   
  } catch (error) {
    // if unsuccessful, alert the user + describe the errer
    alert(error.message);
  }
};

//this pulls all of the habitlings down
export const fetchHabits = async () => {
  try{
    // q returns a collection of habitlings that meet the criteria: user's ID
    const q = query(collection(db, auth.currentUser.uid)/*, where("userId", "==", auth.currentUser.uid)*/);
   
    // assign the retrieved habits to a variable
    const everyHabitYouOwn = await getDocs(q);
    // for each habit, assign them through the habitling html + css styling, then add them to a new array
    const habitsArray = everyHabitYouOwn.docs.map((doc) => doc.data().habitling);

    return habitsArray;
    //need to see how it stores, then make it unwrap in a way that habits wants it to be
  } catch {
    // if unsuccessful, alert the user + describe the error, if you're a shrimp
    console.log("no habits ya shrimp!")
    console.error("Error fetching messages:", error.message);
    
    return [];
  }
};





