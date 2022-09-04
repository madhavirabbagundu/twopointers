// var arr = [1,3,4,5,5,6,6,7]
// var arr1 = [2,5,6,6,7,8]
var arr = [1,2,3,4]
var arr1 = [1,3,4,5]
var i = 0;
var j = 0;
var n = arr.length
var n1 = arr1.length
var out = []
while(i < n && j < n1){
    if(arr[i] === arr1[j]){
        out.push(arr[i])
        i++
        j++
    }
    else if(arr[i] < arr1[j]){
        i++

    }
    else{
        j++
    }
}
console.log(out)