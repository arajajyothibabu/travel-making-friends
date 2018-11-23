import React from 'react';
import PropTypes from 'prop-types';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import Autocomplete from "../AutoComplete";

export default class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = ({label, value}) => {
        geocodeByAddress(value)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                const { handleChange = () => null } = this.props;
                handleChange({
                    name: value,
                    position: latLng
                });
            })
            .catch(error => {
                console.error('Error', error)
            });
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <Autocomplete
                            {...getInputProps()}
                            {...this.props}
                            placeholder="Search Places..."
                            handleChange={this.handleSelect}
                            options={suggestions.map(o => ({label: o.description, value: o.description}))}
                        />
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

Location.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string
};