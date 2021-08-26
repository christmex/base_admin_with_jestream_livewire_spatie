<div class="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0">
    <div>
        {{ $logo }}
    </div>

    <div class="w-96 sm:max-w-md mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg bg-dark-secondary">
        {{ $slot }}
    </div>

    <x-footer-copyright></x-footer-copyright>
</div>
