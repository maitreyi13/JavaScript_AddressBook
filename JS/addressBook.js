console.log("***Welcome to Address Book***");

class Contact{
    firstName
    lastName
    address
    state
    city
    zipCode
    email
    phoneNumber

    //Using Rest paameters to add multiple arguments
    constructor(...contactDetails){
        this.firstName;
        this.lastName;
        this.address;
        this.city;
        this.state;
        this.zipCode;
        this.phoneNumber;
        this.email
    }
}

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
 /** 
 * Creting method to Edit the Contact
 */
function editContact(findName,editedVariable,variableNewValue){
    if(addressBook.length == null){
        console.log("Add contact in Address Book");
    }else{
        addressBook.forEach(newContact => {
            if(newContact.firstName == findName){
                switch(editedVariable){
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;
                    case "address":
                        newContact.address = variableNewValue;
                        break;
                    case "state":
                        newContact.state = variableNewValue;
                        break;
                    case "city":
                        newContact.city = variableNewValue;
                        break;
                    case "zipCode":
                        newContact.zipCode = variableNewValue;
                        break;  
                    case "firstName":
                        newContact.firstName = variableNewValue;
                        break;
                    case "lastName":
                        newContact.lastName = variableNewValue;
                        break;      
                }
            }
        })
    }
}
/**
 * method to Delete the Contact From Address Book
 */
 function deleteContact(first_Name){
    if(addressBook.length == null){
        console.log("Please add a contact in Address Book");
    }else{
        for(let i = 0; i <addressBook.length ; i++){
            if(addressBook[i].firstName == first_Name){
                addressBook.splice(i,1);
                console.log("Contact Deleted Successfully");
            }
        }
    }
}
/**
 * method to Count Total Number Of Contact 
 */
 function countContact(){
    addressBook.reduce(() => {
        count++;
    },count = 0);
    console.log("\nTotal Contacts in Address Book are: "+count + "\n");
}

/**
 * method to Search Contact 
 */
 function searchByCity_State(choice , name){
    if(choice == "city"){
        person = addressBook.filter(contact => contact.city == name)
        .map(contact => contact.firstName);
        console.log("Contact found in city: "+name);
        console.log(person);
    }else if(choice == "state"){
        person = addressBook.filter(contact => contact.state == name)
        .map(contact => contact.firstName);
        console.log("Contact found from state:  "+name);
        console.log(person);
    }else{
        console.log("Invalid city city or state");
    }
}
