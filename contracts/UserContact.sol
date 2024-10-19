// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
contract UserContact{
    struct Persons{
        string fullName;
        string phone;
        string email;
        string quote;
    }
    Persons[] public listOfPersons;
    mapping(string => string) public emailToMessage;

    function addPerson(string memory _fullname, string memory _phone, string memory _email, string memory _quote) public{
        listOfPersons.push(Persons(_fullname,_phone,_email,_quote)); 
        emailToMessage[_email] = _quote;
    }

    function retrieve() public view returns(Persons[] memory){
        return listOfPersons;
    }



}