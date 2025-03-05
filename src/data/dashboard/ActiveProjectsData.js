//images
import avatar1 from '@/assets/avatar/avatar1.jpg';
import avatar2 from '@/assets/avatar/avatar2.jpg';
import avatar3 from '@/assets/avatar/avatar3.jpg';
import avatar4 from '@/assets/avatar/avatar4.jpg';
import avatar5 from '@/assets/avatar/avatar5.jpg';
import avatar6 from '@/assets/avatar/avatar6.jpg';
import avatar7 from '@/assets/avatar/avatar7.jpg';
import avatar8 from '@/assets/avatar/avatar8.jpg';
import avatar9 from '@/assets/avatar/avatar9.jpg';
import avatar10 from '@/assets/avatar/avatar10.jpg';
import avatar11 from '@/assets/avatar/avatar11.jpg';
import avatar12 from '@/assets/avatar/avatar12.jpg';
//brands
import dropboxlogo from '@/assets/brands/dropbox-logo.svg';
import slacklogo from '@/assets/brands/slack-logo.svg';
import githublog from '@/assets/brands/github-logo.svg';




export const ActiveProjectsData = [
    {
        id: 1,
        projectName: "Dropbox Design System",
        priority: "Medium",
        priorityBadgeBg: 'warning',
        hours: 34,
        progress: 15,
        brandLogo: dropboxlogo,
        brandLogoBg: 'bg-white',
        members: [
            avatar1,
            avatar2,
            avatar3
        ]
    },
    {
        id: 2,
        projectName: "Slack Team UI Design",
        priority: "High",
        priorityBadgeBg: 'danger',
        hours: 47,
        progress: 35,
        brandLogo: slacklogo,
        brandLogoBg: 'bg-white',
        members: [
            avatar4,
            avatar5,
            avatar6
        ]
    },
    {
        id: 3,
        projectName: "GitHub Satellite",
        priority: "Low",
        priorityBadgeBg: 'info',
        hours: 120,
        progress: 75,
        brandLogo: githublog,
        brandLogoBg: 'bg-white',
        members: [
            avatar7,
            avatar8,
            avatar9
        ]
    },

    {
        id: 4,
        projectName: "Github Event Design",
        priority: "Track",
        priorityBadgeBg: 'success',
        hours: 170,
        progress: 75,
        brandLogo: githublog,
        brandLogoBg: 'bg-white',
        members: [
            avatar10,
            avatar11,
            avatar12
        ]
    }
];
export default ActiveProjectsData;
