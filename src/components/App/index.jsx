import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import { getLocationSearchWeatherApi, getLocationWeatherApi } from 'api';
import { LOCATION_CITY } from 'constants.js';

import Navbar from 'components/Navbar';
import WeatherItem from 'components/WeatherItem';
import Week from 'components/Week';

import preloaderImage from './preloader.png';
import { Main, Preloader, PreloaderImage } from './styles';
import { getThemeByWeather } from './themes';

const App = () => {
  const [weekWeather, setWeekWeather] = useState([]);
  const [todayWeather, setTodayWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeekWeahter = async () => {
      try {
        const locationSearchUrl = getLocationSearchWeatherApi();
        const locationSearchResponse = await axios.get(locationSearchUrl, {
          params: {
            query: LOCATION_CITY,
          },
        });
        const locationUrl = getLocationWeatherApi(locationSearchResponse.data[0].woeid);
        const locationResponse = await axios.get(locationUrl);
        const { consolidated_weather } = locationResponse.data;
        const todayDate = (new Date()).getDate();
        const today_weather = consolidated_weather.find(({ applicable_date }) => todayDate === (new Date(applicable_date)).getDate());
        setTodayWeather(today_weather);
        setWeekWeather(consolidated_weather);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };

    getWeekWeahter();
  }, []);


  const todayRenderer = props => <WeatherItem {...props} {...todayWeather} />;
  const weekRenderer = props => <Week {...props} items={weekWeather} />;


  return (
    <Main backgroundColor={getThemeByWeather(todayWeather.weather_state_abbr)}>
      {
        loading ?
          <Preloader>
            <PreloaderImage src={preloaderImage} />
          </Preloader> :
          <>
            <Navbar />
            <Route
              render={({ location }) => (
                <Switch location={location}>
                  <Route exact path="/" render={todayRenderer} />
                  <Route path="/today" render={todayRenderer} />
                  <Route path="/week" render={weekRenderer} />
                  <Redirect to="/" />
                </Switch>
              )}
            />
          </>
      }
    </Main>
  );
};

export default App;
