import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../components/Layout'

class CampaignIndex extends Component {
    // static puts the property on the class, rather than the instance of the class
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call()

        return { campaigns }
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true // gives card width: 100%
            }
        })

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3>Open Campaigns</h3>
                <Button
                    floated="right"
                    content="Create Campaign"
                    icon="add circle"
                    primary
                />
                jerer:{ this.renderCampaigns() }
            </Layout>
        )
    }
}

export default CampaignIndex
