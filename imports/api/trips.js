import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Trips = new Mongo.Collection('tasks');

Meteor.methods({
    'trips.insert'(text) {
        check(text, String);

        // Make sure the user is logged in before inserting a trip
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Trips.insert({
            text,
            createdAt: new Date(),
            owner: this.userId,
            username: Meteor.users.findOne(this.userId).username,
        });
    },
    'trips.remove'(tripId) {
        check(tripId, String);

        Trips.remove(tripId);
    },
    'trips.setChecked'(tripId, setChecked) {
        check(tripId, String);
        check(setChecked, Boolean);

        Trips.update(tripId, { $set: { checked: setChecked } });
    },
});