import React, { useState, useEffect } from "react";
import axios from "axios";
import CardHolder from "./Card";
import styles from "./Section.module.css";
import Carousel from "./Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Section = ({ title, endpoint, type }) => {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [genres, setGenres] = useState({ data: [] });
  const [currentGenre, setCurrentGenre] = useState("All");

  useEffect(() => {
    if (type === "songs") {
      axios
        .get("https://qtify-backend-labs.crio.do/genres")
        .then((response) => {
          // setGenres(["All", ...response.data.data]);
          // setGenres({ data: ["All", ...response.data.data] });
          setGenres({ data: [{ key: "All", label: "All" }, ...response.data.data] });
        })
        .catch((error) => {
          console.error("Error fetching genres: ", error);
        });
    }
    fetchData(currentGenre);
  }, [type]);

  const fetchData = (genre) => {
    const genreParam = genre !== "All" ? `?genre=${genre}` : "";
    axios
      .get(`${endpoint}${genreParam}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [endpoint]);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleGenreChange = (event, newGenre) => {
    setCurrentGenre(newGenre);
    fetchData(newGenre);
  };

  return (
    <div className={styles.section}>
      {type === "album" ? (
        <div className={styles.sectionHeader}>
          <h3>{title}</h3>
          <h4 className={styles.toggleText} onClick={handleToggleCollapse}>
            {collapsed ? "Show All" : "Collapse"}
          </h4>
        </div>
      ) : (
        <div className={styles.sectionHeader}>
          <h3>{title}</h3>
        </div>
      )}
      {type === "songs" && (
        <Tabs
          style={{ paddingBottom: "28px" }}
          value={currentGenre}
          onChange={handleGenreChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="genre tabs"
        >
          {genres.data.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
              style={{ color: "white" }}
            />
          ))}
        </Tabs>
      )}
      {collapsed ? (
        <Carousel
          data={data}
          renderComponent={(album) => (
            <CardHolder key={album.id} album={album} type={type}/>
          )}
        />
      ) : (
        <div className={styles.grid}>
          {data.map((album) => (
            <CardHolder key={album.id} album={album} type={type}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
