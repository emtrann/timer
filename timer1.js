let seconds = process.argv.slice(2); 

const simpleTimer = () => {
  let sorted = seconds.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (Number.isInteger(sorted[i]) || sorted[i] >= 0) {
      let timer = sorted[i] * 1000; 
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer)
    }
  }
}; 

simpleTimer();