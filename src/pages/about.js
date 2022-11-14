import * as React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import Layout, { BlockContainer, MediaContainer, ImgContainer, Link } from "../components/layout"
import indiana56Car from '../images/IndianaStateFairgrounds56Car.png'
import wallyHamilton from '../images/WallyHamiltonMidget.png'
// import styled from "styled-components"

const AboutPage = () => {
    /* const data = useStaticQuery(graphql`
        {
            sanityAbout {
                _rawBody
            }
        }
    `) */

    return (
        <Layout>
            <BlockContainer>
                <h2>Who is Wally Pankratz</h2>
                <blockquote cite="https://usacracing.com/news/item/11593-six-newest-inductees-welcomed-into-national-midget-auto-racing-hall-of-fame">
                    <p>Pankratz, one of today’s great ambassadors for our sport, has had a career that spans over five decades.  He was the 2000 USAC Western States Midget Driver and Entrant Champion and now joins his father Bob Pankratz in the Hall of Fame.</p>
                    <figcaption><cite><Link href="https://usacracing.com/news/item/11593-six-newest-inductees-welcomed-into-national-midget-auto-racing-hall-of-fame">Six newest inductees welcomed into National Midget Auto Racing Hall of Fame</Link></cite></figcaption>
                </blockquote>
                <MediaContainer>
                    <ImgContainer width="1080">
                        <img src={wallyHamilton} alt="Pankratz at the Indiana State Fairgrounds in 1990. - JOHN MAHONEY PHOTO" />
                    </ImgContainer>
                    <aside>Wally Pankratz started racing in 1970. Over his long career he won four Championships with 114 Main Event wins and many awards including induction into the Belleville National Midget Hall of Fame and the Legends of Ascot. In addition, Wally collaborated with Steve Smith Autosports to develop the book <a href="https://www.amazon.com/dp/B00LFSE5RA/ref=cm_sw_em_r_mt_dp_U_WJmrEbN2WZHWR" target="_blank">"Midget Chassis Technology"</a> for Midget racers. This Chassis set up book is dedicated to introducing the racer to Midget racing while teaching the finer points of the set-up and racing in this class.</aside>
                </MediaContainer>
            </BlockContainer>
            <BlockContainer>
                <h2>Wally in <span>Sprint Car & Midget.com</span></h2>
                <ImgContainer width="1080">
                    <img src={indiana56Car} alt="Pankratz at the Indiana State Fairgrounds in 1990. - JOHN MAHONEY PHOTO" />
                </ImgContainer>
                <aside>
                    <p>Please read this short excerpt from <a href="https://www.sprintcarandmidget.com">sprintcarandmidget.com</a> to get an idea where Wally's carrer started.</p>
                    <blockquote cite="https://www.sprintcarandmidget.com/premium/wally-pankratz/">
                        <p>Wally Pankratz has been making things happen for more than a half-century.</p>
                        <p>Throughout his formative years Pankratz still harbored a desire to race and after he earned a driver’s license, he regularly attended races at Ascot. Once he graduated from college, he began traveling with Don Hamilton to Cajon Speedway at Gillespie Field.</p>
                        <p>These trips allowed him to establish relationships with some of his father’s old running mates and he discovered they were willing to help him get started. One of those old acquaintances was Keith “Porky” Rachwitz.</p>
                        <p>Rachwitz owned a smidget powered by a Chevy II engine and he gave Wally his first chance to drive.</p>
                        <figcaption><cite><Link href="https://www.sprintcarandmidget.com/premium/wally-pankratz/">Pat Sullivan on Wally Pankratz - sprintcarandmidget.com</Link></cite></figcaption>
                    </blockquote>
                    <p>Please go to <a href="https://www.sprintcarandmidget.com/premium/wally-pankratz/">sprintcarandmidget.com</a> to read the full article.</p>
                </aside>
            </BlockContainer>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Page</title>
