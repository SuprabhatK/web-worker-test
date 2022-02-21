var input_rows = document.querySelector('#rows');
var input_columns = document.querySelector('#columns');
var input_rows_sqr = document.querySelector('#rows_sqr');
const table_submit_btn = document.querySelector('.table-submit-btn');
const tablse_submit_sqr_btn = document.querySelector('.table-submit-sqr-btn');
var main_render_table = document.querySelector('.main-render-table');
var main_render_table_sqr = document.querySelector('.main-render-table-sqr');

// function web_worker() {
    $(table_submit_btn).on('click', function () {
        if (input_rows.value == "" || input_rows.value == null ||
            input_columns.value == "" || input_columns.value == null) {
            // calculate_Table(input_rows.value = 10, input_columns.value=10);
            alert('please enter some value')
        } else {
            if (window.Worker) {
                const myWorker = new Worker("worker.js");

                myWorker.postMessage([input_rows.value, input_columns.value]);

                myWorker.onmessage = function (e) {
                    main_render_table.innerHTML = e.data;
                }

            }
        }
    })

    // $(tablse_submit_sqr_btn ).on('click',function(){
    //     if(window.Worker){
    //         const myWorker = new Worker("worker.js");
    //         myWorker.postMessage([input_rows_sqr.value])

    //         myWorker.onmessage = function(e){
    //             main_render_table.innerHTML = e.data;
    //         }
    //     }
    // })
// }

// function not_web_worker(){
//     $(table_submit_btn).on('click',function(){ 
//         if (input_rows.value == "" || input_rows.value == null || 
//         input_columns.value == "" || input_columns.value == null){
//             // calculate_Table(input_rows.value = 10, input_columns.value=10);
//             alert('please enter some value')
//         }else{
//             calculate_Table(input_rows.value, input_columns.value);
//         }
//     })
    
    $('.table-submit-sqr-btn').on('click',function(){
        calculate_square(input_rows_sqr.value)
    })
// }

// function calculate_Table(input_rows,input_columns){
//     let render_table = "<table border='1' width = '500' cellspacing='0'cellpadding='5'>";
//         for(i=1;i<=input_rows;i++){
//             render_table = render_table + "<tr>";
//             var j = 1;
//             while(j<=input_columns){
//                 render_table = render_table + "<td>" + i*j+ "</td>";
//                 j = j+1;
//             }
//             render_table = render_table + "</tr>";
//         }
//         render_table = render_table + "</table>";
//         main_render_table.innerHTML=render_table;
// }

function calculate_square(input_rows){
    let render_table = "<table border='1' width = '500' cellspacing='0'cellpadding='5'>";
    for(i=1;i<=input_rows;i++){
        render_table = render_table + "<tr>";
        render_table = render_table + "<td>" + i*i+ "</td>";
        render_table = render_table + "</tr>";
    }
    render_table = render_table + "</table>";
    main_render_table_sqr.innerHTML=render_table;
}



// $('a[href="#multiplication"]').click(function () {
//     $('#multiplication').attr('hidden', false);
//     $('#square_root').attr('hidden', true);
// })
// $('a[href="#square_root"]').click(function () {
//     $('#square_root').attr('hidden', false);
//     $('#multiplication').attr('hidden', true);
// })


// $('#toggle').on('click', function () {
//     if ($(this).is(':checked')) {
//         $('.web-worker-tooltip').text('Web Worker Service is Enabled')
//         web_worker();
//     }
//     else {
//         $('.web-worker-tooltip').text('Web Worker Service is Disabled')
//         not_web_worker();
//     }
// });
