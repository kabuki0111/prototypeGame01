var walkSpeed : float = 3.0;
var jumpPower : float = 8.0;
var gravity : float = 20.0;
private var velocity : Vector3;

function FixedUpdate() {
var controller : CharacterController = GetComponent(CharacterController);

velocity.x = Input.GetAxis("Horizontal") * walkSpeed;

if (controller.isGrounded) {

if (Input.GetButton("Jump")){
	velocity.y = jumpPower;
	}
}

velocity.y -= gravity * Time.deltaTime;

controller.Move(velocity * Time.deltaTime);
}
@script AddComponentMenu("Player/PlayerController");