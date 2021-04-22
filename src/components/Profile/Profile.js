import useStyles from './styles'
import React from 'react'
import { Typography } from '@material-ui/core'
import avatar from '../../assets/images/avatar.jpg'
import CustomTimeline from '../Timeline/Timeline'

import resumeData from '../../utils/resumeData'

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
                <CustomTimeline/>
                <br/>
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile
