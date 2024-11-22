function fibonacci(iteracoes) {
    const nums = [0, 1];
  
    for (let i = 2; i < iteracoes; i++) {
      const soma = nums[i - 1] + nums[i - 2];
      nums.push(soma);
    }
  
    return nums;
}