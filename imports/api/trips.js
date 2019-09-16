import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import {METEOR_METHODS} from "../constants";

export const Trips = new Mongo.Collection('tasks');

const { trips } = METEOR_METHODS;

Meteor.methods({
    [trips.insert](trip) {
        check(trip, Object);

        // Make sure the user is logged in before inserting a trip
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        const inserted = Trips.insert({
            ...trip,
            createdAt: new Date(),
            user: Meteor.users.findOne(this.userId).username,
        });
    },
    [trips.delete](tripId) {
        check(tripId, String);

        Trips.remove(tripId);
    },
    [trips.update](tripId, tripDetails) {
        check(tripId, String);
        check(tripDetails, Object);

        Trips.update(tripId, { $set: tripDetails });
    }
});