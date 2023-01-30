import React from "react";
import Typography from "@mui/material/Typography";
import dateFormat from "dateformat";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/map.css";
import Isortie from "../types/Isortie";

export default function EvenementTooltip({
  evenement,
}: {
  evenement: Isortie;
}) {
  const navigate = useNavigate();

  return (
    <div className="evenement-tooltip">
      <Typography variant="h5" gutterBottom>
        {evenement.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {dateFormat(evenement.date, "dd/mm/yyyy")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {evenement.description}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {evenement.lieu}
      </Typography>
      <br />
      <Typography variant="caption" gutterBottom>
        {evenement.lieu2}
      </Typography>
      <br />
      <Button
        variant="contained"
        size="small"
        className="button-navigate"
        onClick={() => navigate(`/sortie/${evenement._id}`)}
      >
        Voir
      </Button>
      {/* 
       <Link
              className="btn btn-outline-primary btn-sm mx-1 ("
              to={`/sortie/${value}`}
            >
              Détails
            </Link>
            
            */}
    </div>
  );
}
