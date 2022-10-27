import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import { ILeagues } from "../modeles"

interface BodyProps {
  leagues: {}
}

interface ILeagues {
  id: number
  title: string
  info: string
  leagueType: string
  roles: {
    id?: number
    title: string
    data: number
  }
}

// let out: topicInterface[] = Object.values(...);
// return out;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function SpacingGrid({ leagues }: BodyProps) {
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();
  const arrLeagues = Object.values(leagues) as [];
  let i: number = 0;

  return (
    <div className={classes.root}>
      <h3>Лиги</h3>
      {/* TODO: убрать дубли кода */}
      <Grid container justifyContent="center" className={classes.root} spacing={2}>

        {arrLeagues.map((value: ILeagues) => (
          <Grid item xs={6}>
            <Grid container alignItems="center" spacing={spacing}>
              <Grid key={value.id} item>
                <Paper className={classes.paper} />
              </Grid>
            </Grid>
          </Grid>
        ))}

      </Grid>
    </div>
  );
}
