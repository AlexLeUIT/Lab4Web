import React, {useState} from 'react'

function ToggleVisibility() {
    const [isVisible, setVisible] = useState(false)

    const containerStyle = {
        maxWidth: '400px',
        margin: '30px auto',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif'
    }

    const buttonStyle = {
        padding: '10px 20px',
        margin: 'auto',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: isVisible ? '#f44336' : '#4CAF50',
        color: 'white',
        marginBottom: '15px',
        textAlign: 'center'
    }

    const sampleText = '2456002 Le Ngoc Anh';
    return(
        <div style={containerStyle}>
            <button style={buttonStyle} onClick={() => setVisible(!isVisible)}>{isVisible ? 'Hide Content' : 'Show Content'}</button>
            {isVisible && <p>{sampleText}</p>}
        </div>
    )


}
export default ToggleVisibility