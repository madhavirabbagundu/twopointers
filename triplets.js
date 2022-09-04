// var arr = [1,4,45,6,10,8]
var arr = [3,7,0,-1,-2]
function triplet(arr){
var sum = 0
var count = 0
for(var i = 0; i < arr.length-2; i++){
    for(var j = i+1; j < arr.length-1; j++){
        for(var k = j+1; k< arr.length; k++){
            // console.log(arr[i]+" "+arr[j]+" "+arr[k])
// console.log(" *************** ")
            if(arr[i]+arr[j]+arr[k] === sum){
                console.log(arr[i]+" "+arr[j]+" "+arr[k]+"*******")
                   count++
                // return true;
            }
        }
    }
}
// return false;
// return count
}
// console.log(triplet([1,1,0,-1,-2]))
triplet([1,1,0,-1,-2])