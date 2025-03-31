import React,{useState} from 'react'

const practice = () => {
    // const name = "John Doe"
    // const [name, setname] = useState("")
    // const [age, setage] = useState(21)
    // const [phoneno, setphoneno] = useState(0)

//     const [details, setdetails] = useState(
//         {
//         name: "george",
//         age: 0,
//         phoneno: 0
//         }
// )
          const [first, setfirst] = useState([
            {
                name: "george",
                age: 0,
                phoneno: 0
            },
          ])
  return (
    // <div>
    //     <h1>name: <span>{name}</span></h1>
    //     <input type="text" onChange={(e)=>setname(e.target.value)}/>
    //     <h1>age: <span>{age}</span></h1>
    //     <button type="button" onClick={()=>setage(age+1)}>incre</button>
    //     <button type="button" onClick={()=>setname(age-1)}>Decre</button>
    //     <h1>ph: <span>{phoneno}</span></h1>
    //     <input type="text" onChange={(e)=>setphoneno(e.target.value)}/>
    // </div>
    // <div>
    //     <h1>name: <span>{details.name}</span></h1>
    //     <input type="text" onChange={(e)=>setdetails({...details,name:e.target.value})}/>
    //     <h1>age: <span>{details.age}</span></h1>
    //     <button type="button" onClick={()=>setdetails({...details,age:details.age+1})}>incre</button>
    //     <button type="button" onClick={()=>setdetails({...details,age:details.age-1})}>Decre</button>
    //     <h1>ph: <span>{details.phoneno}</span></h1>
    //     <input type="text" onChange={(e)=>setdetails({...details,phoneno:e.target.value})}/>
    // </div>

    // <div>
    //     <h1>name: <span>{first[0].name}</span></h1>
    //     <input type="text" onChange={(e)=>setfirst([{...first[0],name:e.target.value},first[1]])}/>
    //     <h1>age: <span>{first[0].age}</span></h1>
    //     <button type="button" onClick={()=>setfirst([{...first[0],age:first[0].age+1},first[1]])}>incre</button>
    //     <button type="button" onClick={()=>setfirst([{...first[0],age:first[0].age-1},first[1]])}>Decre</button>
    //     <h1>ph: <span>{first[0].phoneno}</span></h1>
    //     <input type="text" onChange={(e)=>setfirst([{...first[0],phoneno:e.target.value},first[1]])}/>
    // </div>

    <div>
        {first.map((item,index)=>(
            <div key={index}>
                <h1>name: <span>{item.name}</span></h1>
                <input type="text" onChange={(e)=>setfirst(first.map((item,index)=>(index===index?{...item,name:e.target.value}:item)) )}/>
                <h1>age: <span>{item.age}</span></h1>
                <button type="button" onClick={()=>setfirst(first.map((item,index)=>(index===index?{...item,age:item.age+1}:item)))}>incre</button>
                <button type="button" onClick={()=>setfirst(first.map((item,index)=>(index===index?{...item,age:item.age-1}:item)))}>Decre</button>
                <h1>ph: <span>{item.phoneno}</span></h1>
                <input type="text" onChange={(e)=>setfirst(first.map((item,index)=>(index===index?{...item,phoneno:e.target.value}:item)) )}/>
            </div>
        ))}
        <button type="button" onClick={()=>setfirst([...first,{name:"",age:0,phoneno:0}])}>Add</button>
    </div>
  )
}

export default practice