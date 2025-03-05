import { Activity, Briefcase, Target, Users } from "react-feather";


export const DashboardStatsData = [
   {
      id: 1,
      title: "Projects",
      value: 18,
      icon: <Briefcase size={18} />,
      statInfo: '<span className="text-dark me-2">2</span> Completed'
   },
   {
      id: 2,
      title: "Active Task",
      value: 132,
      icon: <Activity size={18} />,
      statInfo: '<span className="text-dark me-2">28</span> Completed'
   },
   {
      id: 3,
      title: "Teams",
      value: 12,
      icon: <Users size={18} />,
      statInfo: '<span className="text-dark me-2">1</span> Completed'
   },
   {
      id: 4,
      title: "Productivity",
      value: '76%',
      icon: <Target size={18} />,
      statInfo: '<span className="text-dark me-2">5%</span> Completed'
   }
];
export default DashboardStatsData;
