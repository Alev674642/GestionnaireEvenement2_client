import Divider from "@mui/material/Divider";
import React from "react";
import Ifiltres from "../types/Ifiltres";

interface Props {
  filtres: Ifiltres;
  setFiltres: (arg: Ifiltres) => void;
}

export default function FiltreSorties({ filtres, setFiltres }: Props) {
  return (
    <React.Fragment>
      <Divider>
        <div className="filtres-title">Filtres</div>
      </Divider>
      <div className="d-flex justify-content-center mt-2">
        <form className="row row-cols-lg-auto gx-3 gy-2 align-items-center filter-style ">
          <div className="col-12">
            <label htmlFor="categorie">CatΓ©gorie</label>
          </div>
          <div className="col-12">
            <select
              className="form-select col-12"
              aria-label="Default select example"
              id="categorie"
              name="categorie"
              onChange={(e) => {
                setFiltres({ ...filtres, categorie: e.target.value });
              }}
              defaultValue={"0"}
            >
              <option value="0"></option>
              <option value="1">π¬ Cinema</option>
              <option value="2">π΄ Restaurant</option>
              <option value="3">πΊ Bar</option>
              <option value="4">πΈ Concert</option>
              <option value="5">π² Jeux</option>
              <option value="6">π¨ Exposition</option>
              <option value="7">π Sport</option>
              <option value="8">π Plage</option>
              <option value="9">π³ Nature</option>
              <option value="10">β Autre</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="filtreVille" className="form-label  mb-0">
              Ville
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control form-control-sm "
              id="filtreVille"
              onChange={(e) => {
                setFiltres({ ...filtres, ville: e.target.value });
              }}
            />
          </div>
          <div className="col-12">
            <label htmlFor="filtrePrix" className="form-label  mb-0">
              Prix maximum
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control form-control-sm "
              id="filtrePrix"
              onChange={(e) => {
                setFiltres({ ...filtres, prixMax: parseFloat(e.target.value) });
              }}
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
