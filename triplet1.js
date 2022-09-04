function triplet(arr){
    var sum = 50
    arr.sort((a,b)=>a-b);
    console.log(arr)
    for(var i = 0 ;i < arr.length-2; i++)
      l = i+1;
      r = arr.length-1
      while(l < r){
        if(arr[i]+arr[l]+arr[r]===sum){
            console.log(arr[i]+" "+arr[l]+" "+arr[r])
            return true
        }
        else if(arr[i]+arr[l]+arr[r] < sum){
            l++
        }
        else{
            r--
        }
           

    }
    return false
}
// triplet([1,4,45,6,10,8])
console.log(triplet([1,4,45,6,10,8]))