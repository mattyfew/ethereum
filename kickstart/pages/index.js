import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../components/Layout'
import { Link } from '../routes';

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
                description: (
                    <Link to={ `/campaigns/${address}` }>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true // gives card width: 100%
            }
        })

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3>Open Campaigns</h3>

                <Link to="/campaigns/new">
                    <a>
                        <Button
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </a>
                </Link>

            Campaigns:{ this.renderCampaigns() }
            </Layout>
        )
    }
}

export default CampaignIndex
