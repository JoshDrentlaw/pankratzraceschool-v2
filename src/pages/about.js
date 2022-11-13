import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Block from "../components/block"

const BlockContainer = styled.section`
    text-align: center;
    width: 50%;
    margin-inline: auto;

    p > strong {
        font-size: x-large;
    }

    ul {
        list-style: none;
        padding: 0;
    }
`

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
}

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        {
            sanityAbout {
                _rawBody
            }
        }
    `)

    return (
        <Layout>
            <BlockContainer>
                <p>Wally Pankratz started racing in 1970. Over his long career he won four Championships with 114 Main Event wins and many awards including induction into the Belleville National Midget Hall of Fame and the Legends of Ascot. In addition, Wally collaborated with Steve Smith Autosports to develop the book <a href="https://www.amazon.com/dp/B00LFSE5RA/ref=cm_sw_em_r_mt_dp_U_WJmrEbN2WZHWR" target="_blank">"Midget Chassis Technology"</a> for Midget racers. This Chassis set up book is dedicated to introducing the racer to Midget racing while teaching the finer points of the set-up and racing in this class.</p>
                {/* <Block blocks={data.sanityAbout._rawBody} /> */}
            </BlockContainer>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Page</title>
