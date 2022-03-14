// .versionrc.js
module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
    },
    {
      filename: 'android/app/build.gradle',
      updater: require.resolve(
        'standard-version-expo/android/native/app-version',
      ),
    },
    {
      filename: 'android/app/build.gradle',
      updater: require.resolve(
        'standard-version-expo/android/native/buildnum/code',
      )(sdkVersion),
    },
  ],
}
