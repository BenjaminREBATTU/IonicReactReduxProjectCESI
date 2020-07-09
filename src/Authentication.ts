import React from 'react'

export default class AuthService extends React.Component{

    private isLoggedIn = false;

    Login = (username : string, password : string) => {
        if(username === "Ben" && password == "pass"){
            console.log("Je suis connecté")
            this.isLoggedIn = true;
        }
    }

    public myLogin(username: string, password: string){
        if(username === "Ben" && password == "pass"){
            console.log("Je suis connecté")
            this.isLoggedIn = true;
        }
    }

    logout() : void {
        if(this.isLoggedIn == true){
            this.isLoggedIn = false;
        }
    }

    isAuthenticated() : boolean {
        return this.isLoggedIn
    }
}
