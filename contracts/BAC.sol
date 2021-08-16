//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Provenance.sol";
import "./TUC.sol";

contract BAC is Ownable{
    
    //Define struct
    struct Batch {
        string productBatch;
        string[] materialBatch;
        address TUCAddress;
        address batchManager; // aka. Product Owner
        address batchManagerRole;
        Processor processor;
        Roaster roaster;
        EnvDetail[] envDetail;
        uint addTime;
    }
    
    struct Processor {
        string origin;
        string variety;
        string description;
        string processMethod;
        string elevation;
        string farm;
    }
    
    struct Roaster {
        string roastLevel;
        string roastDate;
        string tasteNote;
    }
    
    struct EnvDetail {
        string title;
        string description;
    }

    mapping(uint => Batch) batches;
    mapping(string => uint) batchNumberToId;
    mapping(string => address) batchToAddress;
    mapping(address => string) addressToBatch;
    // mapping(string => Roaster) batchToRoaster;
    // mapping(string => Processor) batchToProcessor;
    
    uint  numberOfBatchs;
    address public productOwner;
    
    TUC public tuc;
    
    modifier onlyProductOwner() {
       require(msg.sender == productOwner);
       _;
    }
    
    constructor(address _address)  {
        productOwner = _address;
        // numberOfBatchs = 1;
    }

    // Add production batch information
    function addBatch(
        string memory _productBatch,
        string[] memory _materialBatch
        ) public onlyProductOwner {
            
        tuc = new TUC(msg.sender);
            
        numberOfBatchs++;
            
        batchNumberToId[_productBatch] = numberOfBatchs;
            
        batches[numberOfBatchs].productBatch = _productBatch;
        batches[numberOfBatchs].materialBatch = _materialBatch;
        batches[numberOfBatchs].batchManager = msg.sender;
        batches[numberOfBatchs].TUCAddress = address(tuc);
        batches[numberOfBatchs].addTime = block.timestamp;
    }
    
    // Update processing detail
    function updateProcessDetail(
        string memory _productBatch, 
        string memory _origin,
        string memory _variety,
        string memory _description,
        string memory _processingMethod,
        string memory _elevation,
        string memory _farm) public {
        
        uint _id = getIdOfBatch(_productBatch);
        batches[_id].processor = Processor(_origin, _variety, _description, _processingMethod, _elevation, _farm);
    }
    
    function getProcessDetail(string memory _productBatch) view public returns (Processor memory) {
        uint _id = getIdOfBatch(_productBatch);
        return batches[_id].processor;
    }
    
    // Update roasting detail
    function updateRoastDetail(
        string memory _productBatch,
        string memory _roastLevel,
        string memory _roastDate,
        string memory _tasteNote) public {
            
        uint _id = getIdOfBatch(_productBatch);
        batches[_id].roaster = Roaster(_roastLevel, _roastDate, _tasteNote);
    }
    
    function getRoastDetail(string memory _productBatch) view public returns (Roaster memory) {
        uint _id = getIdOfBatch(_productBatch);
        return batches[_id].roaster;
    }
    
    // Update production batch environmental information
    function updateEnvironmentDetail(
        string memory _productBatch, 
        string memory _title, 
        string memory _description) public {
        
        EnvDetail memory env = EnvDetail(_title,_description);
        uint _id = getIdOfBatch(_productBatch);
        batches[_id].envDetail.push(env);
    }
    
    function getEnvironmentDetail(string memory _productBatch) view public returns (EnvDetail[] memory) {
        uint _id = getIdOfBatch(_productBatch);
        return batches[_id].envDetail;
    }
    
    function getIdOfBatch(string memory _productBatch) view public returns(uint _id) {
        _id = batchNumberToId[_productBatch];
    }
    
    function getNumberOfBatches() view public returns(uint _numberOfBatchs) {
        _numberOfBatchs = numberOfBatchs;
    }
}

