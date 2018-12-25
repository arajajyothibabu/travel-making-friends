const scrollBarCSS = theme => ({
    "::-webkit-scrollbar": {
        height: 2,
        width: 2,
        background: theme.palette.primary.paper
    },
    "body::-webkit-scrollbar": {
        height: theme.spacing.unit,
        width: theme.spacing.unit,
        background: theme.palette.primary.paper
    },
    "*:not([role='tablist']):hover::-webkit-scrollbar": {
        height: theme.spacing.unit,
        width: theme.spacing.unit
    },
    "::-webkit-scrollbar-track": {
        '-webkit-box-shadow': `inset 0 0 ${theme.spacing.unit}px ${theme.palette.primary.main}`
    },
    "::-webkit-scrollbar-thumb": {
        background: theme.palette.primary.main,
        '-webkit-border-radius': "1ex",
        '-webkit-box-shadow': "0px 1px 2px rgba(0, 0, 0, 0.3)",
        borderRadius: "0 !important"
    },
    "::-webkit-scrollbar-corner": {
        background: theme.palette.background.default
    }
});

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
        ...scrollBarCSS(theme),
    },
});