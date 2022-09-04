// var arr = [1,3,5,7,10]
var arr = [1,2,3,4,5]
var k = 3
var i = 0;
var j = 1;
var n = arr.length
var count = 0
while(i < n && j < n){
if(arr[j]-arr[i] === k){
    count++
    i++
    j++
}
else if(arr[j]-arr[i] < k){
    j++
}
else if(arr[j]-arr[i] > k){
    i++
}
}
console.log(count)