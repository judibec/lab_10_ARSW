var memo = new Array(1000001);
var memori = function(n){
    if(memo[n] != null){
        return memo[n];
    } else{
        memo[n] = fibo(n)
        return memo[n]
    }
}

var fibo = function(n){
    if(n<=1){
        return 1
    }else{
        return memori(n-1) + memori(n-2)
    }
}

import { one, zero } from "big-integer";
export default async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    let n = req.body.nth
    let nth_1 = one;
    let nth_2 = zero;
    let answer = zero;

    if (n < 0)
        throw 'must be greater than 0'
    else if (n === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else if(!memo[n]) {
        //for (var i = 0; i < nth - 1; i++) {
        //    answer = nth_2.add(nth_1)
        //    nth_2 = nth_1
        //    nth_1 = answer
        //}
        memori(nth);
    }

    context.res = {
        body: answer.toString()
    };
}
