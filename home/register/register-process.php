<?php

require ('helper.php');
// error variabla
$error = array();

$firstName = validate_input_text($_POST['firstName']);
if (empty($firstName)){
    $error[] = "You forgot to enter your first Name";
}

$lastName = validate_input_text($_POST['LastName']);
if (empty($lastName)){
    $error[] = "You forgot to enter your Last Name";
}

$email = validate_input_email($_POST['email']);
if (empty($email)){
    $error[] = "You forgot to enter your Email";
}

$password = validate_input_text($_POST['password']);
if (empty($password)){
    $error[] = "You forgot to enter your password";
}

$confirm_pwd = validate_input_text($_POST['confirm_pwd']);
if (empty($confirm_pwd)){
    $error[] = "You forgot to enter your Confirm Password";
}

$files = $_FILES['profileUpload'];
$profileImage = upload_profile('./assets/profile/', $files);

if(empty($error)){
    // inregistram un nou utilizator 
    $hashed_pass = password_hash($password, PASSWORD_DEFAULT);
    require ('mysqli_connect.php');

    // facem un query
    $query = "INSERT INTO user ( firstName, lastName, email, password, profileImage, registerDate )";
    $query .= "VALUES( ?, ?, ?, ?, ?, NOW())";

    // initializam a statement
    $q = mysqli_stmt_init($con);

    // preparam sql statement
    mysqli_stmt_prepare($q, $query);

    // bind values
    mysqli_stmt_bind_param($q, 'sssss', $firstName, $lastName, $email, $hashed_pass, $profileImage);

    // executam statementul
    mysqli_stmt_execute($q);

    if(mysqli_stmt_affected_rows($q) == 1){

        // start seassion
        session_start();

        // cream o sessiune variabila
        $_SESSION['userID'] = mysqli_insert_id($con);

        header('location: login.php');
        exit();
    }else{
       printf("Error: %s.\n", mysqli_stmt_error($q));
    }

}else{
    echo 'not validate';
}


















