
let generateRandom = (n)=>{
 let arr = new Array(n);
 for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random()*10)+1;
 }

 return arr;

}

let sum = (arr)=>{
let ans = 0;
for(let el of arr)ans+=el;

return ans;
}




export  {generateRandom,sum};