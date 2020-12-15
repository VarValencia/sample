module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@styles': './scss',
          '@assets': './icons_app',
        },
      },
    ],
  ],
};
