//SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

// import "./Provenance.sol";

contract Certificates {
    address public contractOwner;
    uint public peopleCount;
    
    struct Certificate {
        string certificateName;
        string description;
        bool active;
    }
    
    mapping (address => Certificate[]) public certificates;
    mapping (address => string[2][]) public addressToCertificate;
    
    constructor()  {
        contractOwner = msg.sender; // initializing owner to the account's address that deploys the contract
    }
    
    modifier onlyAdmin() {
        if (msg.sender != contractOwner) {
            revert();
        }
        _;
    }
    
    function addCertificate (
        address _sendToAccount, 
        string memory _certificateName, 
        string memory _description, 
        bool _active ) onlyAdmin public {
        
        peopleCount += 1;
        certificates[_sendToAccount].push(Certificate(_certificateName, _description, _active));
        addressToCertificate[_sendToAccount].push([_certificateName,_description]);
    }
    
    
    function getCertificate (address _sendToAccount) public view returns (Certificate[] memory) {
        return certificates[_sendToAccount];
    }
    
    function getCertificateToProducer (address _sendToAccount, uint _id) public view returns (string[2] memory) {
        return addressToCertificate[_sendToAccount][_id];
    }
    
    function setActive(address _sendToAccount, uint _id, bool _active ) onlyAdmin public {
        if (msg.sender != contractOwner) {
            revert();
        }
        Certificate storage cer;
        cer = certificates[_sendToAccount][_id];
        cer.active = _active; 
    }
    
}