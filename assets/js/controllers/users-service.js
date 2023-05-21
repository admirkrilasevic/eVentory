var Users = {

  init: function(){
    Users.getUsers();
    Users.validate();
  },

  getUsers: function(){
    $("#users-table").DataTable({
      processing: true,
      bDestroy: true,
      ajax: {
        url: "rest/api/users",
        type: "GET",
        dataSrc: function(resp){
          return resp;
        },
      },
      columns: [
        { "data": "id", 
          "render": function ( data, type, row, meta ) {
            return '<span>'+data+'</span><a class="pull-right edit-button" onclick="Users.openEditModal('+data+')"><i class="fa fa-edit"></i></a>';
          }
        },
        { "data": "firstName" },
        { "data": "lastName" },
        { "data": "email" }
      ]
    });
  },

  openAddModal: function(){
    $("#myUserModalLabel").html("Add user");
    $("#add-user-modal").modal("show");
  },

  openEditModal: function(id){
    RestClient.get(
      "rest/api/users/"+id,
      function(data) {
        $("#add-user *[name='id']").val(data.id);
        $("#add-user *[name='firstName']").val(data.firstName);
        $("#add-user *[name='lastName']").val(data.lastName);
        $("#add-user *[name='email']").val(data.email);
        $("#add-user *[name='password']").val(data.password);
        $("#myUserModalLabel").html("Edit user");
        $(".delete-button").removeClass("hide");
        $("#add-user-modal").modal("show");
      }
    );
  },

  closeModal: function(){
    $("#add-user").trigger("reset");
    $("#add-user *[name='id']").val("");
    $(".delete-button").addClass("hide");
    $('#add-user-modal').modal("hide");
  },

  updateUser: function(user){
    RestClient.put(
      "rest/api/users/"+user.id,
      user,
      function(data) {
        toastr.success("User has been updated");
        Users.getUsers();
        Users.closeModal();
      }
    );
  },

  addUser: function(user){
    RestClient.post(
      "rest/api/users",
      user,
      function(data) {
        toastr.success("User has been added");
        Users.getUsers();
        Users.closeModal();
      }
    );
  },

  validate: function() {
    $("#add-user").validate({
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        email: "Please enter a valid email address"
      },
      submitHandler: function(form, event) {
        event.preventDefault();
        var data = Utils.form2json(form);
        if (data.id){
          Users.updateUser(data);
        } else {
          Users.addUser(data);
        }
      }
    });
  },

  deleteUser: function(){
    var id = $("#add-user *[name='id']").val();
    RestClient.delete(
      "rest/api/users/"+id,
      function(data) {
        toastr.success("User has been deleted");
        Users.getUsers();
        Users.closeModal();
      }
    );
  }

}
