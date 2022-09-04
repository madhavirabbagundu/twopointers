//sorted problem without useing in built function

// var arr= [1,0,1,2,2]
var arr = [1,0,0,0,1]
for(var i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
        var temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp

    }
}
console.log(arr)