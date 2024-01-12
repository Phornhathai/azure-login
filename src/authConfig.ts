import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: "293a7bda-7560-4de6-89f8-e6876881e582",
    authority:
      "https://auditmypayrollv1.b2clogin.com/auditmypayrollv1.onmicrosoft.com/B2C_1_SignUpandSignIn",
    knownAuthorities: ["auditmypayrollv1.b2clogin.com"],
    redirectUri: "http://localhost:5173/signin-oidc",
    postLogoutRedirectUri: window.location.origin,
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["https://auditmypayrollv1.onmicrosoft.com/api/question.read"],
};

// // Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
