import React, {useState} from 'react'
import './TestComponent.css'


function TestComponent(props: {name: string}) {
    const[age,setAge] = useState(30)
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