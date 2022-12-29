
<!-- لربط php مع mysql -->
<?php 
$dsn = 'mysql:host=localhost;dbname=hanshop';
$user ='root';
$pass = '';
try{
$db = new PDO($dsn,$user,$pass);
echo "gamal ahmed";
}
catch(PDOException $y){
echo 'error' .$y->getMessage();

}
?>