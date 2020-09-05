let generateData = () => {
    let xhr = XMLHttpRequest();
    xhr.open("GET", "http://localhost:5600/");
    xhr.onreadystatechange = () => {
        // on ready state 4 :: when operation comples with server
        if (xhr.readyState === 4) {
            // server response
            console.log(xhr.responseText);

            // responser server is in string
            let sjson = JSON.parse(xhr.responseText);
            // data.is array or list from server
            console.log(sjson);

            // lets use this list and plot our dom by calling dom logic here
            domlogicHere(sjson.data);
        }
    };

    xhr.send();
}

function domlogicHere(list) {
    console.log(list);
}