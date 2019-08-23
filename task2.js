$(document).ready(function()
{
    $("button").click(function()
                      {
                        var color=$("input").val();
                        $("div").css("background-color",color);
                      });
    
});