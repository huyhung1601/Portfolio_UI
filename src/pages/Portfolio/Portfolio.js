import { Grid, Tabs,Tab, CardActionArea, CardMedia, CardContent, Typography, Card, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import React, { useState } from 'react'
import resumeData from '../../utils/resumeData'
import './Portfolio.css'
const Portfolio = () => {
    const [tabValue, setTabValue] = useState('All')
    const [projectDialog, setProjectDialog] =useState(false)
    const ProjectDialog = () =>(
        <Dialog 
            maxWidth='md'
            fullWidth
            className='projectDialog' 
            open={projectDialog} 
            onClose={()=> setProjectDialog(false)}
        >
            <DialogTitle onClose={()=> setProjectDialog(false)}> {projectDialog.title}</DialogTitle>
            <img src={projectDialog.image} alt='' className='projectDialog_image'/>
            <DialogContent>
                <Typography className='projectDialog_description'> {projectDialog.description} </Typography>
            </DialogContent>
            <DialogActions className='projectDialog_actions'>
                {projectDialog?.links?.map(link =>(
                    <a href={link} target='_blank' className='projectDialog_icon'>{link.icon} </a>
                ))}
            </DialogActions>
        </Dialog>
    )
    return (
        <Grid container className='section pb_45 pt45'>
            {/**Title */}
            <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Portfolio</h6>
            </Grid>
            {/**Tabs */}
            <Grid item xs={12}>
                <Tabs 
                    value={tabValue} 
                    indicatorColor='white'
                    className='customTabs'
                    onChange={(e,newValue)=>setTabValue(newValue)}
                >
                    <Tab 
                        label='All' 
                        value='All' 
                        className={tabValue == 'All'? 'customTabs_item active' : 'customTabs_item'}
                    />
                    {[...new Set(resumeData.projects.map(item =>item.tag))].map(
                        (tag)=>(
                            <Tab
                                label={tag}
                                value={tag}
                                className={
                                    tabValue == tag
                                    ? 'customTabs_item active'
                                    : 'customTabs_item'
                                }
                            />
                        ))}
                </Tabs>
            </Grid>
            {/**Projects */}
            <Grid item xs={12} container spacing={2}>
                {resumeData.projects.map(project =>(
                    <>
                    {tabValue == project.tag || tabValue == 'All' ?(
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Grow in timeout={1000}>
                        <Card className='customCard' onClick={()=>setProjectDialog(project)}>
                            <CardActionArea>
                                <CardMedia
                                    title={project.title}
                                    className='customCard_image'
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant ='body2'className='customCard_title'>{project.title}</Typography>
                                    <Typography variant='caption' className='customCard_description'>{project.description}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Grow>
                    </Grid>) : null }
                    </>
                ))}

            </Grid>
            <ProjectDialog/>
        </Grid>
        
    )
}

export default Portfolio
