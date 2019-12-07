// Wait until the DOM is fully loaded to attach our handlers

$(function() {

    //Add a new burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };


        // Send Post Request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list
            location.reload();
        });
    });


    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devoredState = {
            devoured: 1
        };



        // Send Put Request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });


        $(".trashburger").on("click", function(event) {
            event.preventDefault();

            var id = $(this).data("id");

            // Send the delete request
            $.ajax({
                type: "DELETE",
                url: "/api/burgers/" + id
            }).then(location.reload());
    
        });
    });


