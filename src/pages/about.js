import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
}

const AboutPage = () => {

    return (
        <Layout>
            <h1 style={headingStyles}>About</h1>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Page</title>
