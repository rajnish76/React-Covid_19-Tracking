import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Carding = ({ title, ending, lastUpdate, des }) => {
  let bottom;

  bottom =
    title === "Infected"
      ? styles.infected
      : title === "Recovered"
      ? styles.recovered
      : styles.deaths;

  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, bottom)}
    >
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={ending} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{des}</Typography>
      </CardContent>
    </Grid>
  );
};

export default Carding;
