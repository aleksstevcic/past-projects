// listen to event from app.js
// don't forget commas!
socket.on("createObject", (data) => {
    // console.log("listener ping");
    createObject(
        data.objectIngredient, 
        data.objectClass,
        data.objectModel,
        data.objectMaterial,
    );
});
