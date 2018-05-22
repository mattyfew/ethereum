import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import { Card } from 'semantic-ui-react'
import web3 from '../../ethereum/web3'

class CampaignShow extends Component {
    static async getInitialProps(props) {
        // props.query.addressthis is the prop address from the URL

        const campaign = Campaign(props.query.address)
        const summary = await campaign.methods.getSummary().call()

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        }
    }

    renderCards() {
        const { minimumContribution, balance, requestsCount, approversCount, manager } = this.props
        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description: 'The manager created this campaign and can create requests',
                style: { overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to contribute'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }
        ]

        return <Card.Group items={ items } />
    }

    render() {
        return (
            <Layout>
                { this.renderCards() }
            </Layout>
        )
    }
}

export default CampaignShow
