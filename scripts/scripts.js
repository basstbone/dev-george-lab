$("button").click(function(){
    $.getJSON("https://basstbone.github.io/dev-george-lab/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });