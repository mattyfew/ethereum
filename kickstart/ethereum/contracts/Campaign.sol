pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender); // creates new campaign that gets deployed to the BC
        deployedCampaigns.push(newCampaign);
    }

    // view means no data inside the contract is modified
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount; // we don't care about people who haven't been approved
        mapping(address => bool) approvals; // people who have provided approvals for a request
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        // structs do not need to initalize a stored reference, like a struct or mapping
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        // index is index of request we are trying to approve
        Request storage request = requests[index];

        require(approvers[msg.sender]); // make sure sender is in the list of approvers
        require(!request.approvals[msg.sender]); // if the sender is NOT in the list of approvals, end the function. prevents double votes

        request.approvals[msg.sender] = true; // sets that sender has approved the request
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }
}
