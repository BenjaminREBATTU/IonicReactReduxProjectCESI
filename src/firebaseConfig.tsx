import * as firebase from "firebase"

const config = {
    apiKey: "AIzaSyD0hOxOUy-ymzV86Se97MwYHdlRPH4_tRU",
    authDomain: "appionicprosit.firebaseapp.com",
    databaseURL: "https://appionicprosit.firebaseio.com",
    projectId: "appionicprosit",
    storageBucket: "appionicprosit.appspot.com",
    messagingSenderId: "929078523785",
    appId: "1:929078523785:web:586782a378a2e4ffc69358"

}

firebase.initializeApp(config)

export async function loginFirebase(username :string, password :string) {
    const email = username + "@ionicprosit.fr"

    try
    {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log("the user: " + email + " is connected to the database", res )
        return true
    }
    catch(error)
    {
        console.log(error)
        return false
    }
}
