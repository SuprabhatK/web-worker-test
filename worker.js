onmessage = function(e){
        let render_table = "<table border='1' width = '500' cellspacing='0'cellpadding='5'>";
        for(i=1;i<=e.data[0];i++){
            render_table = render_table + "<tr>";
            var j = 1;
            while(j<=e.data[1]){
                render_table = render_table + "<td>" + i*j+ "</td>";
                j = j+1;
            }
            render_table = render_table + "</tr>";
        }
        render_table = render_table + "</table>";
        postMessage(render_table); 
}

// onmessage = function(e){
//     let render_table = "<table border='1' width = '500' cellspacing='0'cellpadding='5'>";
//     for(i=1;i<=e.data[0];i++){
//         render_table = render_table + "<tr>";
//         render_table = render_table + "<td>" + i*i+ "</td>";
//         render_table = render_table + "</tr>";
//     }
//     render_table = render_table + "</table>";
//     postMessage(render_table);    
// }

