import React from 'react'

class ClassComponent extends React.Component <{name: string}> {
    state ={
        name: 'Mundo'
    }
    render(): React.ReactNode {
        return <div><p>name: {this.state.name}</p><button onClick={() => 
            {
                this.setState({name: 'Robson'})
        }}> Click me
            </button>
            </div>
    }
}

export default ClassComponent