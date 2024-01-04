<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $xxx = ["size","pepperoni","bacon","chicken","mushrooms","tomatoes","jalapeños","pineapple","spinach","mozzarela","gorgonzola","chedar","feta","basil","parsley","alfredosauce","anchovies"];
    $inPackage = "[";
    foreach($xxx as $x)
    {
        if(isset($_POST[$x]))
        {
            if($x=="size"){
                $inPackage=$inPackage.$_POST[$x];
            }else{
                $inPackage=$inPackage.",".$x;
            }
        }
    }

    $inPackage = $inPackage."]";
    if(!isset($_COOKIE["openname"])){
        setcookie("openname", $inPackage, time()+ (86400 * 7), "/");
    }
    else{
        $finalval= $_COOKIE["openname"].$inPackage;
        setcookie("openname", $finalval, time()+ (86400 * 7), "/");
        setcookie("openname", $finalval, time()+ (86400 * 7),"/","http://localhost:3000");
    }
    header("Location: http://localhost:3000");
?>