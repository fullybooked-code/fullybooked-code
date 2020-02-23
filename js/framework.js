var logs = {};
var logs = {};
var ajaxcall = {};
var response_logs = {};
/**
function to send logs to database
*/

/*   wrapper function to pass the data    */
ajaxcall.send_data = function(json_value, url_id, callback) {
  var json_data = JSON.stringify(json_value);

  var mapping = url_mapper(url_id);
  $.ajax({
    type: "POST",
    async: false,
    data: {
      myData: json_data
    },
    url: mapping
  }).done(function(result) {
    callback(result);
  });
};

/*   Asynchronous -    wrapper function to pass the data    */
ajaxcall.send_data_async = function(json_value, url_id, callback) {
  var json_data = JSON.stringify(json_value);
  var mapping = url_mapper(url_id);
  $.ajax({
    type: "POST",
    async: true,
    data: {
      myData: json_data
    },
    url: mapping
  }).done(function(result) {
    callback(result);
  });
};

/*


/*   wrapper function to pass the data    */
ajaxcall.send_data_graphql = function(json_value, callback) {
  var response_data = "";
  var url = "";
  var url_path = window.location.href;


  var query = json_value["query"];
  var variables = json_value["variable"];

  $.ajax({
    async: false,
    url: url,
    type: "POST",
    headers: {
      "content-type": "application/json;charset=utf-8"
    },
    data:
      '{"query":"' + query + '","variables":' + JSON.stringify(variables) + "}"
  }).done(function(response) {
    response_data = response;
    if (callback) callback(response);
  });
  return response_data;
};


response_logs.get_message = function(response_key, callback) {
  var error_log = {
    login_success: "you have logged in successfully!!!",
    login_failed: "login failed"
  };
  return error_log[response_key];
};

function url_mapper(page_id) {
  var pages = {
    user_registration: "model/user_registation.php",
   
  };

  return pages[page_id];
}

var gsession = {};

gsession.setSession = function(key, value) {
  if (value) {
    localStorage.setItem(key, value);
  }
};

gsession.getSession = function(key) {
  return localStorage.getItem(key);
};

gsession.clearSession = function(key) {
  localStorage.removeItem(key);
};

gsession.setTempSession = function(key, value) {
  if (value) {
    sessionStorage.setItem(key, value);
  }
};

gsession.getTempSession = function(key) {
  return sessionStorage.getItem(key);
};

gsession.clearTempSession = function(key) {
  sessionStorage.removeItem(key);
};


$(document).ready(function() {

});