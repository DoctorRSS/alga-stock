import React from 'react'

class ClassComponent extends React.Component <{name: string}> {
    constructor(props: any){
        super(props)
        console.log('constructor reached')
    }
    state ={
        name: 'Mundo'
    }

    componentDidMount(){
        console.log('did mount reached')
    }

    componentDidUpdate(){
        console.log('did update reached')
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