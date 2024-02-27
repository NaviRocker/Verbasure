import { lazy } from "react";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
const LoginRegLayout = lazy(() => import("../layouts/loginregLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const ModuleType = lazy(() => import("../views/ModuleType.js"));
const VideoModule = lazy(() => import("../views/VideoModule.js"));
const ListenModule = lazy(() => import("../views/ListenModule.js"));
const About = lazy(() => import("../views/About.js"));
const Home =lazy(() => import("../views/Home.js"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Login = lazy(() => import("../views/login.js"));
const Signup = lazy(() => import("../views/Signup.js"));
const GetStarted = lazy(() => import("../views/GetStarted.js"));
const UploadPicture = lazy(() => import("../views/FileUpload.js"));
const ReadModule = lazy(() => import("../views/ReadModule.js"));
const MainDashboard = lazy(() => import("../views/MainDashboard.js"));
const Leaderboard = lazy(() => import("../views/Leaderboard.js"));
const TravelSrilanka =lazy(() => import("../views/TravelSrilanka.js"));
const ContactUs =lazy(() => import("../views/ContactUs.js"));
const DayAtUni =lazy(() => import("../views/DayAtUniversity.js"));
const EnorollingCourses =lazy(() => import("../views/EnrollingCourses.js"));
const AttendingLectures =lazy(() => import("../views/AttendingLectures.js"));
const DiscussionGroups =lazy(() => import("../views/DiscussionGroup.js"));
const ExtraActivities =lazy(() => import("../views/ExtraActivities.js"));
const RoadMap =lazy(() => import("../views/RoadMap.js"));
/*****Routes******/

const ThemeRoutes = [


  
  {
    path:"/",
    element:<LoginRegLayout/>,
    children: [
      { path: "/", exact: true, element: <GetStarted /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/signup", exact: true, element: <Signup /> },
      { path: "/getstarted", exact: true, element: <GetStarted /> },
      { path: "/upload", exact: true, element: <UploadPicture /> },
    ],
  },
  
  
  {
    path: "/",
    element: <FullLayout />,
    children: [
      
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/maindashboard", exact: true, element: <MainDashboard /> },
      { path: "/videomodule", exact: true, element: <VideoModule /> },
      { path: "/readmodule", exact: true, element: <ReadModule /> },
      { path: "/listenmodule", exact: true, element: <ListenModule /> },
      { path: "/moduletype", exact: true, element: <ModuleType /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/leaderboard", exact: true, element: <Leaderboard /> },
      { path: "/travelsrilanka", exact: true, element: <TravelSrilanka /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/contactus", exact: true, element: <ContactUs /> },
      { path: "/dayatuni", exact: true, element: <DayAtUni /> },
      { path: "/enrollingincourses", exact: true, element: <EnorollingCourses /> },
      { path: "/attendinglectures", exact: true, element: <AttendingLectures /> },
      { path: "/discussiongroups", exact: true, element: <DiscussionGroups /> },
      { path: "/extraactivities", exact: true, element: <ExtraActivities /> },
      { path: "/roadmap", exact: true, element: <RoadMap /> },
    ],


  },
 
 
];



export default ThemeRoutes;