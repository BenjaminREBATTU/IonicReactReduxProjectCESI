import React from 'react';
import AuthService from '../Authentication';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonButton, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

class LoginTab extends React.Component {

    constructor(public authService : AuthService) {
        super(authService)
        //this.authService.myLogin() = this.authService.myLogin.bind(this)
        this.submitLogin = this.submitLogin.bind(this)
    }

    state = {
        username: "",
        password: ""
    }

    submitLogin(){
        console.log("blabla")
        this.authService.Login(this.state.username, this.state.password)
    }

    render(){
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Auth</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="Ion-Auth">
                    <IonLabel>Login</IonLabel>
                    <IonInput type="text" id="login" onIonChange={(e: any) => this.setState({username: e.target.value})}/>

                    <IonLabel>Password</IonLabel>
                    <IonInput type="password" id="password" onIonChange={(e: any) => this.setState({password: e.target.value})}/>
                    <IonButton onClick={this.submitLogin}>Sign In</IonButton>
                </IonContent>
            </IonPage>
        );
    }
}

export default LoginTab;
