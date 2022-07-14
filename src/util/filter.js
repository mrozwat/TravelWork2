import { FilterType} from '../util/util.js';
const dayjs = require('dayjs');
export const filter = {
  [FilterType.ALL]: (point) => point,
  [FilterType.FUTURE]: (point) => point.filter((point) => dayjs(point.date_from)>dayjs()),
  [FilterType.PAST]: (point) => point.filter((point) =>  dayjs(point.date_from)<dayjs()),
};