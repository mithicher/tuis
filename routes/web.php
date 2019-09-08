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

Route::get('/badge', function () {
    return Inertia::render('Badge');
});

Route::get('/button', function () {
    return Inertia::render('Button');
});


// UI Examples

Route::get('/example-navbar', function () {
    return Inertia::render('Examples/Navbar');
});

Route::post('/test/store', 'TestController@store');
