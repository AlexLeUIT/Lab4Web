import React, {useState} from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    const containerStyle = {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif'
    }

    const countStyle = {
        fontSize: '48px',
        marginBottom: '20px',
        color: '#333'
    }

    const buttonStyle = {
        padding: '10px 15px',
        margin: '20px 10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }

    const wrapperButton = {
        margin: '10px 20px'
    }

    const incStyle = {...buttonStyle, backgroundColor: '#4CAF50', color: 'white'}
    const decStyle = {...buttonStyle, backgroundColor: '#f44336', color: 'white'}
    const resetStyle = {...buttonStyle, backgroundColor: '#2196F3', color: 'white'}


    return(
        <div style={containerStyle}>
            <p style={countStyle}>You clicked {count} times</p>
            <div style={wrapperButton}>
                <button style={incStyle} onClick={() => setCount(count + 1)}>Increasement</button>
                <button style={decStyle} onClick={() => { if (count > 0) setCount(count - 1)}}>Decreasement</button>
                <button style={resetStyle} onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}
export default Counter
