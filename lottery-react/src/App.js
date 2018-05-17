import React, { Component } from 'react'
import web3 from './web3'
import lottery from './lottery'

class App extends Component {
    state = {
        manager: '',
        players: [],
        balance: '',
        value: '',
        message: ''
    }

    async componentDidMount() {
        // whenever we are working with the metamask provider, we do not need to provide a
        // 'from' property to the call() method, because it will by default use the
        // provider that is provided by metamask
        const manager = await lottery.methods.manager().call()
        const players = await lottery.methods.getPlayers().call()
        const balance = await web3.eth.getBalance(lottery.options.address)

        this.setState({ manager, players, balance })
    }

    onSubmit = async (event) => {
        event.preventDefault()

        const accounts = await web3.eth.getAccounts()

        this.setState({ message: 'Waiting on transaction success...' })

        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.value, 'ether')
        })

        this.setState({ message: 'You have been entered!' })
    }

    onClick = async () => {
        const accounts = await web3.eth.getAccounts()

        this.setState({ message: 'Waiting on transaction success...' })

        await lottery.methods.pickWinner().send({
            from: accounts[0]
        })

        // extra credit: go back to the Lottery code and add a method to show who the winner is

        this.setState({ message: 'A winner has been picked!' })
    }

    render() {

        return (
            <div>
                <h2>Lotter Contract</h2>
                <p>
                    This contract is managed by { this.state.manager }.
                    There are currently { this.state.players.length } people entered
                    competing to win { web3.utils.fromWei(this.state.balance, 'ether') } ether!
                </p>

                <hr/>

                <form onSubmit={ this.onSubmit }>
                    <h4>Want to try your luck?</h4>
                    <div>
                        <label>Amout of ether to enter</label>
                        <input
                            value={ this.state.value }
                            onChange={event => this.setState({ value: event.target.value })}
                        />
                    </div>
                    <button>Enter</button>
                </form>

                <hr/>

                <h4>Ready to pick a winner?</h4>
                <button onClick={ this.onClick }>Pick a winner!</button>

                <hr/>

                <h1>{ this.state.message }</h1>
            </div>
        )
    }
}

export default App
