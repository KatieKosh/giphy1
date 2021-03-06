<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Planet Earth</title>
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet">

    <script src="http://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>


    <link rel="stylesheet" href="style.css">
</head>

<body>


    <h2>Planet Earth</h2>


    <button data-earth="Trees">Trees</button> <button data-earth="Mountains">Mountains</button> <button data-earth="Water">Water</button> <button data-earth="Flowers">Flowers</button>
    <button data-earth="Volcanoes">Volcanoes</button> <button data-earth="Rainforest">Rainforest</button>


    <form id="earth-form">
        <!-- <label for="earth-input">Add an Earth Element</label> -->
        <input type="text" id="earth-input"><br>
        <button type="submit" id="add-earth">Add an Earth Element</button>

        <!-- value="Add an Earth Element" -->

    </form>


    <div id="gifsGoHere"></div>



    <script type="text/javascript">
        $(document).ready(function() {
            $("button").on('click', function() {

                var x = $(this).data("earth");
                var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit=10"
                $.ajax({
                        url: queryURL,
                        method: "GET"
                    })
                    .done(function(response) {
                        for (var i = 0; i < response.data.length; i++) {
                            console.log(response.data[i])
                            var earthDiv = $('<div>');
                            var p = $('<p>').text("Rating: " + response.data[i].rating);
                            var earthImage = $('<img>');
                            earthImage.attr('src', response.data[i].images.fixed_height_still.url);
                            earthImage.attr('data-gif', response.data[i].images.fixed_height.url);
                            earthDiv.append(p);
                            earthDiv.append(earthImage);
                            $('#gifsGoHere').append(earthDiv);
                        }
                        $("#gifsGoHere").prepend(earthDiv);
                        //  })

                    })

            })
            // return false;




            $("#add-earth").on('click', function() {
                console.log("can you see me");
                // $("#add-earth").val();
                var earthInput = $("#earth-input").val();
                console.log(earthInput);
            })




            $(document).on("click", "img", function() {

                var srcUrl = $(this).attr("src");
                $(this).attr('src', $(this).attr("data-gif"));
                $(this).attr("data-gif", srcUrl);

            })




        })
    </script>

</body>
