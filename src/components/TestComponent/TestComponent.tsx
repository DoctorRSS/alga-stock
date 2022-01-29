import React, {useState, useEffect} from 'react'
import './TestComponent.css'


function TestComponent(props: {name: string}) {
    const[age,setAge] = useState(30)

    useEffect(() =>{
        console.log('Componente criado')
    },[])

    useEffect(() =>{
        console.log('Idade atualizada para: ' + age)
    },[age])

    return <div className="TestComponent" >Ola, {props.name}, {age}
    <button onClick={() => {
        setAge(age +1)
    }}>

    </button>
    </div>
}

//Execução alternativa da solução acima. As duas geram o mesmo resultado
/*const TestComponent = () => (
    <div className="TestComponent" >Test Component</div>
)*/


export default TestComponent