import project1 from '../assets/images/project1.png'
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
            link: 'https://www.facebook.com/gk.longca',
            text: 'my linkedin',
            icon: <LinkedInIcon/>,
        },
        Github:{
            link: 'https://www.facebook.com/gk.longca',
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

            ]
        }
    ],
    projects:[
        {
            tag: 'ReactJs',
            image: project1,
            title: 'Project1',
            description : 'This is my project description',
            links: [
                {link: 'http://www.google.com', icon: <GitHubIcon/>}
            ]
        },
        {
            tag: 'ReactJs',
            image: project1,
            title: 'Project2',
            description : 'This is my project description',
            links: [
                {link: 'http://www.google.com', icon: <GitHubIcon/>}
            ]
        },
        {
            tag: 'Nodejs',
            image: project1,
            title: 'Project3',
            description : 'This is my project description',
            links: [
                {link: 'http://www.google.com', icon: <GitHubIcon/>}
            ]
        },
        {
            tag: 'Nodejs',
            image: project1,
            title: 'Project4',
            description : 'This is my project description',
            links: [
                {link: 'http://www.google.com', icon: <GitHubIcon/>}
            ]
        },
    ]
}
/** '\n' : new line */