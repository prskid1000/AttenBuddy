import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Welcome from "./Screen/Login/Welcome";
import Login from "./Screen/Login/Login";
import Student from "./Screen/Student/Student";
import SubjectView from "./Screen/Student/SubjectView";
import Admin from "./Screen/Admin/Admin";
import StudentManage from "./Screen/Admin/StudentManage";
import FacultyManage from "./Screen/Admin/FacultyManage";
import Teacher from "./Screen/Teacher/Teacher";
import ClassView from "./Screen/Teacher/ClassView";
import Attendence from "./Screen/Teacher/Attendence";

const RootStack = createStackNavigator(
    {
        Welcome: Welcome , 
        Login: Login ,
        Student: Student,
        Admin: Admin,
        Teacher: Teacher,
        ClassView: ClassView,
        Attendence: Attendence,
        SubjectView: SubjectView,
        StudentManage: StudentManage,
        FacultyManage: FacultyManage,
    },
    {
        initialRouteName: 'Welcome',
    },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
