module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-nesting',
    'postcss-flexbugs-fixes',
    [
      'cssnano',
      {
        preset: 'advanced',
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./apps/homepage/**/*.{js,jsx,ts,tsx}'],
        safelist: ['html', 'body'],
        defaultExtractor: (content) => content.match(/[\w-/:.%]+(?<!:)/g) || [],
      },
    ],
  ],
}
