import React, {useState} from "react"
import styled from "styled-components"
import signature from '../images/signature.png'
import icon from '../images/icon.png'

export const Sizes = {
    sm: '576',
    md: '768',
    lg: '992',
    xl: '1200',
    xxl: '1400'
}

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

    * {
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }
`

const Nav = styled.nav`
    background-color: #333;
    margin-inline: -8px;
    margin-top: -8px;
    display: flex;
    position: sticky;
    justify-content: space-between;
    top: 0;
    height: 60px;
    z-index: 10000;
`

const NavLinkContainer = styled.div`
    display: ${props => props.display || 'flex'};
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    position: absolute;
    top: 59px;
    background-color: #333;
    width: 100%;
    padding-block: 10px;
    text-align: left;
    transition: all 400ms ease-in-out;

    @media (min-width: ${Sizes.lg}px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        top: initial;
        width: auto;
    }
`

const Hamburger = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    font-style: normal;
    width: 50px;

    @media (min-width: ${Sizes.lg}px) {
        display: none;
    }
`

const NavLink = styled.a`
    font-family: 'RacingSansOne';
    color: white;
    text-decoration: none;
    font-size: 1.5em;
    display: flex;
    justify-content: start;
    align-items: center;
    min-width: 100px;
    padding-inline: 15px;
    width: 100%;
    height: 60px;

    &:hover {
        color: #333;
        background-color: white;
    }

    @media (min-width: ${Sizes.lg}px) {
        width: auto;
        justify-content: center;
    }
`

export const Link = styled.a`
    display: inline-block;
    font-family: 'RacingSansOne';
    color: #333;
    text-decoration: none;
    border: 1px solid #333;
    padding: 5px 10px;
    border-radius: 3px;
    line-height: 2;

    &:hover {
        color: white;
        background-color: #333;
    }
`

export const BlockContainer = styled.section`
    width: auto;
    margin-inline: auto;
    padding-inline: 15px;

    h2 {
        font-family: 'RacingSansOne';
        font-size: 3em;

        span {
            font-family: 'RacingSansOne';
            text-decoration: underline;
        }
    }

    p > strong {
        font-size: x-large;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    blockquote {
        margin-inline: 0;
        margin-bottom: 2em;
        border-left: 8px solid #333;
        padding-left: 15px;
    }

    @media (min-width: ${Sizes.lg}px) {
        width: 50%;

        blockquote {
            padding-left: 15px;
            margin-inline: 40px;
        }
    }
`

export const MediaContainer = styled.div`
    display: flex;
    flex-direction: column;

    aside {
        margin-top: 15px;

        p {
            margin-top: 0;
        }
    }

    @media (min-width: ${Sizes.lg}px) {
        flex-direction: row;

        aside {
            margin-left: 15px;
        }
    }
`

export const VideoContainer = styled.div`
    width: calc(100% - 1rem);
    height: 0;
    padding-top: 56.25%;
    margin: 0.5rem auto 0.5rem;
    position: relative;
    iframe, video {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
    }
`

export const ImgContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
    }

    @media (min-width: ${Sizes.lg}px) {
        width: ${props => props.width || '248'}px;
    }
`

const Footer = styled.footer`
    height: 50px;
    border-top: 1px solid #333;
    margin-top: 40px;

    div {
        display: block;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-inline: auto;

        @media (min-width: ${Sizes.lg}px) {
            width: 50%;
        }
    }

    a {
        text-decoration: none;
        color: #333;
    }
`

export default function Layout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        <Body>
            <Nav>
                <img src={signature} alt="Wally Pankratz signature" style={{ marginInline: '10px' }} />
                <Hamburger onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'X' : '☰'}</Hamburger>
                <NavLinkContainer display={menuOpen ? 'flex' : 'none'}>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                </NavLinkContainer>
            </Nav>
            <main>
                { children }
            </main>
            <Footer>
                <div>
                    <img src={icon} alt="Initial style logo" width="25px" />
                    <span>
                        <strong>Made by:</strong> <a href="https://www.joshdrentlaw.com">www.joshdrentlaw.com</a>
                    </span>
                </div>
            </Footer>
        </Body>
    )
}