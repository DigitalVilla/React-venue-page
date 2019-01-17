import React from 'react'
/* <Button action={myAction} value="myButton" link="#"/> */


const Button = (props) => {
    return (
        <div  className={props.animate ? "myBtn--animated": ""} 
            onClick={props.action ? (e) => props.action(e) : ""}>
            <a className="myBtn myBtn--white"
                type="button" href={props.link || "#"} >
                {props.value ||"Button"}
            </a>
        </div>
    )
}

export default Button

