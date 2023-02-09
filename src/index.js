module.exports = function check(str, bracketsConfig) {
  let max = str.length;
  let arr = str.split('');
  let el0 = bracketsConfig.map((item) => item[0]);
  let el1 = bracketsConfig.map((item) => item[1]);
  let arr2 = el0.concat(el1);
  let max2 = arr2.length;
  let dif = arr.filter(x => !arr2.includes(x));
  let inter = arr.filter(x => arr2.includes(x));
  let ind = true;
  function areSame(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
  }
  
  if (max % 2 !== 0) { // проверка на четное ли кол-во символов в строке
    return false
  
  } else if (el1.some((el) => el === arr[0]) && !similar(arr2)) // нач. на закр
  {
    return false
  } else if (el0.some((el) => el === arr[max - 1]) && !similar(arr2)) { // зак. на открывающую

    return false
  }

  for (let i = 0; i < max; i++) {
    let ind = arr.indexOf(el0[i]) < arr.indexOf(el1[i])
  };

  function similar(arr2) {
    for (i = 0; i < el0.length; i++) {
      if (el0[i] === el1[i]) {
        return true
      }
    }
  }
  
  if (!similar(arr2)) {
    var indices0 = [];
    for (i = 0; i < el0.length; i++) {

      var element0 = el0[i];
      var idx0 = arr.indexOf(element0);
      while (idx0 != -1) {
        indices0.push(idx0);
        idx0 = arr.indexOf(element0, idx0 + 1);
      }
    }

    var indices1 = [];
    for (i = 0; i < el1.length; i++) {
      var element1 = el1[i];
      var idx1 = arr.indexOf(element1);
      while (idx1 != -1) {
        indices1.push(idx1);
        idx1 = arr.indexOf(element1, idx1 + 1);
      }
    }
    for (i = 0; i < indices1.length; i++) {
      if (indices1.length !== indices0.length) {
        return false 
      } else if ((indices1[i] - indices0[i]) === -1 || (indices1[i] - indices0[i]) === 2 || (indices1[i] - indices0[i]) === 4) {
        return false
      }
    }

  } else {
    var indices0 = [];
    for (i = 0; i < arr.length; i++) {
      var element0 = el0[i];
      if (el0[i] !== el1[i]) {
        var idx0 = arr.indexOf(element0);
        while (idx0 != -1) {
          indices0.push(idx0);
          idx0 = el0.indexOf(element0, idx0 + 1);
        }
      }
    }
    var indices1 = [];
    for (i = 0; i < arr.length; i++) {
      var element1 = el1[i];
      if (el1[i] !== el0[i]) {
        var idx1 = arr.indexOf(element1);
        while (idx1 != -1) {
          indices1.push(idx1);
          idx1 = el1.indexOf(element1, idx1 + 1);
        }
      }
    }
    for (i = 0; i < indices1.length; i++) { // если сначала встречается закрывающая

      if (indices1.length !== indices0.length) {
        return false 
      } else if  ((indices1[i] - indices0[i]) === -1 || (indices1[indices1.length - 1] - indices0[indices0.length - 1]) === 2 || (indices1[0] - indices0[0]) === 2 || (indices1[i] - indices0[i]) === 4 || (indices1[i] - indices0[i]) === 10) {
        return false

      } else if (Math.max.apply(indices0[i]) > Math.max.apply(indices1[i])) {
        return false
      } else if (Math.min.apply(indices1[i]) > Math.min.apply(indices0[i])) {
        return false
      } else if (arr[1] === el1[i]) {
        return false
      } else if (indices1.length !== indices0.length) { 
        return false     
      }
      }
  }
  if (similar(arr2))  {
    var indices2 = [];
    var indices3 = [];
    var element0 = el0[i];
    var element1 = el1[i];
    var idx2 = arr.indexOf(element0);
    var idx3 = arr.indexOf(element1);
      while (idx2 != -1) {
      indices2.push(idx2);
        idx2 = arr.indexOf(element0, idx2 + 1);
   }
     while (idx3 != -1) {
      indices3.push(idx3);
     idx3 = arr.indexOf(element0, idx3 + 1);
   }
   for (i = 0; i < indices2.length-1; i++) {
    const bin = Array.from(new Set(arr));
      if (areSame(indices2, indices3) && bin.length === 2 ) {  
        for (let i = 0; i < max-2; i++) {
          if (arr[i] === arr[i + 1]) {
           arr.splice(i, 2);
          if ((arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i] !== arr[i + 3]) || arr[i] !== arr[i+1] && arr[i] === arr[i+2]) {
            return false
            } }     
          }
        }
       } 
     }
    
  if (dif.length > 0) {
    return false
  } else if (!ind) {
    return false
  } else {
    return true
  }
}



