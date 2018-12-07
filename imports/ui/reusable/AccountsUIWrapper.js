import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
    componentDidMount() {
        if(this.ref){
            // Use Meteor Blaze to render login buttons
            this.view = Blaze.render(Template.loginButtons,
                ReactDOM.findDOMNode(this.ref));
        }
    }
    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    }
    render() {
        // Just render a placeholder container that will be filled in
        return <span ref={ref => this.ref = ref} />;
    }
}