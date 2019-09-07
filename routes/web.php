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
Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});


Route::get('/alert', function () {
    return Inertia::render('Alert');
});

Route::get('/badge', function () {
    return Inertia::render('Badge');
});

Route::get('/button', function () {
    return Inertia::render('Button');
});


Route::post('/test/store', 'TestController@store');
