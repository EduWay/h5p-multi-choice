import $ from 'jquery';

import { ContentType } from 'eduway-h5p-lib';
import '../css/multichoice.css';
import content from './content.json';
import MultiChoice from '../src/index';

MultiChoice.prototype = $.extend({},
  ContentType(false).prototype,
  MultiChoice.prototype);

let instance = new MultiChoice(content, 'app');

const $attachTo = $('#app');
$attachTo.toggleClass('h5p-standalone', false);
instance.attach($attachTo);
/*
H5P.trigger(instance, 'domChanged', {
    '$target': $attachTo,
    'library': machineName,
    'key': 'newLibrary'
}, {
    'bubbles': true,
    'external': true
});
H5P.trigger(instance, 'resize');
*/
