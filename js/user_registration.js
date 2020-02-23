function userRegistration(){

    this.send_data = function(user_data){

        var response_data='';
        
            ajaxcall.send_data(user_data, 'user_registration', function(data) {
                
            response_data = data;
            
            });
            
        return response_data;
    }


    this.process_data = function(data) {

        var data        = JSON.parse(data);
        return data;
    }



}

$(document).ready(function() {

    var userRegistrationObj = new userRegistration();

    

});