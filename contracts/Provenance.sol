//SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;
import "./BAC.sol";
import "./Certificate.sol";

contract Provenance {
    address public contractOwner; //admin
    string[2][] public producerCer;
    
    mapping (address => Producer) public producers;
    mapping (uint => Product) public products;
    mapping (string => uint) public productCodeToId;
    mapping (string => string) public productCodeToName;
    mapping (string => address) public productCodeToBACAddress;
    
    uint numberOfProducts;
    
    BAC public bac;
    
    struct Producer {
        string name;
        string role;
        string certificate;
        // string[2][] cer2;
    }
    
    struct Product {
        address productOwner;
        string productCode;
        string productName;
        string[] rawMaterials;
        uint timestamp;
        address BACAddress;
    }
    
    constructor()  {
        contractOwner = msg.sender; // initializing owner to the account's address that deploys the contract
        numberOfProducts = 1;
    } 
    
    modifier onlyAdmin() {
       require(msg.sender == contractOwner);
       _;
    }
    
    // function for producer to add their details to database
    function addProducer(string memory _name, string memory _role, string memory _certificate) public returns (bool success) {
        
        //Don't overwrite existing entries and ensure name isn't null
        if (bytes(producers[msg.sender].name).length == 0 && bytes(_name).length != 0){
            producers[msg.sender].name = _name;
            producers[msg.sender].role = _role;
            producers[msg.sender].certificate = _certificate;
            // producers[msg.sender].cer2.push([_name, _role]);
            // producers[msg.sender].cer2.push([_name, _certificate]);
            return true;
        }
        else {
            return false;
        }
    }
    
    function callCer(address _contractAddress, address _producerAddress, uint _id)  public returns (string[2] memory){
        Certificates cer = Certificates(_contractAddress);
        producerCer.push(cer.getCertificateToProducer(_producerAddress,_id));
        return (cer.getCertificateToProducer(_producerAddress,_id));
    }

    // function to remove producer from database (only admin)
    function removeProducer(address _producer) onlyAdmin public returns (bool success) {
        delete producers[_producer];
        return true;
    }
    
    // function to display details of producers
    function findProducer(address _producer) public view returns (string memory, string memory, string memory) {
        return (producers[_producer].name, producers[_producer].role, producers[_producer].certificate);
    }
    
    function getProducerRole() public view returns (string memory) {
        return (producers[msg.sender].role);
    }
    
    // Register product information
    function productRegister(
        string memory _productName, 
        string memory _productCode, 
        string[] memory _rawMaterials
        // string memory _role
        ) public {
            
        require(bytes(productCodeToName[_productCode]).length == 0);
        
        //string memory producerRole = getProducerRole();
        bac = new BAC(msg.sender);
        
        productCodeToName[_productCode] = _productName;
        productCodeToId[_productCode] = numberOfProducts;
        productCodeToBACAddress[_productCode] = address(bac);
        
        products[numberOfProducts].productName = _productName;
        products[numberOfProducts].productCode = _productCode;
        products[numberOfProducts].rawMaterials = _rawMaterials;
        products[numberOfProducts].productOwner = msg.sender;
        products[numberOfProducts].timestamp = block.timestamp;
        products[numberOfProducts].BACAddress = address(bac);
        
        numberOfProducts++;
    }
    
    // Get the number of products
    function getNumberOfProducts() view public returns(uint _numberOfProducts) {
        _numberOfProducts = numberOfProducts - 1;
    }
    
    function getProductOfId(uint id) view public returns(
        string memory _productName, 
        string memory _productCode, 
        string[] memory _rawMaterials, 
        address _productOwner, 
        uint _timestamp, 
        address _BACAddress) {
            _productName = products[id].productName;
            _productCode = products[id].productCode;
            _rawMaterials = products[id].rawMaterials;
            _productOwner = products[id].productOwner;
            _timestamp = products[id].timestamp;
            _BACAddress = products[id].BACAddress;
        }
}