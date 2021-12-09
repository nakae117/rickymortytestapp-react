import React from 'react'
import PropTypes from 'prop-types';
import Head from 'next/head'

const Main = ({ children }) => {
    return (
        <>
            <main>
                <Head>
                    <title>Rick & Morty React App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                
                {children}
            </main>
        </>
    )
}

Main.propTypes = {
    children: PropTypes.array,
}

export default Main