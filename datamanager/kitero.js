const sum = (a,b) =>{

    return a+b

}

console.log(sum(3,5))

const obj = {}

    obj.calculate1 = sum

    console.log(obj.calculate1(3,5))

    obj.calculate2 = (calccb) => {
        const a = 3
        const b = 5

        return calccb(a , b)
    }

    const res1 = obj.calculate2((szam1,szam2)=>{
        return szam1 + szam2
    }) 

    const res2 = obj.calculate2((szam1, szam2) =>{
        return szam1 - szam2
    })
    console.log(res1)
    console.log(res2)

    obj.calculate3 = ((szam1, szam2, szam3_cb)=>{
        const res = szam3_cb(szam1, szam2)
        return res
    
})
    const res3 = obj.calculate3(7,8,(szam1,szam2)=>{

        return szam1 * szam2
    
    })

    console.log(res3)

    const theFunction = ()=>{
        const a = 10

        const res4 = obj.calculate2((szam1, szam2) =>{
            return szam1 * a + szam2
        }) 
        console.log(res4)

    }