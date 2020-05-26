function muestraJson() {
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        type: "GET",
        dataType: "JSON",
        success: function (respuesta) {
            var s = $("#salida");
            var i = document.getElementById("indice").value;
            
            $.each(respuesta, function (index, e) {
                if(e.id == i) {
                 s.append("UserId: "+e.userId+"<br>"+"Id: "+e.id+"<br>"+"title: "+
                         e.title+"<br>"+"body: "+e.body+"<br>");   
                }
            });
        }
    });
}