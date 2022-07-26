import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it is still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    //Retrieves the user token from LocalStroage
    return localStorage.getItem("id_token");
  }

  login(idToken, isAdmin) {
    // console.log(isAdmin);
    //Save user token to localStorage
    localStorage.setItem("id_token", idToken);
    localStorage.setItem("is_admin", isAdmin);
    window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("is_admin");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  }

  admin() {
    return localStorage.getItem("is_admin");
  }
}

export default new AuthService();
