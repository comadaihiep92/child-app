import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import AppointmentCenter from "./components/AppointmentCenter/AppointmentCenter";
import ChildDailyInfo from "./components/ChildDailyInfo/ChildDailyInfo";
import MyPicture from "./components/MyPicture/MyPicture";
import MyMessages from "./components/MyMessages/MyMessages";
import SchoolDocuments from "./components/SchoolDocuments/SchoolDocuments";
import Login from "./components/Login/Login";
import Marketing from "./components/Marketing/Marketing";
import ViewMsg from "./components/ViewMsg/ViewMsg";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          path="/appointmentcenter"
          component={AppointmentCenter}
          exact={true}
        />
        <Route path="/childdailyinfo" component={ChildDailyInfo} exact={true} />
        <Route path="/mypicture" component={MyPicture} exact={true} />
        <Route path="/mymessages" component={MyMessages} exact={true} />
        <Route
          path="/schooldocuments"
          component={SchoolDocuments}
          exact={true}
        />
        <Route path="/marketing" component={Marketing} exact={true} />
        <Route path="/viewmsg" component={ViewMsg} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
