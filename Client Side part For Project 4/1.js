let processdata = () => {

    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://localhost:5850/");
    // xhr.onload = ((data) => {
    //     const jsondoc = xhr.responseText;
    //     //   console.log(jsondoc);
    //     domOperation(jsondoc);
    // })
    // xhr.send();
    $.ajax("http://localhost:5850/").done((jsondata) => {
        domOperation(jsondata);
    })
}


function domOperation(jsondata) {
    console.log(jsondata);

    //for (let i = 0; i < jsondata.data.length; i++) {
    let newElement = $('#parentblock :nth-child(1)').clone(true);

    //$(newElement).css('display', 'flex')
    newElement.html(jsondata.first_name + " " + jsondata.last_name);

    $("#parentblock :nth-child(1)").append(newElement);
    //}
};   
