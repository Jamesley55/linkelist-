function fib(number, memory) {
    let num = number;
    let memo = memory;  
    if (memo[num] != null) return memo[num];
    if (num <= 1) return 1;
  
    memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
    console.log(memo[num]); 
    return memo[num]; 
  }

 let memory = [];
 fib(300, memory); 