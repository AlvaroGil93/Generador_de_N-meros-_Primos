function primos(n) {
    const primos = [];
    for (let i = 2; i < n; i++) {
      if (isPrimo(i)) {
        primos.push(i);
      }
    }
    return primos;
  }
  
  function isPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

console.log(primos(10));
  