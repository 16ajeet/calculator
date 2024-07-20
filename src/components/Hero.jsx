import React from 'react'
import { useState } from 'react'
import ArithmeticButton from './ArithmeticButton'

const Hero = () => {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [result, setResult] = useState(null)  //for displaying result
    const[errorType, setErrorType] = useState('')
    const [error, setError] = useState('')  //for displaying error
    const[noError, setNoError] = useState('')   //for displaying success


    const handleOperation = (operation) => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);

        if (isNaN(num1) || isNaN(num2)) {
            setError('Error!');
            if(isNaN(num1)){
                setErrorType('Num 1 cant be Empty')
            }
            else{
                setErrorType('Num 2 cant be Empty')
            }
            setResult('');
            setNoError('')
        }
        else {
            if (operation === '+') {       // for addition logic
                setResult(num1 + num2);
            }
            else if (operation === '-') {
                setResult(num1 - num2);
            }
            else if (operation === '*') {
                setResult(num1 * num2)
            }
            else {
                setResult(num1 / num2);
            }

            setError('');
            setNoError('Success');
            setErrorType('');
        }

    }



    return (
        <div className='hero-container'>
            <div className="content-box">
                <h1>React Calculator</h1>

                <input type="text" placeholder='Num 1' value={number1} onChange={(event) => setNumber1(event.target.value)}></input>
                <input type="text" placeholder='Num 2' value={number2} onChange={(event) => setNumber2(event.target.value)}></input>
                <div className="calculation-buttons">
                    <ArithmeticButton  operation="+" onClick={handleOperation} />
                    <ArithmeticButton operation="-" onClick={handleOperation} />
                    <ArithmeticButton operation="*" onClick={handleOperation} />
                    <ArithmeticButton operation="/" onClick={handleOperation} />

                </div>

                    {/* for displaying error message */}
                    {setError !== '' && <p className='error-message'>{error}</p>}
                    {setNoError !== '' && <p className='success-message'>{noError}</p>}

                    {setErrorType !== '' && <p> {errorType}</p>}
                    {setResult !== '' && <p>  {result}</p>}
            </div>


        </div>
    )
}

export default Hero