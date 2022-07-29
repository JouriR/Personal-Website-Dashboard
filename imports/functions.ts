export function getApiLink() {
  if (process.env.APP_ENV === "local") {
    return process.env.API_LOCAL;
  } else {
    return process.env.API_PROD;
  }
}
