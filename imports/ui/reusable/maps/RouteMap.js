import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
    paper: {
        //padding: 8
    },
    map: {
        width: '100%',
        height: 360
    }
});

const TRAVEL_MODE = "DRIVING";

class RouteMap extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount(){

        const { start, end } = this.props;
        
        const initMap = () => {
            const directionsRenderer = new google.maps.DirectionsRenderer;
            const directionsService = new google.maps.DirectionsService;
            const map = new google.maps.Map(this.ref, {
                zoom: 14,
                center: start.pos
            });
            directionsRenderer.setMap(map);
            calculateAndDisplayRoute(directionsService, directionsRenderer);
        };

        function calculateAndDisplayRoute(directionsService, directionsRenderer) {
            directionsService.route({
                origin: start.pos,
                destination: end.pos,
                travelMode: google.maps.TravelMode[TRAVEL_MODE]
            }, function(response, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    console.warn('Directions request failed due to ' + status);
                }
            });
        }
        
        initMap();
        
    }

    render(){
        const { classes, trip } = this.props;
        return(
            <Paper className={classes.paper}>
                <div className={classes.map} ref={ref => this.ref = ref} />
            </Paper>
        )
    }

}

export default withStyles(styles, { withTheme: true })(RouteMap);