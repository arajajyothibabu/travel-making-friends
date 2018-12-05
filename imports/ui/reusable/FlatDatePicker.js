import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import {BasePicker, Calendar} from 'material-ui-pickers';
import moment from "moment";
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';

export default class StaticPickers extends PureComponent {

    render() {
        const { date = moment(), handelUpdate } = this.props;
        return (
            <BasePicker value={date} onChange={handelUpdate}>
                {({
                      date,
                      handleAccept,
                      handleChange,
                      handleClear,
                      handleDismiss,
                      handleSetTodayDate,
                      handleTextFieldChange,
                      pick12hOr24hFormat,
                  }) => (
                    <div style={{margin: 8}}>
                        <div className="picker">
                            <Paper style={{ overflow: 'hidden' }}>
                                <Calendar
                                    date={date}
                                    onChange={handleChange}
                                    rightArrowIcon={<ArrowRight />}
                                    leftArrowIcon={<ArrowLeft/>}
                                />
                            </Paper>
                        </div>
                    </div>
                )}
            </BasePicker>
        );
    }
}