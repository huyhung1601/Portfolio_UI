import React from 'react'
import {Button as MuiButton, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    btn:{
        backgroundColor : '#cddc39',
        fintSize: '14px',
        fontWeight: '500',
        border: 0,
        borderRadius: '50px',
        padding: '1px 12px',
        lineHeight: '35px',
        minWidth: '100px',
        outline: 'none'
    },
    btnIconContainer:{
        color: '#000',
        background: '#fff',
        borderRadius: '50px',
        height: '27px',
        width: '27px',
        lineHeight: '29px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText :{
        fontSize: '14px',
        textTransform: 'none',
        textAlign: 'center',
        width: '100%',
        marginRight: '5px',
        marginLeft: '5px'
    }
}))

const Button = ({text,icon}) => {
    const classes= useStyles()
    return (
        <MuiButton 
            className={classes.btn}
            endIcon = {icon && <div className={classes.btnIconContainer}> {icon} </div>}            
        > 
            <span className={classes.btnText}>{text}</span>
        </MuiButton>
    )
}

export default Button
