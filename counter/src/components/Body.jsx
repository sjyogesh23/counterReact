import React, { Component } from 'react';
import './style.css';
class Main extends Component {
    state = { 
        count : 0        
    }
    /*numact = () => {
        this.setState({count:this.state.count + 1})
    }
    numact2 = () => {
        this.setState({count:this.state.count - 1})
    }
    numact3 = () => {
        this.setState({count:0})
    }*/
    
    render() {
        
        return (
            <div className='main'>
                <div className='body'>
                    <p className='title'>Counter</p>
                    <div className='num' id='hey'>{this.state.count}</div>
                    <div className='btns'>
                        <button className='in' onClick={() => this.setState({count:this.state.count + 1})}>Increment</button>
                        <button className='de' onClick={() => this.setState({count:this.state.count - 1})}>Decrement</button>
                    </div>
                    <button className='reset' onClick={() => this.setState({count:0})}>Reset</button>
                </div>            
            </div>
        );
    }
}
 
export default Main;