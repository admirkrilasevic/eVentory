var LoginService = {
  init: function () {
    var token = localStorage.getItem("user_token");
    if (token) {
      window.location.replace("index.html");
    }
    $("#login-form").validate({
      submitHandler: function (form, event) {
        event.preventDefault();
        var entity = Utils.form2json(form);
        LoginService.login(entity);
      },
    });
  },

  login: function (entity) {
    RestClient.post(
      "rest/login",
      entity,
      function (result) {
        localStorage.setItem("user_token", result.token);
        window.location.replace("index.html");
      }
    );
  },

  logout: function () {
    localStorage.clear();
    window.location.replace("login.html");
  },
};