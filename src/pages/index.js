import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
}

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            sanityHome {
                heading
                body {
                    _rawChildren
                }
            }
        }
    `)

    return (
        <Layout>
            <h1 style={headingStyles}>{ data.sanityHome.heading }</h1>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
