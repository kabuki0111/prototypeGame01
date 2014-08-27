
function Update () {
}

function OnGUI(){
//	GUI.Label ( Rect (Screen.width/2 -50, Screen.height/2, 100, 60), "Prototype1" );
	if ( GUI.Button ( Rect (Screen.width/2 -70, Screen.height/2 +30, 100, 25), "GameStart" ) ){
//		print( "Game Start!!" );
		Application.LoadLevel("Game");
	}
}