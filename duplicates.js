var arr = [1,2,2,3,4,4,4]

function duplicate(arr){
if(arr.length === 0 || arr.length===1)
    return 

var j = 0;
for(var i = 0; i < arr.length-1; i++)
if(arr[i] != arr[i+1])
    arr[j++] = arr[i]

    arr[j++] = arr[arr.length-1]
return j

}
console.log(duplicate([1,2,2,3,4,4,4,5,5]))
