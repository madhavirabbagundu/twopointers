// var arr = [1,4,2,6,2,6,9,4]
var arr = [1,3,3,3,4,4]
var out = []
var k = 3
var count = 0
for(var i = 0; i < arr.length; i++){
    if(arr[i] !== k){
        out.push(arr[i])
        count++
    }
}
console.log(out,count)