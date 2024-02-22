export function loginRedirectCall() {
  let path = window.location.protocol + "//" + window.location.host + "/"
  window.location.href = path
}

export function logOutRedirectCall() {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token")
    loginRedirectCall()
  }
}
