import React, { memo, useCallback } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";
import WORLD_MAP from "./mapDatas";
import "../../styles/map.css";
import Tooltip from "@mui/material/Tooltip";
import EvenementTooltip from "./EvenementTooltip";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";

const locationSVG = (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>location-outline</title>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="location"
        fill="#000000"
        transform="translate(106.666667, 42.666667)"
      >
        <path
          d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,174.270044 292.571852,197.766489 281.750846,218.441128 L149.333333,448 L19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,42.6666667 C90.42296,42.6666667 42.6666667,90.42296 42.6666667,149.333333 C42.6666667,166.273109 46.5745408,182.526914 53.969702,197.200195 L57.5535689,203.746216 L149.333333,362.666667 L241.761134,202.626841 C251.054097,186.579648 256,168.390581 256,149.333333 C256,90.42296 208.243707,42.6666667 149.333333,42.6666667 Z M149.333333,85.3333333 C184.679557,85.3333333 213.333333,113.987109 213.333333,149.333333 C213.333333,184.679557 184.679557,213.333333 149.333333,213.333333 C113.987109,213.333333 85.3333333,184.679557 85.3333333,149.333333 C85.3333333,113.987109 113.987109,85.3333333 149.333333,85.3333333 Z M149.333333,128 C137.551259,128 128,137.551259 128,149.333333 C128,161.115408 137.551259,170.666667 149.333333,170.666667 C161.115408,170.666667 170.666667,161.115408 170.666667,149.333333 C170.666667,137.551259 161.115408,128 149.333333,128 Z"
          id="Combined-Shape"
        ></path>
      </g>
    </g>
  </svg>
);

export default function MapEvents({ evenements }: { evenements: any }) {
  const navigate = useNavigate();
  return (
    <div className="map_events">
      <ComposableMap
        width={500}
        height={500}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-2.5, -47.0, 0],
          scale: 2400,
        }}
      >
        <Graticule stroke="#EAEAEC" />
        <ZoomableGroup>
          <Geographies geography={WORLD_MAP}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#cac9cc"
                  stroke="#EAEAEC"
                  style={{
                    default: {
                      fill: "#6399bb",
                      stroke: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#8EB5CD",
                      stroke: "#D6D6DA",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#dde0f0",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {evenements.map((evenement: any, index: number) => {
            return (
              <Tooltip
                leaveDelay={400}
                title={<EvenementTooltip evenement={evenement} />}
                arrow
                key={`tooltip-${evenement._id}`}
              >
                <Marker
                  coordinates={
                    evenement.coordonnées ? evenement.coordonnées : [0, 0]
                  }
                  onClick={() => navigate(`/sortie/${evenement._id}`)}
                >
                  <g
                    fill="#3867a8"
                    stroke="#3867a8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="m 8 0 c -3.3125 0 -6 2.6875 -6 6 c 0.007812 0.710938 0.136719 1.414062 0.386719 2.078125 l -0.015625 -0.003906 c 0.636718 1.988281 3.78125 5.082031 5.625 6.929687 h 0.003906 v -0.003906 c 1.507812 -1.507812 3.878906 -3.925781 5.046875 -5.753906 c 0.261719 -0.414063 0.46875 -0.808594 0.585937 -1.171875 l -0.019531 0.003906 c 0.25 -0.664063 0.382813 -1.367187 0.386719 -2.078125 c 0 -3.3125 -2.683594 -6 -6 -6 z m 0 3.691406 c 1.273438 0 2.308594 1.035156 2.308594 2.308594 s -1.035156 2.308594 -2.308594 2.308594 c -1.273438 -0.003906 -2.304688 -1.035156 -2.304688 -2.308594 c -0.003906 -1.273438 1.03125 -2.304688 2.304688 -2.308594 z m 0 0"
                      fill="#3867a8"
                    />
                  </g>
                </Marker>
              </Tooltip>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
