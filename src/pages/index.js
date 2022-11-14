import * as React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import Layout, { BlockContainer, MediaContainer, VideoContainer, ImgContainer, Link, Sizes } from "../components/layout"
import styled from "styled-components"
import WallyProfile from "../images/WallyProfile.jpg"

const Form = styled.form`
    border: 2px solid #333;
    border-radius: 4px;
    padding: 15px;
    width: 100%;

    .form-group {
        label {
            font-family: 'RacingSansOne';
            font-size: large;
            display: block;
            margin-bottom: 5px;
        }

        input {
            border: none;
            border-bottom: 1px solid #333;
            width: 100%;

            &:focus {
                outline: none;
                border-bottom-width: 2px;
                margin-bottom: -1px;
            }
        }

        textarea {
            border: 1px solid #333;
            border-radius: 3px;
            padding: 4px;
            width: 100%;
            resize: vertical;

            &:focus {
                outline: none;
                padding: 3px;
                border-width: 2px;
                margin-bottom: -1px;
            }
        }
    }

    .form-group + .form-group {
        margin-top: 15px;
    }

    button[type="submit"] {
        display: block;
        font-family: 'RacingSansOne';
        font-size: large;
        color: #333;
        background-color: white;
        text-decoration: none;
        border: 1px solid #333;
        padding-block: 5px;
        margin-top: 10px;
        border-radius: 3px;
        line-height: 2;
        width: 100%;
        cursor: pointer;

        &:hover {
            color: white;
            background-color: #333;
        }
    }

    @media (min-width: ${Sizes.lg}px) {
        width: 50%;
    }
`

const IndexPage = () => {
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
                <h3>Phone: (714) 749-4817</h3>
                <p>Please call or text to find the next best date to run!</p>
                <p>A 50% down-payment is required for enrollment.</p>
                <p style={{marginTop: '35px'}}>You can also get in touch with us by filling out our form and we will get back to you as soon as possible.</p>
                <Form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/contact_success">
                    <div style={{display:'none'}}>
                        <input name="bot-field" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="full_name">Full Name</label>
                        <input type="text" id="full_name" name="full_name" placeholder="Please enter your full name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Please enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments/Questions</label>
                        <textarea id="comments" name="comments" placeholder="Leave your comments or questions here" rows="4" required />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </BlockContainer>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
