import { Button } from "react-bootstrap";
import React from 'react'

const HeaderButton = ({color, text, onClick}) => {
    return (
        <div>
            <Button onClick={onClick} style={{backgroundColor:color}}>
                    {text}
            </Button>
        </div>
        )
    }
    
HeaderButton.defaulProps = {
    color:'steelBlue'
}


export default HeaderButton