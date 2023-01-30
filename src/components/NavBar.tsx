import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCalendarCheck } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { AuthContext } from "./login/AuthProvider";
import {
  Tooltip,
  OverlayTrigger,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import "../App.css";
import { Badge, Chip } from "@mui/material";

export default function NavBar() {
  let auth = useContext(AuthContext);

  return (
    <Navbar
      expand="lg"
      className="navbar-light bg-primary bg-gradient bg-opacity-25  nav-mystyle"
    >
      <Container>
        <Navbar.Brand className="fs-3 ms-3 " href="/">
          <BsCalendarCheck className="fs-1 align-top" />
        </Navbar.Brand>
        <a className="navbar-brand fs-4 ms-3 " href="/">
          <p className="nav-logo-font-mystyle" style={{ lineHeight: "0.5" }}>
            Mon gestionnaire
          </p>
          <p
            className="nav-logo-font-mystyle"
            style={{ lineHeight: "0.5", marginBottom: "0" }}
          >
            d'évènements
          </p>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-lg-0 mt-3 mt-lg-0 ">
            <li className="nav-item mx-1 ">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id={`tooltip-right`}>
                    Affiche la liste des évènements créés.
                  </Tooltip>
                }
              >
                <Link
                  className="nav-link active  nav-font-mystyle"
                  aria-current="page"
                  to="/listeSorties"
                >
                  <Badge badgeContent={4} color="secondary">
                    <Chip
                      label="Liste des évènements"
                      onClick={() => {}}
                      sx={{ fontSize: "18px" }}
                    />
                  </Badge>
                </Link>
              </OverlayTrigger>
            </li>

            <li className="nav-item active  mx-1">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id={`tooltip-right`}>
                    Créez un nouvel évènement.
                  </Tooltip>
                }
              >
                <Link
                  className="nav-link nav-font-mystyle"
                  to="/formulairesortieFormik"
                >
                  <Chip
                    label="Création d'un évènement"
                    onClick={() => {}}
                    sx={{ fontSize: "18px" }}
                  />
                </Link>
              </OverlayTrigger>
            </li>
            <li className="nav-item active  mx-1">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id={`tooltip-right`}>
                    Visionnez tous les évènements.
                  </Tooltip>
                }
              >
                <Link className="nav-link nav-font-mystyle" to="/visionneuse">
                  <Chip
                    label="Visionneuse d'évènements"
                    onClick={() => {}}
                    sx={{ fontSize: "18px" }}
                  />
                </Link>
              </OverlayTrigger>
            </li>
          </Nav>
          <div className="d-flex flex-column justify-content-center ">
            <p className="my-auto user-navbar-mystyle ">
              {auth.pseudo ? auth.pseudo : "non identifié"}
            </p>
            {auth.pseudo && (
              <button
                className="btn  btn-sm btn-navbar-mystyle rounded-pill"
                onClick={() => {
                  auth.signout(() => {});
                }}
              >
                Se déconnecter <HiOutlineLogout />
              </button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
