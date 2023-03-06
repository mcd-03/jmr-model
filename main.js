// main function that drives update for a given object (School, Department, PLC, Grade, or Teacher)
function main() {
    Roberts.update();
    Pait.update();
  };
  
  // function that transforms data and validates that new data matches the same columns as previous data
  // run after importing new data
  // is idempotent (does not change the data after the first call even if called mutliple times)
  function dataPipeline() {
    transformNPs();
    transformNames();
    validateNavigatorHeaders();
  };
  