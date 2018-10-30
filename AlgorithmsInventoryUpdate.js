/*Algorithms: Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.*/



function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for (let i = 0; i < arr2.length; i++){
        for(let x = 0; x < arr1.length; x++){
            if (arr2[i][1] === arr1[x][1]){
                arr1[x][0] += arr2[i][0];
                i++;
            }
        }
        arr1.push(arr2[i]);
    }
    arr1.sort(function(a, b) {
        return a[1].charCodeAt(0) - b[1].charCodeAt(0);
        });
    console.log(arr1); 
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);