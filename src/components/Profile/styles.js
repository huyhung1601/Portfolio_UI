import {makeStyles } from '@material-ui/core/styles'

export default makeStyles ((theme)=>({
    root:{
        backgroundColor: 'white',
        border: '6px',
        width: '100%',
        display: 'inline-block',        
            '& .MuiTypography-h6':{
                textTransform: 'upperCase',
                fontSize: '17px',
                fontWeight: 'bold'
            },      
            '& .MuiTypography-subtitle1':{
                fontSize:'13px',
                color: '#777',
            },
        '& .MuiTypography-body1 ':{
            fontSize: '13.5px',
            color: '#787878',
            fontWeight: '400',            
            marginLeft: '5px'
        },

    },
    timelineDetail:{
        color:'black',
        fontWeight: '700',
        paddingRight: theme.spacing(1)
    },
    profileName:{
        lineHeight: '18px',
        padding: '20px',
    },
    profileImage:{
        marginTop: '-10px',
        webkitClipPath: 'polygon(0 9%, 100% 0, 100% 94%, 0% 100%)',
        clipPath: 'polygon(0 9%, 100% 0, 100% 94%, 0% 100%)',
    },
    avatar:{
        width: '100%',
    },
    /**Information */
    profileInformation:{
        top: 0,
        left: 0,
        margin: '-44px 10px 30px',
    },
    timelineContent:{
        marginTop: '2px',
        marginBottom: '12px',
    } 
    
}))