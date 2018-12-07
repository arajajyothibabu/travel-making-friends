import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ResponsiveDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class Dialog extends React.Component {

    render() {
        const {
            fullScreen = false, open, handleClose,
            title, children, withActions = false,
            handleOk, handleCancel, okText = "Agree", cancelText = "Cancel",
            ...others
        } = this.props;

        return (
            <ResponsiveDialog
                {...others}
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                { title && <DialogTitle>{title}</DialogTitle> }
                <DialogContent>
                    {children}
                </DialogContent>
                { withActions &&
                    <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                            {cancelText}
                        </Button>
                        <Button onClick={handleOk} color="primary" autoFocus>
                            {okText}
                        </Button>
                    </DialogActions>
                }
            </ResponsiveDialog>
        );
    }
}

Dialog.propTypes = {
    fullScreen: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.any
};

export default withMobileDialog()(Dialog);