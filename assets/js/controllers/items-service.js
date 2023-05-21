var Items = {

    init: function(){
      Items.getItems();
      Items.validate();
    },
  
    getItems: function(){
      $("#items-table").DataTable({
        processing: true,
        bDestroy: true,
        ajax: {
          url: "rest/api/items",
          type: "GET",
          dataSrc: function(resp){
            return resp;
          },
        },
        columns: [
          { "data": "id", 
            "render": function ( data, type, row, meta ) {
              return '<span>'+data+'</span><a class="pull-right edit-button" onclick="Items.openEditModal('+data+')"><i class="fa fa-edit"></i></a>';
            }
          },
          { "data": "name" },
          { "data": "description" },
          { "data": "quantity" },
          { "data": "price", 
            "render": function ( data, type, row, meta ) {
              return '$'+data;
            }
          },
        ]
      });
    },
  
    openAddModal: function(){
      $("#myItemModalLabel").html("Add item");
      $("#add-item-modal").modal("show");
    },
  
    openEditModal: function(id){
      RestClient.get(
        "rest/api/items/"+id,
        function(data) {
          $("#add-item *[name='id']").val(data.id);
          $("#add-item *[name='name']").val(data.name);
          $("#add-item *[name='description']").val(data.description);
          $("#add-item *[name='quantity']").val(data.quantity);
          $("#add-item *[name='price']").val(data.price);
          $("#myItemModalLabel").html("Edit item");
          $(".delete-button").removeClass("hide");
          $("#add-item-modal").modal("show");
        }
      );
    },
  
    closeModal: function(){
      $("#add-item").trigger("reset");
      $("#add-item *[name='id']").val("");
      $(".delete-button").addClass("hide");
      $('#add-item-modal').modal("hide");
    },
  
    updateItem: function(item){
      RestClient.put(
        "rest/api/items/"+item.id,
        item,
        function(data) {
          toastr.success("Item has been updated");
          Items.getItems();
          Items.closeModal();
        }
      );
    },
  
    addItem: function(item){
      RestClient.post(
        "rest/api/items",
        item,
        function(data) {
          toastr.success("Item has been added");
          Items.getItems();
          Items.closeModal();
        }
      );
    },
  
    validate: function() {
      $("#add-item").validate({
        messages: {
          name: "Please enter the item name",
          quantity: {
            required: "Please provide the item quantity",
            min: "Quantity must be greater than 0"
          },
          price: {
            required: "Please provide the item price",
            min: "Price must be greater than 0"
          },
        },
        submitHandler: function(form, event) {
          event.preventDefault();
          var data = Utils.form2json(form);
          if (data.id){
            Items.updateItem(data);
          } else {
            Items.addItem(data);
          }
        }
      });
    },

    deleteItem: function(){
      var id = $("#add-item *[name='id']").val();
      RestClient.delete(
        "rest/api/items/"+id,
        function(data) {
          toastr.success("Item has been deleted");
          Items.getItems();
          Items.closeModal();
        }
      );
    }
  }
  