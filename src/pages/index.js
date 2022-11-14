import * as React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import Layout, { BlockContainer, MediaContainer, VideoContainer, ImgContainer, Link } from "../components/layout"
// import styled from "styled-components"
import WallyProfile from "../images/WallyProfile.jpg"

const IndexPage = () => {
    /* const data = useStaticQuery(graphql`
        {
            sanityHome {
                heading
                _rawBody
                video
                videoTitle
            }
        }
    `)

    console.log(data) */

    return (
        <Layout>
            <BlockContainer>
                <VideoContainer>
                    <iframe src="https://player.vimeo.com/video/353074662" frameBorder="0" allow="autoplay; fullscreen" title="Wally Pankratz Racing School" allowFullScreen></iframe>
                </VideoContainer>
            </BlockContainer>
            <BlockContainer>
                <h2>Learn from a legend</h2>
                <MediaContainer>
                    <ImgContainer>
                        <img src={WallyProfile} alt="Wally Pankratz timing a driving on the training course" />
                    </ImgContainer>
                    <aside>
                        <p>Wally Pankratz has been racing for over 50 years with over 100 Main Event wins. He was born into a racing family and has proudly continued his father's legacy.</p>
                        <p>Wally is an expert in not just racing but also vehicle maintenance and enhancement.</p>
                        <Link href="/about">Learn more about Wally Pankratz</Link>
                    </aside>
                </MediaContainer>
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
            </BlockContainer>
            <BlockContainer>
                <h2>Next School Day</h2>
                <p>School days come and go during COVID. Please call or text to find the next best date to run!</p>
                <p>A 50% down-payment is required for enrollment.</p>
            </BlockContainer>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
