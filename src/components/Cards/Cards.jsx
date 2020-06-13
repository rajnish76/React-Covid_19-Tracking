import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./Cards.module.css";
import Carding from "./Carding";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Carding
          title="Infected"
          ending={confirmed.value}
          lastUpdate={lastUpdate}
          des="Number of active cases of COVID-19"
        />
        <Carding
          title="Recovered"
          ending={recovered.value}
          lastUpdate={lastUpdate}
          des="Number of recoveries from COVID-19"
        />
        <Carding
          title="Deaths"
          ending={deaths.value}
          lastUpdate={lastUpdate}
          des="Number of death caused of COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
