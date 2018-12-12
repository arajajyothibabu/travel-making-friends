export default theme => ({
    '@global': {
        html: {
            WebkitFontSmoothing: 'antialiased', // Antialiasing.
            MozOsxFontSmoothing: 'grayscale', // Antialiasing.
            boxSizing: 'border-box',
            '@media print': {

            }
        },
        'a': {
            color: 'inherit',
            textDecoration: 'none'
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit',
        },
    },
});