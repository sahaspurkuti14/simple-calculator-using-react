import React, {useState } from 'react';

function Main() {
    const [inputvalue , setinputvalue] = useState('')

    function display(value){
        setinputvalue(inputvalue + value)
    }

    function calculate(){
        var answer = eval(inputvalue)
        setinputvalue(answer)
    }

    function clear(){
        setinputvalue('')
    }
   
        return ( 
            <div className="row">
                <div className="col-md-5">
                <h1>Simple Calculator </h1>
                    <table className="table">
                        <tr>
                            <td><input type="text" value={inputvalue}/></td>
                            <td><button onClick={()=>clear()}> C </button></td>
                        </tr>

                        <tr>
                            <td><button onClick={()=>display('7')}>7</button></td>
                            <td><button onClick={()=>display('8')}>8</button></td>
                            <td><button onClick={()=>display('9')}>9</button></td>
                            <td><button onClick={()=>display('/')}>/</button></td>
                        </tr>

                        <tr>
                            <td><button onClick={()=>display('4')}>4</button></td>
                            <td><button onClick={()=>display('5')}>5</button></td>
                            <td><button onClick={()=>display('6')}>6</button></td>
                            <td><button onClick={()=>display('*')}>*</button></td>
                        </tr>

                        <tr>
                            <td><button onClick={()=>display('1')}>1</button></td>
                            <td><button onClick={()=>display('2')}>2</button></td>
                            <td><button onClick={()=>display('3')}>3</button></td>
                            <td><button onClick={()=>display('-')}>-</button></td>
                        </tr>

                        <tr>
                            <td><button onClick={()=>display('.')}>.</button></td>
                            <td><button onClick={()=>display('0')}>0</button></td>
                            <td><button onClick={()=>calculate()}>=</button></td>
                            <td><button onClick={()=>display('+')}>+</button></td>
                        </tr>

                    </table>
                </div>
            </div>
         );
    
}
 
export default Main;