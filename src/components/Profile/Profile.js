import useStyles from './styles'
import React from 'react'
import { Typography } from '@material-ui/core'
import avatar from '../../assets/images/avatar.jpg'
import CustomTimeline, {CustomTimelineSeparator}from '../Timeline/Timeline'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import resumeData from '../../utils/resumeData'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import Controls from '../Controls/Controls'
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem =({title,text,link})=>{
    const classes= useStyles()
    return (    
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className={classes.timelineContent}>
            {link ? (
            <Typography>
                <span className={classes.timelineDetail}>{title}:</span> 
                <a href={link} target='_blank'>
                    {text}
                </a>
            </Typography>):(
                <Typography>
                    <span className={classes.timelineDetail}>{title}:</span> {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)}

const Profile = () => {
    const classes= useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.profileName}>  
                <Typography component='' variant='h6'>{resumeData.name}</Typography>
                <Typography variant='subtitle1'>{resumeData.title}</Typography>
            </div>
            <figure className={classes.profileImage}>
                <img className={classes.avatar} src={avatar} alt=''/>
            </figure>
            <div className={classes.profileInformation}>
                <CustomTimeline
                    icon={<PersonOutlineIcon/>}                    
                >
                    <CustomTimelineItem title='Name' text={resumeData.name}/>
                    <CustomTimelineItem title='Title' text={resumeData.title}/>
                    <CustomTimelineItem title='Email' text={resumeData.email}/>

                    {Object.keys(resumeData.socials).map(key =>(
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                    ))}
                </CustomTimeline>
                <br/>
                <Controls.Button  text={'Download Cv'} icon ={<GetAppIcon/> }/>
            </div>
        </div>
    )
}

export default Profile
