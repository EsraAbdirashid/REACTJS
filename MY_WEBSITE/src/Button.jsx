import React from 'react'

const Button = () => {
const styles ={

                backgroundColor: "brown",
                color: "white",
                padding: "20px 40px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "large",
        
}

  return ( <button style={styles}>Click Me</button> );
}

export default Button