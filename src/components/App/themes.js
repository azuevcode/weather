export const getThemeByWeather = (attr) => {
  switch (attr) {
    case 'c':
      return '#fdf5de';
    case 's':
    case 'lc':
    case 'hc':
      return '#f5fafd';
    case 'lr':
    case 'hr':
    case 't':
    case 'h':
      return '#eaeaea';
    case 'sn':
    case 'sl':
      return '#eef6f9';
    default:
      return '#fff';
  }
};
