<?php

include('header.php'); //includes the database connectivity files


$result 		 = json_decode($_POST['myData']); //decodes the data from the request from the client
$con_obj     	 = new dbcon();                   //new instance created for db connectivity
$connect_ref 	 = $con_obj->connect();           //contains the object to store connect_red
$type            = $result->type;                   //request type to perform particular type


$response 		  = array();                       //response array stores response data
$user_registration_obj = new user_registration();   	   //new instance created for payment_request_class

date_default_timezone_set('Asia/Calcutta');		   //default timezone set to Asia/Calcutta


if($type == "sign_up"){

    $team_check     = $result -> team_check;


}



class user_registration{

    function get_enquiry_status($response,$connect_ref){

    }

}