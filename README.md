This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Persistance 
- Async Storage
- Redux Persist
. Que use Redux Persist from behind.

> **MMVK** seems to be the actual go to related to persistence.


# Adding Local Images
There's certain rules: 
1. Reduce your image as much as possible

- Size of the image => 1. takes w and h from the img itself

**Note**: You have to have 3 different img sizes (cause pixel density) for different devices

work with images: <yarn add react-native-fast-image>

## Why to use React Native Fast Image:
1. react-native-fast-image proporciona un manejo de caché mejorado en comparación con el componente <Image> predeterminado de React Native.
Priorización de Carga:

2. Permite establecer prioridades de carga para las imágenes, lo cual puede ser útil para asegurarse de que las imágenes críticas se carguen primero.
Soporte para Formatos y Características Adicionales:

3. Ofrece soporte para más formatos de imagen y características como el desvanecimiento de imágenes.
Consistencia:

4. Usar un único componente para manejar todas las imágenes puede llevar a una mayor consistencia y facilidad de mantenimiento en el código.
Optimización del Rendimiento:

Está optimizado para mejorar el rendimiento de carga y visualización de las imágenes.

# Icons
steps:
import { Svg, Path } from 'react-native-svg'
replace svg and path with Svg and Path
add a default fill color to the svg
add a default width and height to the svg

- Life savign toool:
> [React SVGR Playground](https://react-svgr.com/playground/?native=true&typescript=true)

# Custom Fonts
1. download family font
2. src/assets/fonts => paste fonts
3. react-native.config.js:
```javascript
module.exports = {
   assets: ['./src/assets/fonts'], // font path
}
```
4. Link the assets to IOS & Android
```bash
npx react-native-asset
```
5. rebuild IOS & Android
```bash
yarn ios
yarn android
```

**Note**
Add //font-family into your theme file and use fontFamily as prefix, i.e
```typescript
export const theme = {
  colorPurple: '#454C73',
  colorWhite: '#fff',
  colorLavender: '#87677B',
  colorBlue: '#1D84B5',
  colorGrey: '#8E9AAF',
  // fonts
  fontFamilyBold: 'Kalam-Bold',
  fontFamilyRegular: 'Kalam-Regular',
  fontFamilyLight: 'Kalam-Light',

  // spacing
  space10: 10,
};
```
`Just as we did with color`

**Note** Preferiblemente no uses fontWeight en tu app, usa directamente la fontFamily con el weight specific.

# Animations
- There's really two ways to animate your UI in React Native
