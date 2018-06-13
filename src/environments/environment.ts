// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAz1E7DRfF6FVYzSh9sBx-ICvaeB3X4-OA",
    authDomain: "gallery-fb2f9.firebaseapp.com",
    databaseURL: "https://gallery-fb2f9.firebaseio.com",
    projectId: "gallery-fb2f9",
    storageBucket: "gallery-fb2f9.appspot.com",
    messagingSenderId: "411653456512"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
