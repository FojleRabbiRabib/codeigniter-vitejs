<?php

namespace FojleRabbiRabib\CodeigniterVite\Config;

use FojleRabbiRabib\CodeigniterVite\Vite;

# Catch all routes
if (Vite::routeIsNotExcluded()) {
    $routes->get('(:any)', 'Home::index');
}