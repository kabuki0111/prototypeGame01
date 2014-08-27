static var life = 4;

function Update () {
}


function OnEnterToDeadZone () {
	if( --life <= 0 ){
		life = 4;
		Application.LoadLevel ("Gameover");
		}else{
			Application.LoadLevel( Application.loadedLevelName );
		}
}