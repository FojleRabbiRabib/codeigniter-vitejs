<?php

namespace FojleRabbiRabib\CodeigniterVite\Config;

class Registrar
{
    public static function View(): array
    {
        return [
            'decorators' => ['FojleRabbiRabib\CodeigniterVite\Decorator'],
        ];
    }
}
