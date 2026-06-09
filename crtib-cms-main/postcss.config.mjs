// Empêche PostCSS de remonter et de charger une config externe
// (ex. ../../postcss.config.js avec tailwindcss). Ce projet n'utilise
// pas Tailwind : aucun plugin PostCSS requis.
export default {
  plugins: {},
}
