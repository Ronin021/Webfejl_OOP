const fv1 = (a,b)=>{
    return a+b
}

const fv2 = (a,b,cb)=>{
    const talib = cb(a,2)

    const kecskepasztor = cb(b,4)


    return cb(talib,kecskepasztor)
}

const res1 = fv2(5,7,(a,b)=>{
    return a+b
})
console.log(res1)

const res2 = fv2(5,7,fv1)

console.log(res2)

const fv3 = (op)=>{
    if (op === '-') {
        return (a,b)=>{
            return a-b

        }
    }
}

const fv4 = fv3('-')
const res3 = fv4(5,7)

console.log(res3)