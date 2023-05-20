var Utils = {

    parseJwt: function(token){
        if (token) {
          var base64Url = token.split(".")[1];
          var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          var jsonPayload = decodeURIComponent(
            atob(base64)
              .split("")
              .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
          return JSON.parse(jsonPayload);
        } else {
          return null;
        }
    },

    checkAdmin: function(token){
        var token = localStorage.getItem("user_token");
        if (token) {
            var user = Utils.parseJwt(token);
            if (user.is_admin) {
                $("#users-link").removeClass("hide");
            }
        } else {
            window.location.href = "login.html";
        }
    }

}