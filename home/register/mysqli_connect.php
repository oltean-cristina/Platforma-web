<?php

// definim variabilele constante
define('DB_NAME', 'register_db');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_HOST', 'localhost');

try{

    // conectam variabilele intre ele
    $con = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    // limbajul intalnit
    mysqli_set_charset($con, 'utf8');


}catch (Exception $ex){
    print "An Exception occurred. Message: " . $ex->getMessage();
} catch (Error $e){
    print "The system is busy please try later";
}