import React from 'react';
import moment from 'moment';
import {
  WeatherSection,
  WeatherTitle,
  WeatherInner,
  WeatherImage,
  WeatherInfo,
} from './styles';

const WeatherItem = ({
  applicable_date,
  the_temp,
  weather_state_abbr,
  weather_state_name,
}) => {
  return (
    <WeatherSection>
      <WeatherTitle>{moment(applicable_date).format('Do MMMM')}</WeatherTitle>
      <WeatherInner>
        <WeatherImage src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`} alt={weather_state_name} />
        <WeatherInfo>
          <div>{Math.floor(the_temp)}&deg;</div>
          <div>{weather_state_name}</div>
        </WeatherInfo>
      </WeatherInner>
    </WeatherSection>
  );
};

export default WeatherItem;
