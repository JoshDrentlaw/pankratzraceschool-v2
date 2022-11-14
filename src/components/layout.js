import React from "react"
import styled from "styled-components"
import signature from '../images/signature.png'

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