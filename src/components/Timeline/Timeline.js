import React, { Children } from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import useStyles from './styles'
import { Typography } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
const CustomTimeline = ({title,icon, children}) => {
    const classes = useStyles()
    return (
    <Timeline className={classes.root}>
        {/* Item Header */}
        <TimelineItem className={classes.timelineFirstItem}>
            <TimelineSeparator>
                <TimelineDot className={classes.timelineDotHeader}>{icon}</TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant='h6' className={classes.timelineHeader}>
                    {title}
                </Typography>                
            </TimelineContent>            
        </TimelineItem>
        
        {children}
        {/* Remaining Items */}        
    </Timeline>
    )
}
export const CustomTimelineSeparator = () =>{
    const classes = useStyles()
    return(
    <TimelineSeparator className={classes.separatorPadding}>
        <TimelineDot variant={'outlined'} className={classes.timelineDot}/>
        <TimelineConnector />
    </TimelineSeparator>
)};

export default CustomTimeline
