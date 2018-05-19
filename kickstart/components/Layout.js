import React from 'react'
import { Container } from 'semantic-ui-react'
import Head from 'next/head' // lets us load any tags from anywhere and next will place them in the head tag
import Header from './Header'

export default (props) => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
            </Head>

            <Header />
            { props.children }
        </Container>
    )
}
