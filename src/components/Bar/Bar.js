import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));
function Bar(props){
    const classes = useStyles();
    function nav(param){
      props.history.push('/'+param)
    }
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    M&M
                    </Typography>
                    <Button color="inherit" onClick={() => nav('')}>Inicio</Button>
                    <Button color="inherit" onClick={() => nav('contact')}>Contáctanos</Button>
                    <Button color="inherit" onClick={() => nav('works')}>Trabajos</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Bar);