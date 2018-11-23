import React, { PureComponent } from 'react';
import { InlineDateTimePicker } from 'material-ui-pickers';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import DateRange from '@material-ui/icons/DateRange';
import AccessTime from '@material-ui/icons/AccessTime';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";

export default class DateTimePicker extends PureComponent {

    handleDateChange = (date) => {
        const { handleChange = () => null } = this.props;
        handleChange(date);
    };

    render() {
        const { label = "Date and Time", dateTime } = this.props;

        return (
            <InlineDateTimePicker
                fullWidth
                value={dateTime}
                disablePast
                onChange={this.handleDateChange}
                label={label}
                rightArrowIcon={<ArrowRight />}
                leftArrowIcon={<ArrowLeft/>}
                dateRangeIcon={<DateRange />}
                timeIcon={<AccessTime />}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton><DateRange /></IconButton>
                        </InputAdornment>
                    ),
                }}
                margin="normal"
            />
        );
    }
}