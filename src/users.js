import { getFirestore, collection, addDoc } from "firebase/firestore";

async function createUsers() {
    const db = getFirestore();
  
    const usersCollection = collection(db, "usuarios");
  
    const users = [
      { name: "Usuario 1", age: 25 },
      { name: "Usuario 2", age: 30 },
      { name: "Usuario 3", age: 28 },
      { name: "Usuario 4", age: 32 },
      { name: "Usuario 5", age: 27 },
    ];
  
    for (const user of users) {
      await addDoc(usersCollection, user);
    }
  
    console.log("Usuarios agregados correctamente.");
  }
  
  export default createUsers;
  