import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"

const H1 = styled.h1`
    text-align: center;
    font-size: 3em;
`

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

const serializers = {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
                <code>{ props.node.code }</code>
            </pre>
        )
    }
}

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            sanityHome {
                heading
                _rawBody
            }
        }
    `)

    console.log(data)

    return (
        <Layout>
            <H1>{data.sanityHome.heading}</H1>
            <BlockContainer>
                <BlockContent blocks={data.sanityHome._rawBody} serializers={serializers} />
            </BlockContainer>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
