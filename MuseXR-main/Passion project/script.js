const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

let i = 0;

let models = ["MuseXr_podium.glb", "cyan_artifact.glb", "african.glb", "african.glb"]


const createScene = function () {
    scene.clearColor = new BABYLON.Color3.Black;

    const alpha = Math.PI / 4;
    const beta = Math.PI / 3;
    const radius = 8;
    const target = new BABYLON.Vector3(0, 0, 0);

    const camera = new BABYLON.ArcRotateCamera("Camera", alpha, beta, radius, target, scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    // const box = BABYLON.MeshBuilder.CreateBox("box", {});
    // box.position.x = 0.5;
    // box.position.y = 1;

   

    const podium = "MuseXr_podium.glb"
    // BABYLON.SceneLoader.ImportMeshAsync("podium", "./", "museXR_podium.glb", scene);
    BABYLON.SceneLoader.ImportMesh("", "/3d_objects/", models[i]
        , scene, function (meshes, particleSystems, skeletons) {
            // do something with the meshes and skeletons
        });
    return scene;
};

function nextModel(){
i = (1 + i) % models.length;
console.log(i)

BABYLON.SceneLoader.ImportMesh("", "/3d_objects/", models[i]
, scene, function (meshes, particleSystems, skeletons) {
    // do something with the meshes and skeletons
    meshes[0].position = new Vector3(2,3,4)
});
return scene;
return scene, i;
}
function prevModel(){
    i = (i-1)%models.length;
console.log(models[i])
console.log(i)

BABYLON.SceneLoader.ImportMesh("", "/3d_objects/", models[i]
, scene, function (meshes, particleSystems, skeletons) {
    // do something with the meshes and skeletons
});
return scene;
return scene, i;
}



const sceneToRender = createScene();
engine.runRenderLoop(function () {
    sceneToRender.render();

});
