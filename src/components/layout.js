import React from "react"
import styled from "styled-components"
import signature from '../images/signature.png'

const Body = styled.div`
    @font-face {
        font-family: 'RacingSansOne';
        font-weight: 100 900;
        font-display: swap;
        font-style: normal;
        font-named-instance: 'Regular';
        src: url(/fonts/RacingSansOne-Regular.ttf) format('truetype');
    }
    @font-face {
        font-family: 'Inter var';
        font-weight: 100 900;
        font-display: swap;
        font-style: normal;
        font-named-instance: 'Regular';
        src: url(/fonts/Inter-roman.var.woff2) format('woff2');
    }
`

const NavLink = styled.a`
    font-family: 'RacingSansOne';
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

export const Link = styled.a`
    font-family: 'RacingSansOne';
    color: #333;
    text-decoration: none;
    border: 1px solid #333;
    padding: 5px 10px;
    border-radius: 3px;

    &:hover {
        color: white;
        background-color: #333;
    }
`

export default function Layout({ children }) {
    return (
        <Body>
            <nav style={{backgroundColor: '#333', marginInline: '-8px', marginTop: '-8px', display: 'flex', justifyContent: 'space-between'}}>
                <img src={signature} alt="Wally Pankratz signature" style={{ marginInline: '10px' }} />
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                </div>
            </nav>
            <main>
                { children }
            </main>
        </Body>
    )
}