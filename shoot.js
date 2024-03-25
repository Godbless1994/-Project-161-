AFRAME.registerComponent("bowlingBall", {
    init: function () {
      this.shootBowlingBalls();
    },
    shootBowlingBall: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var bowlingBall = document.createElement("a-entity");
  
          bowlingBall.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
  
          bowlingBall.setAttribute("material", "color", "black");
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          bowlingBall.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          bowlingBall.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          scene.appendChild(bowlingBall);
        }
      });
    },
  });
  