import {makeStyles} from '@material-ui/core/styles'

export default makeStyles ((theme)=>({
    root:{
        paddingLeft: theme.spacing(4),
        '& .MuiTimelineItem-root' :{
            minHeight: '0px'
        },
        '& .MuiTimelineItem-missingOppositeContent:before' :{
            display: 'none',
        },
        '& .MuiTimelineConnector-root' :{
            backgroundColor: '#eee'
        }
    },
    timelineHeader:{
        paddingTop: '7px'
    },
    timelineFirstItem: {
        minHeight: '80px'
    },
    timelineDotHeader:{
        color: 'black',
        backgroundColor: '#cddc39',
        fontSize: 'small',
        padding: '10px'
    },
    timelineDot: {
        color: 'black',
        borderColor: '#cddc39',
        fontSize: 'small',
        padding: '2px'  
    },
    separatorPadding:{
        paddingLeft: theme.spacing(2.5)
    },
    
    timelineContent:{
        paddingTop: '0px',
        marginBottom: '20px'
    }
    
}))