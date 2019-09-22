<?php

use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/get-started', function () {
    return Inertia::render('GetStarted');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});


// UI Components
Route::get('/alert', function () {
    return Inertia::render('Alert');
});

Route::get('/avatar', function () {
    return Inertia::render('Avatar');
});

Route::get('/badge', function () {
    return Inertia::render('Badge');
});

Route::get('/button', function () {
    return Inertia::render('Button');
});

Route::get('/card', function () {
    return Inertia::render('Card');
});

Route::get('/datepicker', function () {
    return Inertia::render('Datepicker');
});

Route::get('/dropdown', function () {
    return Inertia::render('Dropdown');
});

Route::get('/heading', function () {
    return Inertia::render('Heading');
});

Route::get('/input', function () {
    return Inertia::render('Input');
});

Route::get('/radio', function () {
    return Inertia::render('Radio');
});

Route::get('/simple-editor', function () {
    return Inertia::render('SimpleEditor');
});

Route::get('/select', function () {
    return Inertia::render('Select');
});

Route::get('/search', function () {
    return Inertia::render('Search');
});

Route::get('/spinner', function () {
    return Inertia::render('Spinner');
});

Route::get('/switch', function () {
    return Inertia::render('Switch');
});

Route::get('/table', function () {
    return Inertia::render('Table');
});

Route::get('/toast', function () {
    return Inertia::render('Toast');
});


// UI Examples

Route::get('/example-navbar', function () {
    return Inertia::render('Examples/Navbar');
});

Route::get('/login', function () {
    return Inertia::render('Examples/Login');
});

Route::get('/register', function () {
    return Inertia::render('Examples/Register');
});

Route::get('/layout-one', function () {
    return Inertia::render('Examples/LayoutOne');
});

Route::get('/layout-two', function () {
    return Inertia::render('Examples/LayoutTwo');
});

Route::get('/landing-page', function () {
    return Inertia::render('Examples/LandingPage');
});


Route::post('/test/store', 'TestController@store');
