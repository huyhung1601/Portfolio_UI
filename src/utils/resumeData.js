import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
export default {
    name: 'Huy Hung Nguyen',
    title: 'React Front End Developer',

    birthday: '16th Jan 1989',
    email: 'huyhung1601@gmail.com',
    addres: 'Canberra, ACT, Australia',
    phone: '0420 600 611',

    socials:{
        facebook:{
            link: 'https://www.facebook.com/gk.longca',
            text: 'my facebook',
            icon: <FacebookIcon/>,
        },
        linkedIn:{
            link: 'https://www.facebook.com/gk.longca',
            text: 'my linkedin',
            icon: <LinkedInIcon/>,
        },
        github:{
            link: 'https://www.facebook.com/gk.longca',
            text: 'my github',
            icon: <GitHubIcon/>,
        },
    }
}