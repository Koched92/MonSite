/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
//import $ from 'jquery';
var jQuery = require("jquery-easing");

const $ = require('jquery');
import './bootstrap.bundle.js';
import './freelancer.js';
import './jqBootstrapValidation.js';
import './contact_me.js';

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});