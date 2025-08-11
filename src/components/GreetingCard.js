import React from 'react'

function GreetingCard({name}) {
    const styles = {
        padding: '20px',
        margin: '20px auto',
        maxWidth: '400px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
        color: '#333'
    }

    return(
        <div style={styles}>
            <h1>Hello, {name}! Welcome to React</h1>
        </div>
    );
}
export default GreetingCard;