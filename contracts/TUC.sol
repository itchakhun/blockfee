//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Provenance.sol";
import "./BAC.sol";

contract TUC is Ownable {
    // Define struct
    struct tr {
        string currentTr;
        string previousTr;
        address sender;
        string receiver;
        uint time;
    }
    
    mapping(uint => tr) trs;
    
    uint public numberOfTrs;
    
    address batchAdmin;
    
    // modifier
    modifier onlyAdmin() {
       require(msg.sender == batchAdmin);
       _;
    }
    
    constructor(address _address) {
        batchAdmin = _address;
    }
    
    function addTr(string memory _currentTr, string memory _previousTr, string memory _receiver) public onlyAdmin{
        
        numberOfTrs++;
        
        trs[numberOfTrs].currentTr = _currentTr;
        trs[numberOfTrs].previousTr = _previousTr;
        trs[numberOfTrs].sender = msg.sender;
        trs[numberOfTrs].receiver = _receiver;
        trs[numberOfTrs].time = block.timestamp;
    }
    
    // Get transaction information by IgetNumberOfTrs
    function getTrOfId(uint _id) view public returns (
        string memory _currentTr, 
        string memory _previousTr, 
        address _sender, 
        string memory _receiver, 
        uint _time) {
        _currentTr = trs[_id].currentTr;
        _previousTr = trs[_id].previousTr;
        _sender = trs[_id].sender;
        _receiver = trs[_id].receiver;
        _time = trs[_id].time;
    }
    
    // function deleteContract() public onlyAdmin {
    //     selfdestruct(batchAdmin);
    // }
}