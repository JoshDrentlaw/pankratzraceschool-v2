import React from "react"
import styled from "styled-components"
import signature from '../images/signature.png'

const Body = styled.div`
    @font-face {
        font-family: 'Inter var';
        font-weight: 100 900;
        font-display: swap;
        font-style: normal;
        font-named-instance: 'Regular';
        src: url(/fonts/Inter-roman.var.woff2) format('woff2');
    }

    * {
        font-family: 'Inter var';
    }
`

const Link = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    padding-inline: 15px;

    &:hover {
        color: #333;
        background-color: white;
    }
`

export default function Layout({ children }) {
    return (
        <Body>
            <nav style={{backgroundColor: '#333', marginInline: '-8px', marginTop: '-8px', display: 'flex', justifyContent: 'space-between'}}>
                <img src={signature} alt="Wally Pankratz signature" style={{ marginInline: '10px' }} />
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
            <main>
                { children }
            </main>
        </Body>
    )
}