const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')

// removeSync easily removes contents of a folder
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf8')

// contracts is what we get after we run solidity compiler
const output = solc.compile(source, 1).contracts


// ensureDirSync checks if a dir exists, if it doesn't, it will create it
fs.ensureDirSync(buildPath)

console.log(output)
for(let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    )
}
