<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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
    return Inertia::render('Main/Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/bookmarks', [DashboardController::class, 'bookmarks'])->middleware(['auth', 'verified'])->name('bookmarks');
Route::get('/my-posts', [DashboardController::class, 'myPosts'])->middleware(['auth', 'verified'])->name('myPosts');

Route::get("/detail", [MainController::class, "index"]);

Route::middleware(['auth', 'role:user'])->prefix('user')->name('user.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'admin'])->name('index');
    Route::get('/users', [DashboardController::class, 'getUsers'])->name('getUsers');
    Route::get('/all-posts', [DashboardController::class, 'getPosts'])->name('getPosts');
});

Route::get('/create-post', function () {
    return inertia('Main/Create');
})->middleware(['auth', 'verified'])->name('createPost');

Route::post('/store-post', [MainController::class, 'storePost'])->middleware(['auth', 'verified'])->name('storePost');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
