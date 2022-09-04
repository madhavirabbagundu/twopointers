var arr = [1,2,3,4,4]
var arr1 = [2,4,5,5]
var  i = 0
var j = 0;
var k = 0;
var arr3 = []
while(i < arr.length && j < arr1.length){
    if(arr[i] < arr1[j]){
        arr3[k++] = arr[i++]
    }
    else{
        arr3[k++] = arr1[j++]
    }
}

while(i < arr.length){
    arr3[k++] = arr[i++]
}
while(j < arr1.length){
    arr3[k++] = arr1[j++]
}
console.log(arr3)