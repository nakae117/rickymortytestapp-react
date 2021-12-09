import React from 'react'
import PropTypes from 'prop-types';
import '../css/global.css'

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
}

export default MyApp