let sum = (a,b) => a+b;
let upper = (x) => x.toUpperCase();

// 一个函数的输入是另一个函数的输出

/*
let str = upper(sum('a','b'));
console.log(str); // 输出 AB
*/

function compose(...fns) {
    return function(...args){
        let last = fns.pop();
        return fns.reduceRight((composed,fn)=>{
            return fn(composed);
        },last(...args))
    }
}


// 希望组合函数的调用方式为下面的
let result = compose(sum,upper)('a','b');
console.log(result);


