/*Complete the function using the rules below to modify the object passed to the function.
Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.*/




// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // Create a copy of the records object to avoid directly modifying it
  const newRecords = { ...records };

  // Check if the value is an empty string, delete the prop if true
  if (value === "") {
    delete newRecords[id][prop];
  } else if (prop !== "tracks") {
    // If prop is not "tracks" and value is not an empty string, assign the value to the album's prop
    newRecords[id][prop] = value;
  } else {
    // If prop is "tracks" and value is not an empty string
    if (!newRecords[id].hasOwnProperty("tracks")) {
      // If the album doesn't have a tracks property, create an empty array and add value to it
      newRecords[id].tracks = [value];
    } else {
      // If the album has a tracks property, add value to the end of the existing tracks array
      newRecords[id].tracks.push(value);
    }
  }

  return newRecords;
}