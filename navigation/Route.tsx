import Home from '../screens/Home';
import {AppRoute} from '../common/types/common.type';

const appRoutes: {[key: string]: AppRoute} = {
  home: {
    name: 'Home',
    component: Home,
  },
};

export default appRoutes;
