import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./App.css";
import Profile from "./Profile/Components/Profile";
import picture from "./chams.jpg";

function App() {
  return (
    <div className="App">
      <Profile
        fullName="chams jadla"
        bio="jeune diplome en licence fondamentale en chimie avec une dexieme licence geologie et deux stage au hospital mdhilla en 2017/2018. J’ai acquis au cours de mes études et mes premiers stages professionnels une forte sensibilité au travail en équipe, au sens de l’engagement, au respect des normes de qualité et l’importance d’une bonne réactivité"
      >
        <img src={picture} alt="profile"></img>
      </Profile>
    </div>
  );
}

export default App;