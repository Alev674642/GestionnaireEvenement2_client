import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../login/AuthProvider";
import "../../App.css";

export default function Welcome() {
  let auth = useContext(AuthContext);
  return (
    <div className="container py-5">
      <h1>Mon gestionnaire d'évènements</h1>
      {!auth.user && (
        <div className="container my-5 border rounded py-5 fs-5 bg-yellow font-weight-bold shadow">
          <h3>Bienvenue dans ce gestionnaire d'évènements.</h3>
          <h3>
            Cette application vous permet d'ajouter, de modifier et de supprimer
            des évènements.
          </h3>
          <h3>Mais d'abord il faut vous identifier!</h3>
          <Link to="/login" className="btn btn-outline-primary mt-4">
            S'identifier
          </Link>
        </div>
      )}
      {auth.user && (
        <div className="container my-5 border rounded py-5">
          <h3 style={{ fontWeight: "bold" }}>Bienvenue {auth.pseudo}</h3>
          <h3 className="mt-3" style={{ fontWeight: "bold" }}>
            Vous pouvez naviguer dans l'application à l'aide des menus de
            navigation.
          </h3>
        </div>
      )}
    </div>
  );
}
