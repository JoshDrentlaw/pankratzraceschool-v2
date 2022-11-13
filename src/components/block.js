import * as React from "react"
import BlockContent from "@sanity/block-content-to-react"

const serializers = {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
                <code>{ props.node.code }</code>
            </pre>
        )
    }
}

const Block = ({ blocks }) => {

    return (
        <BlockContent blocks={blocks} serializers={serializers} />
    )
}

export default Block