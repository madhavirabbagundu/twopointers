var arr = [3,5,6,2]
var K = 3
var out1 = []

for(var i = 0; i < arr.length; i++){

    for(var j = i; j < arr.length; j++){
        var out=[]
        var sum = 0;

        for(var k = i; k <= j; k++){
            out.push(arr[k])
        }
        console.log(out)
    //     if(out.length === K){
    //         console.log(out)
    //         for(var l = 0; l < K; l++){
    //             sum+=out[l]
    //         }
    //         out1.push(sum)

    //     }
    }
    // console.log(sum)
}
// console.log(out1)
