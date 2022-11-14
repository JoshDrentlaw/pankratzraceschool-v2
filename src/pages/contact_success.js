import * as React from "react"
import Layout, { BlockContainer } from "../components/layout"
import styled from "styled-components"

const H1 = styled.h1`
    font-family: 'RacingSansOne';
    text-align: center;
    font-size: 50px;
`

const H2 = styled.h2`
    font-family: 'RacingSansOne';
    text-align: center;
    font-size: 30px;
`

const ContactSuccess = () => {
    return (
        <Layout>
            <BlockContainer>
                <H1>Thank you for contacting us!</H1>
                <H2>We will be in touch soon.</H2>
            </BlockContainer>
        </Layout>
    )
}

export default ContactSuccess

export const Head = () => <title>Contact Success</title>