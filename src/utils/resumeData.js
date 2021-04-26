import project from '../assets/images/project.png'
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { YouTube } from '@material-ui/icons';
export default {
    name: 'Huy Hung Nguyen',
    title: 'Front End Developer',

    birthday: '16th Jan 1989',
    email: 'huyhung1601@gmail.com',
    address: 'Canberra, ACT, Australia',
    phone: '0420 600 611',

    socials:{
        Facebook:{
            link: 'https://www.facebook.com/gk.longca',
            text: 'my facebook',
            icon: <FacebookIcon/>,
        },
        LinkedIn:{
            link: 'https://www.linkedin.com/in/henry-nguyen-0a03989b/',
            text: 'my linkedin',
            icon: <LinkedInIcon/>,
        },
        Github:{
            link: 'https://github.com/huyhung1601?tab=repositories',
            text: 'my github',
            icon: <GitHubIcon/>,
        },
    },
    about : 'Web developer with 1 year of experience in designing and developing user interfaces and project management within React, Github and Trello. An Experience in managing a team of three to conduct an e-commerce website for final project at College. Proven ability in optimizing web functionalities that improve data process and workflow efficiencies. Ambitious problem solver with a passion for online businesses, and who would like to join a team of like-minded developers. Experience in creating both logical and innovative solutions to complex web problems. Accomplished individual with a competent background in HTML, CSS, React , Material UI and GitHub.',
    experiences:[
        {
            title: 'React Front End Developer',
            date: 'APRIL 2020 - CURRENT',
            description: `+ Using Trello app to set up project goals and establish project process. \n
            + Proficient in using Git and Github to keep track of code history and manage files. \n
            + Proficient in doing research to find technical solutions. \n
            + Experience in working projects relating to technical solutions for business problems. \n
            + Fundamental understand of API and backend data.`,
        },
        {
            title: 'Assistant Manager',
            date: 'AUG 2016 - JUNE 2020',
            description: `+ Ensuring consistence in the work follow.\n
            + Managing, and training new team members for the job.\n
            + Maintaining high customer level in a fast paced environment.`
        }
    ],
    education: [
        {        
            title: 'Bachelor of Business Information System',
            date: 'MARCH 2018 - DEC 2020',
            description:``
        },
        {        
            title: 'Master of Business And Commerce',
            date: 'FEB 2014 - SEP 2014',
            description:``
        },
        {
            title: 'Certificate IV And Bachelor of Screen And Media',
            date: 'JAN 2016 - SEP FEB 2018',
            description:''
        },
        {
            title: 'Bachelor of Finance',
            date: 'Sep 2009 - Sep 2013',
            description: '',
        }
    ],
    skills:[
        {
            title: 'FRONT_END',
            description: [
                'ReactJS',
                'JavaScript',
                'TypeScript',
                'Bootstrap',
                'Material UI'
            ]
        },
        {
            title: 'SOURCE CONTROL',
            description: ['Git', 'GitHub', ]
        },
        {
            title: 'PROJECT MANAGEMENT',
            description:[
                'Define goals',
                'Establish wireframe and content',
                'Establish design and functionality',
                'Set up team involved',
                'Defnitive action plan',
                'Intensive testing'
            ]
        }
    ],
    projects:[
        {
            tag: 'ReactJs',
            image: project,
            title: 'Project1',
            description : 'This is my project description',
            links: [
                {link: 'https://github.com/huyhung1601?tab=repositories', icon: <GitHubIcon/>}
            ]
        },
        {
            tag: 'ReactJs',
            image: project,
            title: 'Project2',
            description : 'This is my project description',
            links: [
                {link: 'https://github.com/huyhung1601?tab=repositories', icon: <GitHubIcon/>}
            ]
        },
        {
            tag: 'Nodejs',
            image: project,
            title: 'Project3',
            description : 'This is my project description',
            links: [
                {link: 'https://github.com/huyhung1601?tab=repositories', icon: <GitHubIcon/>}
            ]
        },
        {
            tag: 'Nodejs',
            image: project,
            title: 'Project4',
            description : 'This is my project description',
            links: [
                {link: 'https://github.com/huyhung1601?tab=repositories', icon: <GitHubIcon/>}
            ]
        },
    ]
}
/** '\n' : new line */