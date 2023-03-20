// Given an array of integers, and a target integer,
//  return the two integers within the array that add up to the target

function addToTarget(arr, target) {

    let hashmap = {}
    let i = 0;
    for (int of arr) {
        console.log(int)
        console.log(hashmap[int])
        console.log(i++)
        // if (int){

        // }
        
    }
    
}

function test(addToTarget) {

    // new_arr = addToTarget(arr, target);
    new_arr = [4,2,3,5,2];

    if ((new_arr[1] + new_arr[0] === 6)) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

addToTarget([4,2,3,5,2], 6);
// test(addToTarget([4,2,3,5,2], 6));
