var arr = [-3,1,3,4]

function sum(arr){
    // var out= false
var i = 0;
var j = 1
while(i < arr.length && j < arr.length){
    console.log(arr[j]-arr[i])
    if(arr[j]-arr[i] === 0){
        i++
        j++
        return true
       
    }
    if(arr[j]-arr[i]>0){
        // i++
        j++
    }
    if(arr[j]-arr[i]<0){
        i++
    }
}
return false
}
console.log(sum([-3,1,3,4]))
var out = "flase"
for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        console.log(arr[j]-(-arr[i]))
        if(arr[j]-(-arr[i]) === 0){
            out = "true"
        }
       
    }
    
}
console.log(out)