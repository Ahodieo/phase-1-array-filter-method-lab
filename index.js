function findMatching([...drivers], name){
  return drivers.filter(function (driver){
      return driver.toLowerCase().indexOf(name.toLowerCase()) !== -1;})
}
function fuzzyMatch([...drivers], name){
    return drivers.filter(function (driver){
        return driver.toLowerCase().indexOf(name.toLowerCase()) === 0;})
  }
  function matchName([...drivers], name){
    return drivers.filter(function (driver){if (driver.name === name) 
        return driver;})
  } 