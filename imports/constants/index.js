import React from "react";
import Motorcycle from '@material-ui/icons/Motorcycle';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import DirectionsBus from '@material-ui/icons/DirectionsBus';
import Commute from '@material-ui/icons/Commute';

export const VEHICLES = {
    TBD: 'TBD',
    Bike: 'Bike',
    Car: 'Car',
    Bus: 'Bus',
    //TODO: will add more
};


export const METEOR_METHODS = {
    trips: {
        insert: 'trips.insert',
        update: 'trips.update',
        find: 'trips.find',
        findAll: 'trips.findAll',
        delete: 'trips.delete'
    },
};

const { TBD, Bike, Car, Bus } = VEHICLES;

export const VEHICLES_SRC = [
    { vehicle: TBD, icon: <Commute/> },
    { vehicle: Bike, icon: <Motorcycle/> },
    { vehicle: Car, icon: <DirectionsCar/> },
    { vehicle: Bus, icon: <DirectionsBus/> }
];

export const VEHICLE_ICON_MAP = {
    [TBD]: <Commute/>,
    [Bike]: <Motorcycle/>,
    [Car]: <DirectionsCar/>,
    [Bus]: <DirectionsBus/>
};