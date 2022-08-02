import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it is still valid
    const token = this.getToken();
    return !token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    //Retrieves the user token from LocalStroage
    localStorage.getItem("id_token");

    window.location.assign("/");
  }

  login() {
    //clear use token and profile data from localStorage
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
