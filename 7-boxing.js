// BEGIN
function magic(...args) {
    const sum = args.reduce((acc, val) => acc + val, 0);
    
    function innerMagic(...innerArgs) {
      if (innerArgs.length === 0) {
        return sum;
      }
      
      const innerSum = innerArgs.reduce((acc, val) => acc + val, 0);
      
      return magic(sum + innerSum);
    }
    
    innerMagic.valueOf = function() {
      return sum;
    };
    
    return innerMagic;
  }
  
  export default magic;
// END
