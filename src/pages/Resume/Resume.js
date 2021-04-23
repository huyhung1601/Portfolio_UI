import { Grid, Typography, Paper} from '@material-ui/core'
import TimelineContent from '@material-ui/lab/TimelineContent'
import React from 'react'
import resumeData from '../../utils/resumeData'
import CustomTimeline, {CustomTimelineSeparator}from '../../components/Timeline/Timeline'
import './Resume.css'
import { Work } from '@material-ui/icons'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineDot from '@material-ui/lab/TimelineDot'
const Resume = () => {
    return (
    <>
        {/* About me */}
        <Grid container className='section pb_45 pt_45' >
            <Grid item  className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text' >About me</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
            </Grid>
        </Grid>
        
        {/**Education and Experience */} 
        <Grid container className='section'>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Resume</h6>
            </Grid>
            <Grid item xs={12} container className='resume_timeline'>
                {/**Experiences */}
                <Grid item sm={12} md={6}>
                    <CustomTimeline  icon ={<Work/>} title='Work Experience'>
                        {resumeData.experiences.map(experience =>(
                            <TimelineItem>
                                <CustomTimelineSeparator/>
                                <TimelineContent className='timeline_content'> 
                                    <Typography className='timeline_title'>
                                        {experience.title}
                                    </Typography>
                                    <Typography className='timeline_date' variant='caption'>
                                        {experience.date}
                                    </Typography>
                                    <Typography className= 'timeline_description' variant='body2'>
                                        {experience.description}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </CustomTimeline>
                </Grid>
                {/**Education */}
                <Grid item sm={12} md={6}>
                    <CustomTimeline  icon ={<Work/>} title='Education'>
                            {resumeData.education.map(education =>(
                                <TimelineItem>
                                    <CustomTimelineSeparator/>
                                    <TimelineContent className='timeline_content'> 
                                        <Typography className='timeline_title'>
                                            {education.title}
                                        </Typography>
                                        <Typography className='timeline_date' variant='caption'>
                                            {education.date}
                                        </Typography>
                                        <Typography className= 'timeline_description' variant='body2'>
                                            {education.description}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                    </CustomTimeline>
                </Grid>
            </Grid>
        </Grid>
        {/**Services */}
        <Grid container>
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>My Services</h6>
            </Grid>
            <Grid item xs={12} container>

            </Grid>
        </Grid> 
        {/**Skills */}
        <Grid container spacing={3} justify='space-between' className graybg pb_45>
            {/*  <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>My Services</h6>
            </Grid>                 */}
            {resumeData.skills.map((skill)=>(
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skill_title'>
                            {skill.title}
                        </Typography>
                        {skill.description.map(element=> (
                            <Typography variant='body2' className='skill_description'>
                                <TimelineDot variant='outlined' className='timeline_dot'/>
                                {element}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>
            ))}
        </Grid> 
        {/**Contacts */}
        <Grid container>
        
        </Grid> 
    </>
    )
}

export default Resume
