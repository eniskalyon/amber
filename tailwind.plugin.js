// tailwind.plugin.js
const plugin = require('tailwindcss/plugin');

const dynamicColorsPlugin = plugin(function({ addUtilities, theme, variants }) {
  
    const colors = theme('colors');
    let newUtilities = {};

    Object.keys(colors).forEach(color => {
        if (typeof colors[color] === 'object') {
            Object.keys(colors[color]).forEach(shade => {
                const key = `.text-${color}-${shade}`;
                newUtilities[key] = { color: colors[color][shade] };
            });
        }
    });


    addUtilities(newUtilities, variants('textColor'));
});

module.exports = dynamicColorsPlugin;
