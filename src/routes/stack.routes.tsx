import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";
import { UserIdentification } from "../pages/UserIdentification";
import { Welcome } from "../pages/Welcome";
import colors from "../styles/colors";

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator>

            <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}/>

            <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}/>

            <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}/>
            
            <stackRoutes.Screen
            name = "PlantSelect"
            component={PlantSelect}/>

        </stackRoutes.Navigator>
)

export default AppRoutes