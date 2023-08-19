import React from 'react'
import { Footer } from './footer/Footer.js'

import Header from './Header'

const GlobalLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ marginTop: '100px' }} >
                {children}
            </main>
            <Footer />
        </>

    )
}

export default GlobalLayout