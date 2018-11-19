window.onload = function(){
    var search = document.getElementById('lookup');
    var lookup = document.getElementById('country');
    search.addEventListener('click',function(){

        var request = new XMLHttpRequest();
        request.onreadystatechange = searchCountry;
        if(document.getElementById('checkbox').checked==true){
            request.open('GET',"world.php?all=true",true);
            request.send();
        }
        else{
            if(document.getElementById('country').value!=""){
            request.open('GET',"world.php?country=" + document.getElementById('country').value,true);
            request.send();
            }
        
            else{
                document.getElementById('result').innerHTML = "";
            }
        } 
        function searchCountry(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    document.getElementById('result').innerHTML = request.responseText;
                } else {
                    alert('There was a problem with the request.' );
                }
            }
        }

    });
}




