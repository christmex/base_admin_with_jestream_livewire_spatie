@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'border-gray-900 rounded-md shadow-sm bg-dark-secondary bg-input-dark focus:bg-transparent']) !!}>
