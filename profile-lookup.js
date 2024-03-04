/*The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.*/




// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
 for (let i = 0; i < contacts.length; i++) {
    // Check if the contact's firstName matches the given name
    if (contacts[i].firstName === name) {
      // Check if the property prop exists in the contact
      if (contacts[i].hasOwnProperty(prop)) {
        // Return the value of the property if both conditions are met
        return contacts[i][prop];
      } else {
        // Return No such property if the property doesn't exist
        return "No such property";
      }
    }
  }

  // Return No such contact if the name is not found in the contacts array
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");