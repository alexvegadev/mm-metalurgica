import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../assets/banner.jpg';
import Hero from '../Hero/Hero';

const useStyles = makeStyles((theme) => ({
  
}));

export default function Logo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Hero banner={banner} />
        </div>
    )
}
