let arr = [1,8,9,5,3,4,2]
let max = arr[0]

for (let i=1 ; i<arr.length;i++){
    if (arr[i]>max){
        max = arr[i]
    }
}
console.log(max)