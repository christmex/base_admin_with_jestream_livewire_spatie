const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'dark-primary' : '#141b2d',
            'dark-secondary' : '#1f2940',
            'input-dark' : '#2b3858',
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        })
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
