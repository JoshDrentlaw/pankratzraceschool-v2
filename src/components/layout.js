import React from "react"
import signature from '../images/signature.png'

const link = {
    color: 'white',
    textDecoration: 'none'
}

export default function Layout({ children }) {
    return (
        <>
            <nav style={{backgroundColor: '#333', marginInline: '-8px', marginTop: '-8px', display: 'flex', justifyContent: 'space-between'}}>
                <img src={signature} alt="Wally Pankratz signature" style={{ marginInline: '10px' }} />
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <a href="/" style={link}>Home</a>
                    <a href="/about" style={link}>About</a>
                </div>
            </nav>
            <main>
                { children }
            </main>
        </>
    )
}