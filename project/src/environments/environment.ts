// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config_api: "https://api.uat.afarmmart.com/pos/v1",
  config_hp:  "http://10.0.130.101:8080/dev/trainee/spserv/v1/",
  ExternalToken: 'Bearer JnqAOGQ99dypVjE',
  config_pic: "https://static.uat.afarmmart.com/image/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const Config = {
  AppName: 'AFarmMart',
  WSPID: 1,
  SysID: 3,
  SCDocType: {
      AFarmmart: 100123, // Sales Channel A-farmmart
  },
  DocType: 100123,
  // SCDocType: 600130,
  OutletID: 16,
  SCDocID: 103,
  PageSize: 24,
  
  ServiceUrl: {
      Local: 'http://127.0.0.1:50085/uat/tabco/mkrplaceserv/v1',

      Public: 'https://api.uat.afarmmart.com/mkrplace/v1' // UAT
  },
  ExternalServiceUrl: 'https://api.uat.afarmmart.com/pos/v1',

};