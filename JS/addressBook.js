console.log("***Welcome to Address Book***");

class Contact{
    //Using Rest paameters to add multiple arguments
    constructor(...contactDetails){
        this.firstName = contactDetails[0];
        this.lastName = contactDetails[1];
        this.address = contactDetails[2];
        this.city = contactDetails[3];
        this.state = contactDetails[4];
        this.zipCode = contactDetails[5];
        this.phoneNumber = contactDetails[7];
        this.email = contactDetails[6];
    }
}
/**
 * AddressBook Array
 */
 var addressBook = new Array();

 /**
  * creating function contactDetails by passing parameters
  * @param {*} firstName 
  * @param {*} lastName 
  * @param {*} address 
  * @param {*} state 
  * @param {*} city 
  * @param {*} zipCode 
  * @param {*} email 
  * @param {*} phoneNumber 
  */
 function contactDetails(firstName,lastName,address,state,city,zipCode,email,phoneNumber){
     
     /** 
      * Checking Duplicate Contact
     */
     addressBook.filter(contact => contact.firstName == firstName)
     .reduce(() => count++ , count = 0);
     if(count > 0){
         console.log("Contact With Name " + firstName + " Already Present")
     }else{
         const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
     let firstName_Check = firstNamePattern.test(firstName);
 
     const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
     let lastName_Check = lastNamePattern.test(lastName);
 
     const addressPattern = /^[A-Z][a-zA-Z0-9]{3,}/;
     let address_Check = addressPattern.test(address);
 
     const statePattern = /^[A-Z][a-zA-Z]{3,}/;
     let state_Check = statePattern.test(state);
 
     const cityPattern = /^[A-Z][a-zA-Z]{3,}/;
     let city_Check = cityPattern.test(city);
 
     const zipCodePattern = /^[0-9]{3}[\s]{1}[0-9]{3}/;
     let zipCode_Check = zipCodePattern.test(zipCode) ;
 
     const emailPattern = /^[A-Za-z0-9]+(.[A-Za-z0-9]+)*@[^_\\W]+(.[^_\\W]+)?(?=(.[^_\\W]{3,}$|.[a-zA-Z]{2}$)).*$/;
     let email_Check = emailPattern.test(email);
 
     const phoneNumberPattern = /^[0-9]{2}[\s]{1}[0-9]{10}/;
     let phoneNumber_Check = phoneNumberPattern.test(phoneNumber);
 
         if(firstName_Check == true && lastName_Check == true && address_Check == true && state_Check == true && city_Check == true
                         && zipCode_Check == true && email_Check == true && phoneNumber_Check == true){
            
             let newContact = new Contact(firstName,lastName,address,state,city,zipCode,email,phoneNumber);
             console.log("Contact Added Successfully");
             
             addressBook.push(newContact);
 
         }else{
             throw 'Invalid Contact Details';
         }
     }   
 }
 