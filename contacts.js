/**
 * Functions for Contacts
 * Created by MGY on 10/1/2015.
 */

/*global _*/
/*exported ContactList, Contact*/

/**
 * Contact Constructor passed the
 * @param firstName
 * @param lastName
 * @param address
 * @param zipcode
 * @param telNum
 * @constructor
 */
var Contact = function (firstName, lastName, address, zipcode, telNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telNum = telNum;
  var callNum = 0;
  /**
   * For each person that calls this function will calculate how many time that person call
   * @returns : returns true that the person call and increment the number of calls the person has
   */
  this.call = function () {
    callNum++;
    return true;
  };
  /**
   * Returns the current variable of callNum in each contact
   * @returns : current variable of callNum
   */
  this.numCalls = function () {
    return callNum;
  };

};

/**
 * Constructs the contacts list
 * @constructor
 */
var ContactList = function () {

  var contactList = [];
  /**
   * Given the contact name constructor creates the contact with desired name
   * @param contact : Input the name of the contact
   * @returns : returns true that contact has beend added
   */
  this.addContact = function (contact) {
    contactList.push(contact);
    return true;
  };
  /**
   * Calculates the amount of contacts in the current contact list
   * @returns : total amount of contacts in the contact list
   */
  this.numContacts = function () {
    return contactList.length;
  };
  /**
   * Finds the contact of interest by last Name and returns the contacts information associated with the last name
   * @param last : The last name of interest
   * @returns : A list of contacts and information associated with Last Name of interest
   */
  this.findContact = function (last) {
    var lastNameList = [];
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].lastName === last) {
        lastNameList.push(contactList[i]);
      }
    }
    return lastNameList;
  };
  /**
   * Given the first and last name of contact of interest this will delete the information associated with given name
   * @param first : The first name of contact of interest
   * @param last: The last name of contact of interest
   */
  this.deleteContact = function (first, last) {
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].firstName === first && contactList[i].lastName === last) {
        contactList.splice(i, 1);
      }
    }

  };
  /**
   * List the contacts you have by lastname
   * @returns : list of contacts
   */
  this.listContacts = function () {
    return _.sortBy(contactList, "lastname");
  };

};
