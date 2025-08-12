export const msalConfig = {
  auth: {
    clientId: "",
    authority: "https://login.microsoftonline.com/57084445-e440-441f-bc3f-fabe8cbb2535",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // or "localStorage"
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
