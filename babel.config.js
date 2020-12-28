module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@styles': './scss',
          '@assets': './assets',
          '@screens': './screens',
          '@android': './android/app/src/main/assets',
          '@components': './components',
          '@icons': './iconos_app',
          '@scripts': './scripts'
        },
      },
    ],
  ],
};
