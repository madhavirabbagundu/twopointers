var arr = [1,1,2,3]
var arr1 = [3,3,4,5,6]
var arr2 = []
var k = 0;
var i = 0;
var j = 0;
var m = 5
while( i < arr.length && j < arr1.length){
    if(arr[i] < arr1[j]){
     arr2[k++] = arr[i++]
    }
    else{
        arr2[k++] = arr1[j++]
    }
}
console.log(arr2)
var out = 0
for(var i = 0; i < arr2.length; i++){
    if(i === m){
        out = arr2[i]
    }
}
console.log(out)