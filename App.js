import { createStackNavigator } from 'react-navigation';
import Home_screen from "./src/screens/home_screen";
import Geolocation from "./src/screens/geolocation";
import Forecast from "./src/components/ForecastCard";
import Login from "./src/screens/login";
import Wrong from "./src/screens/wrong";

export default App = createStackNavigator(
    {
        Login: { screen: Login },
        Wrong: { screen: Wrong },
        Home: { screen: Home_screen },
        Geoloc: { screen: Geolocation },
        Forcast: { screen: Forecast },
    }
);
