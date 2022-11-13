import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Block from "../components/block"
import { Link } from "../components/layout"

const BlockContainer = styled.section`
    text-align: left;
    width: auto;
    margin-inline: auto;
    padding-inline: 15px;

    h2 {
        font-family: 'RacingSansOne';
        font-size: 3em;
    }

    p > strong {
        font-size: x-large;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    @media (min-width: 768px) {
        width: 50%;
    }
`

const VideoContainer = styled.div`
    width: calc(100% - 1rem);
    height: 0;
    padding-top: 56.25%;
    margin: 0.5rem auto 0.5rem;
    position: relative;
    iframe {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
    }
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            sanityHome {
                heading
                _rawBody
                video
                videoTitle
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <BlockContainer>
                <VideoContainer>
                    <iframe src={data.sanityHome.video} frameBorder="0" allow="autoplay; fullscreen" title={data.sanityHome.videoTitle} allowFullScreen></iframe>
                </VideoContainer>
            </BlockContainer>
            <BlockContainer>
                <h2>Learn from a legend</h2>
                <p>Wally Pankratz has been racing for over 50 years with over 100 Main Event wins. He was born into a racing family and has proudly continued his father's legacy.</p>
                <p>Wally is an expert in not just racing but also vehicle maintenance and enhancement.</p>
                <Link href="/about">Learn more about Wally Pankratz</Link>
            </BlockContainer>
            <BlockContainer>
                <h2>Available Courses</h2>
                <h3>Ford Focus Midget Course</h3>
                <p>The Ford Focus Midget Course is designed for drivers who want to learn the skills essential for Short Track Oval racing. Students will work "One on One" with Wally to understand and master corner entrance, car rotation, throttle pick up points, unwinding of the car, smooth inputs of throttle, brakes and steering.</p>
                <h3>Other Courses</h3>
                <ul>
                    <li>Corporate Promotions</li>
                    <li>Night Time Sessions</li>
                    <li>Set-up Classes (Bring your own car and improve your set-up)</li>
                </ul>
                {/* <Block blocks={data.sanityHome._rawBody} /> */}
            </BlockContainer>
            <BlockContainer>
                <h2>Next School Day</h2>
                <p>School days come and go during COVID. Please call or text to find the next best date to run!</p>
            </BlockContainer>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
