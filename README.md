# JS 🚀

A collection of methods to achieve common & less common actions in the fastest possible way.

### Run tests
`yarn && yarn test`

---

### Arrays  
- arguments 2 array
- array loop
- compose
- filter
- map
- reduce
- some
- every
- removeNullFromObj

---

Actual numbers will surprise you! ... still using `Array.reduce` ? 

If still u are using a lot `Array.reduce` and I did not convinced you, please take the time to clone react code and search for `.reduce` in the _packages_ folder.  

### Some numbers

**TEST arguments2array**  
<span style="color:green">pushApply: ~1.3µs fastest</span>  
sliceApply: ~1.5µs ~1.2X slower  
sliceCall: ~1.6µs ~1.2X slower  
forLoop: ~2.6µs ~2.0X slower  
concatApply: ~4.9µs ~3.8X slower  
<span style="color:red">map: ~27.8µs ~21.4X slower</span>  

**TEST arrayLoop**  
<span style="color:green">straightWhile: ~0.6µs fastest</span>  
invertedWhile: ~0.8µs ~1.3X slower  
straightFor: ~0.8µs ~1.3X slower  
<span style="color:red">reduce: ~5.3µs ~8.8X slower</span>  
  
**TEST compose**  
<span style="color:green">compose1: ~0.8µs fastest</span>  
compose2: ~3.1µs ~3.9X slower  
<span style="color:red">compose3: ~6.7µs ~8.4X slower</span>  
  
**TEST every**  
<span style="color:green">everyWithFor: ~0.6µs fastest</span>  
everyWithWhile: ~0.7µs ~1.2X slower  
<span style="color:red">every: ~5.5µs ~9.2X slower</span>  
  
**TEST filter**  
<span style="color:green">filterWithForFuncExt: ~2.4µs fastest</span>  
filterWithFor: ~2.4µs ~1.0X slower  
filterWithForFunc: ~3.0µs ~1.3X slower  
filterWithReduce: ~7.8µs ~3.3X slower  
<span style="color:red">filter: ~8.9µs ~3.7X slower</span>  
  
**TEST map**  
<span style="color:green">mapWithWhile: ~2.4µs fastest</span>  
mapWithFor: ~2.4µs ~1.0X slower  
<span style="color:red">map: ~7.0µs ~2.9X slower</span>  
  
**TEST reduce**  
<span style="color:green">reduceWithFor: ~0.5µs fastest</span>  
reduceWithWhile: ~0.6µs ~1.2X slower  
reducePolluted: ~0.8µs ~1.6X slower  
escapableReduceWithFor: ~2.0µs ~4.0X slower  
<span style="color:red">reduce: ~5.2µs ~10.4X slower</span>  
  
**TEST some**  
<span style="color:green">someWithFor: ~0.6µs fastest</span>  
someWithWhile: ~0.7µs ~1.2X slower  
<span style="color:red">some: ~5.1µs ~8.5X slower</span>  
  
**TEST remFromObj**  
<span style="color:green">nullO3: ~26.7µs fastest</span>  
nullO1: ~36.0µs ~1.3X slower  
nullO2: ~70.8µs ~2.7X slower  
<span style="color:red">nullO4: ~1283.5µs ~48.1X slower</span>  

<!-- ![numbers](https://raw.githubusercontent.com/fedeghe/js-rocket/master/src/img/numbers3.png) -->
