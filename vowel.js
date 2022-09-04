var str = "workattech"
var K = 3
var max = 0
var out1 = []
for(var i = 0; i < str.length; i++){
    for(var j = i; j < str.length; j++){
        var out = ""
        var count = 0;

        for(var k = i; k <= j;k++){
            out+=str[k]
        }
        // console.log(out)
        if(out.length===K){
            console.log(out)
            for(var l = 0; l < out.length; l++){
              if(out[l] === "a" || out[l] === "e"|| out[l] === "i"||
              out[l] === "o" || out[l] === "u"){
                count++
              }

            }
            console.log(count)
            out1.push(count)

        }
        if(count > max){
            max = count
        }
    }
}
console.log(max)
console.log(out1)