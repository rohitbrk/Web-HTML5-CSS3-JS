// Polyfills can be used to implement modern features that are not supported by old browsers
// In this example we are building the array-map method polyfill

class Arr {
    constructor(array){
        this.array=array
    }
    map(cb){
        const resultArray = []
        for(let i of this.array){
            resultArray.push(cb(i))
        }
        return resultArray
    }
}

const array1 = new Arr([1, 2, 3])
const doubledArray1 = array1.map(item=>item*2)
console.log(doubledArray1)
