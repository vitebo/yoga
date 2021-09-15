import { getElevation, generator } from './theme';

const elevation = props =>
  generator({
    props,
    prop: ['boxShadow', 'bs', 'elevation'],
    cssProperty: 'elevation',
    getter: getElevation,
    transform: value => String(value),
  });

export { elevation };
