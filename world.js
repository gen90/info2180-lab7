window.onload = function(){
    var search = document.getElementById('lookup');
    console.log(search)
    search.addEventListener('click',function(){
        console.log(2)
        var request = new XMLHttpRequest();
        request.onreadystatechange = searchCountry;
        console.log(document.getElementById('country').value)
        request.open('GET',"world.php?country=" + document.getElementById('country').value);
        request.send();
        function searchCountry(){
            console.log(request);
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    document.getElementById('result').innerHTML = request.responseText;
                    console.log(22)
                } else {
                    alert('There was a problem with the request.' );
                }
            }
        }

    });
}




