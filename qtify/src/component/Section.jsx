import React, { useState, useEffect } from "react";
import axios from "axios";
import CardHolder from "./Card";
import styles from "./Section.module.css";
import Carousel from "./Carousel";

const Section = ({ title, endpoint }) => {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

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



  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggleCollapse}>
          {collapsed ? "Show All" : "Collapse"}
        </h4>
      </div>
      {collapsed ? (
        <Carousel
          data={data}
          renderComponent={(album) => (
            <CardHolder key={album.id} album={album} />
          )}
        />
      ) : (
        <div className={styles.grid}>
          {data.map((album) => (
            <CardHolder key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
