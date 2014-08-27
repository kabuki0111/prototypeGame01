
var myTimer : float = 5.0;

 
function Update () {
	if(myTimer > 0){
  		myTimer -= Time.deltaTime;
 	}
 	if(myTimer <= 0){
  		Application.LoadLevel("Title");
 	}
}

/*
function OnGUI(){
	GUI.Label ( Rect (Screen.width/2 -50, Screen.height/2, 100, 60), "The End" );
	GUI.Label ( Rect (Screen.width/2 -50, Screen.height/2 +30, 100, 120), "Takayuki Suzuki" );
}
*/