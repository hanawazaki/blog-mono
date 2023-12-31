<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('User/Index');
    }

    public function bookmarks()
    {
        return inertia('Dashboard/Bookmarks');
    }

    public function myPosts()
    {
        return inertia('Dashboard/Posts/Index');
    }

    public function getPosts()
    {
        return inertia('Dashboard/Posts/Index');
    }

    public function getUsers()
    {
        return inertia('Dashboard/Users/Index');
    }

    public function admin()
    {
        return inertia('Admin/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
