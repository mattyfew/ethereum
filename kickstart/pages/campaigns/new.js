import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        loading: false
    }

    onSubmit = async (e) => {
        e.preventDefault()

        this.setState({ loading: true, errorMessage: '' })

        try {
            const accounts = await web3.eth.getAccounts()
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                })
        } catch (e) {
            this.setState({ errorMessage: e.message })
        }

        this.setState({ loading: false })

    }

    render() {
        return (
            <Layout>
                <h1>New Campaign!</h1>

                <Form onSubmit={ this.onSubmit } error={ !!this.state.errorMessage }>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={ this.state.minimumContribution }
                            onChange={e => this.setState({ minimumContribution: e.target.value })}
                        />
                    </Form.Field>

                    <Message error header="Oops!" content={ this.state.errorMessage } />
                    <Button primary loading={ this.state.loading }>Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew
