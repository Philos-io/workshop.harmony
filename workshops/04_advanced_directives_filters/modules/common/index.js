import angular, {module} from '../../lib/';
import NavController     from './nav/navcontroller';

module('common', [])
  .controller('NavController', NavController);
