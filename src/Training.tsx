
export const Training = () => {
    type mathType = {
        a: number,
        b: number,
    
        calculateFunction: (a:number)=>void
    }
    type userType = {
        sayHello: (mes: string) => void
        sex?: string,
        age: number,
        height: number
    }
    let user: userType = {
        sayHello(mess: string) { alert("faf") },
        sex: 'male',
        age: 18,
        height: 182
    }
    let math: mathType = 
        {

            a:5,
            b:10,
           
            calculateFunction(a:number) { 
                let res=this.a+this.b
                console.log(res+a)
            }

        }

       math.calculateFunction(5)
    


    return (
        <>


        </>
    )
}