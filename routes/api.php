<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get ('workers/get-workers/{id}', [\App\Http\Controllers\WorkerController::class,'show1']);

Route::apiResource('companies', \App\Http\Controllers\CompanyController::class);
Route::apiResource('workers', \App\Http\Controllers\WorkerController::class);


