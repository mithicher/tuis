<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Request;

class TestController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'photo' => 'required|image',
            'selectedValue' => 'required',
            'text' => 'required'
        ]);

        $fileName = $request->file('photo')->store('public/users');

        return redirect()->back();

        // return response()->json([
        //     'data' => $fileName
        // ], 200, [
        //     'Vary' => 'Accept',
        //     'X-Inertia' => true,
        // ]);

        // Request::validate([
        //     'selectedValue' => ['required'],
        //     'text' => ['required'],
        //     'photo' => ['required', 'image']
        // ]);
    }
}
