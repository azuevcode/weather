import styled from 'styled-components';

export const WeatherSection = styled.section`
  display: flex;
  /* height: calc(100% - 40px); */
  align-items: center;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 60px 0;
`;

export const WeatherTitle = styled.h1`
  margin-top: 0;
  font-size: 2rem;
  margin: 40px 0;
`;

export const WeatherInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const WeatherImage = styled.img`
  width: 270px;
  height: auto;
  max-width: 100%;
  margin: 0 20px;
`;

export const WeatherInfo = styled.div`
  margin: 40px;
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
`;
