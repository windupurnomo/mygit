angular.module('AdminLogin', [])
.controller('LoginAdmin', function($scope){
	$scope.login=function(){
		if($scope.username==="admin"&&$scope.password==="admin"){
			$scope.login1="Anda berhasil login...";
			alert('Selamat Datang Admin', 10);
			setTimeout("location.href='index.html'", 10);
		}else{
			alert("Username dan Password salah!")
		}
		$scope.name=$scope.username;
		$scope.pass=$scope.password;
	}
})