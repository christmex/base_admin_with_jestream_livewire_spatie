@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'border-transparent rounded-md shadow-sm focus:outline-none outline-none text-black']) !!}>
