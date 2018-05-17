import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import web3 from './web3'
import lottery from './lottery'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { manager: '' }
    }
    async componentDidMount() {
        // whenever we are working with the metamask provider, we do not need to provide a
        // 'from' property to the call() method, because it will by default use the
        // provider that is provided by metamask
        console.log("about to call manager")
        const manager = await lottery.methods.manager().call()
        console.log("we are here", manager)

        this.setState({ manager })
    }

    render() {

        return (
            <div>
                <h2>Lotter Contract</h2>
                <p>This contract is managed by { this.state.manager }</p>
            </div>
        )
    }
}

export default App
