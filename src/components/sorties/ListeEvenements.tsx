import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../login/AuthProvider";
import { sortieContext } from "./SortieProvider";
import TableSorties from "./TableSorties";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import FiltreSorties from "./FiltreSorties";
import { URL_SERVER } from "../utils/Utils";
import CircularProgress from "../utils/CircularProgress";
import Isortie from "../types/Isortie";
import MapEvents from "../map/MapEvents";

export default function ListeEvenements() {
  const [sorties, setSorties] = useState<Isortie[]>([]);
  const { setSortiesContext } = useContext(sortieContext);
  const [loading, setLoading] = useState(true);
  let auth = useContext(AuthContext);
  const [filtres, setFiltres] = useState({
    ville: "",
    prixMax: -1,
    categorie: "0",
  });

  useEffect(() => {
    fetchSorties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let fetchSorties = () => {
    setLoading(true);
    fetch(URL_SERVER + "/api/sortie/", {
      method: "GET",
      headers: new Headers({
        authorization: "Token " + auth.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.sort((a: Isortie, b: Isortie) => {
          return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
        });

        setSorties(data);

        /*   filtrerSorties(); */
        return data;
      })
      .then((data) => {
        setSortiesContext(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const filtrerSortieDynamique = () => {
    let sortiesFiltreesDynamiques = sorties;
    if (sortiesFiltreesDynamiques !== null) {
      if (filtres.ville !== "")
        sortiesFiltreesDynamiques = sortiesFiltreesDynamiques.filter((item) => {
          return item.lieu2.includes(filtres.ville);
        });

      if (filtres.prixMax !== null && filtres.prixMax > -1) {
        sortiesFiltreesDynamiques = sortiesFiltreesDynamiques.filter(
          (item) => item.price <= filtres.prixMax
        );
      }
      if (filtres.categorie !== null && filtres.categorie !== "0") {
        sortiesFiltreesDynamiques = sortiesFiltreesDynamiques.filter(
          (item) => item.categorie === filtres.categorie
        );
      }
    }
    return sortiesFiltreesDynamiques;
  };

  if (loading) {
    return (
      <div className="bg-light ">
        <CircularProgress className="my-5" />
      </div>
    );
  } else {
    return (
      <div className="bg-light  pt-1">
        <div className="container">
          <div className="mb-3 fs-1 fw-light ">Ev??nements</div>
          <MapEvents evenements={sorties}></MapEvents>
          <div>
            (Cliquez sur les ic??nes de la carte pour acc??der ?? l'??v??nement
            correspondant)
          </div>
          <div className="filter-div">
            <FiltreSorties
              filtres={filtres}
              setFiltres={setFiltres}
            ></FiltreSorties>
          </div>
          <div className="table-border-mystyle mb-5">
            <TableSorties data={filtrerSortieDynamique()} />
          </div>
          <br />
          <div className="container">
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip id={`tooltip-right`}>
                  Cliquer pour cr??er un nouvel ??v??nement.
                </Tooltip>
              }
            >
              <Link
                type="button"
                className="btn btn-primary mb-5 btn-creation-sortie"
                to="/formulairesortieFormik"
              >
                Cr????r un nouvel ??v??nement
              </Link>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    );
  }
}
