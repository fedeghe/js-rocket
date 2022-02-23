const escReduce = (arr, fn, init, exitFn) => {
    try {
      return arr.reduce((...args) => {
          if (exitFn && exitFn(...args)) {
              throw args[0]
            }
            return fn(...args)
        }, init)
    } catch(e){ return e }
},
escReduce2 = (arr, fn, init, exitFn) => {
  let acc = init,
      i = 0;
  const l = arr.length
  for (null; i < l ; i++) {
    if (exitFn && exitFn(acc, arr[i], i, arr)) break
    acc = fn(acc, arr[i], i, arr)
  }
  return acc
};

Array.prototype.escReduce = function(fn, init, exitFn){
    try {
      return this.reduce(function (acc, e, i, arr){
          if (exitFn && exitFn(acc, e, i, arr)) {
              throw acc
            }
            return fn(acc, e, i, arr)
        }, init)
    } catch(e){ return e }
}

// es3
Array.prototype.escReduce2 = function(fn, init, exitFn){
  var arr = this,
      acc = init;
  for (var i = 0, l = arr.length; i < l ; i++) {
    if (exitFn(acc, arr[i], i, arr)) break
    acc = fn(acc, arr[i], i, arr)
  }
  return acc
}

var AAA = Array.from({length: 100}, (_, i) => i+1)
console.log(escReduce2(
  AAA,
  (acc, e, i) => acc * e,
    1,
    acc => acc > 1E9 
)); // 6227020800

console.log(AAA.escReduce2(
  	(acc, e, i) => acc * e,
    1,
    acc => acc > 1E9 )
)