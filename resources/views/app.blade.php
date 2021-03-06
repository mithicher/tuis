<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ url('css/prism-hopscotch.css') }}" rel="stylesheet">
    <link href="{{ url('css/prism.css') }}" rel="stylesheet">
    <script src="{{ mix('js/app.js') }}" defer></script>
</head>

<body class="antialiased text-gray-600 bg-gray-100 font-sans">
    @inertia
</body>

</html>