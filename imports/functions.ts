export function getApiLink() {
  if (process.env.NEXT_PUBLIC_APP_ENV === "local") {
    return process.env.NEXT_PUBLIC_API_LOCAL;
  } else {
    return process.env.NEXT_PUBLIC_API_PROD;
  }
}
