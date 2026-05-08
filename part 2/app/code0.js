gdjs.BaseCode = {};
gdjs.BaseCode.localVariables = [];
gdjs.BaseCode.idToCallbackMap = new Map();
gdjs.BaseCode.forEachCount0_2 = 0;

gdjs.BaseCode.forEachCount1_2 = 0;

gdjs.BaseCode.forEachCount2_2 = 0;

gdjs.BaseCode.forEachCount3_2 = 0;

gdjs.BaseCode.forEachIndex2 = 0;

gdjs.BaseCode.forEachObjects2 = [];

gdjs.BaseCode.forEachTemporary2 = null;

gdjs.BaseCode.forEachTotalCount2 = 0;

gdjs.BaseCode.GDMonsterObjects1= [];
gdjs.BaseCode.GDMonsterObjects2= [];
gdjs.BaseCode.GDMonsterObjects3= [];
gdjs.BaseCode.GDMonsterObjects4= [];
gdjs.BaseCode.GDShape1Objects1= [];
gdjs.BaseCode.GDShape1Objects2= [];
gdjs.BaseCode.GDShape1Objects3= [];
gdjs.BaseCode.GDShape1Objects4= [];
gdjs.BaseCode.GDShape2Objects1= [];
gdjs.BaseCode.GDShape2Objects2= [];
gdjs.BaseCode.GDShape2Objects3= [];
gdjs.BaseCode.GDShape2Objects4= [];
gdjs.BaseCode.GDShape3Objects1= [];
gdjs.BaseCode.GDShape3Objects2= [];
gdjs.BaseCode.GDShape3Objects3= [];
gdjs.BaseCode.GDShape3Objects4= [];
gdjs.BaseCode.GDShape4Objects1= [];
gdjs.BaseCode.GDShape4Objects2= [];
gdjs.BaseCode.GDShape4Objects3= [];
gdjs.BaseCode.GDShape4Objects4= [];
gdjs.BaseCode.GDScoreObjects1= [];
gdjs.BaseCode.GDScoreObjects2= [];
gdjs.BaseCode.GDScoreObjects3= [];
gdjs.BaseCode.GDScoreObjects4= [];
gdjs.BaseCode.GDObstacleObjects1= [];
gdjs.BaseCode.GDObstacleObjects2= [];
gdjs.BaseCode.GDObstacleObjects3= [];
gdjs.BaseCode.GDObstacleObjects4= [];
gdjs.BaseCode.GDLifeObjects1= [];
gdjs.BaseCode.GDLifeObjects2= [];
gdjs.BaseCode.GDLifeObjects3= [];
gdjs.BaseCode.GDLifeObjects4= [];
gdjs.BaseCode.GDGameOverObjects1= [];
gdjs.BaseCode.GDGameOverObjects2= [];
gdjs.BaseCode.GDGameOverObjects3= [];
gdjs.BaseCode.GDGameOverObjects4= [];
gdjs.BaseCode.GDButtonTryAgainObjects1= [];
gdjs.BaseCode.GDButtonTryAgainObjects2= [];
gdjs.BaseCode.GDButtonTryAgainObjects3= [];
gdjs.BaseCode.GDButtonTryAgainObjects4= [];
gdjs.BaseCode.GDButtonMainMenuObjects1= [];
gdjs.BaseCode.GDButtonMainMenuObjects2= [];
gdjs.BaseCode.GDButtonMainMenuObjects3= [];
gdjs.BaseCode.GDButtonMainMenuObjects4= [];
gdjs.BaseCode.GDShape1ParticleObjects1= [];
gdjs.BaseCode.GDShape1ParticleObjects2= [];
gdjs.BaseCode.GDShape1ParticleObjects3= [];
gdjs.BaseCode.GDShape1ParticleObjects4= [];
gdjs.BaseCode.GDShape2ParticleObjects1= [];
gdjs.BaseCode.GDShape2ParticleObjects2= [];
gdjs.BaseCode.GDShape2ParticleObjects3= [];
gdjs.BaseCode.GDShape2ParticleObjects4= [];
gdjs.BaseCode.GDShape3ParticleObjects1= [];
gdjs.BaseCode.GDShape3ParticleObjects2= [];
gdjs.BaseCode.GDShape3ParticleObjects3= [];
gdjs.BaseCode.GDShape3ParticleObjects4= [];
gdjs.BaseCode.GDShape4ParticleObjects1= [];
gdjs.BaseCode.GDShape4ParticleObjects2= [];
gdjs.BaseCode.GDShape4ParticleObjects3= [];
gdjs.BaseCode.GDShape4ParticleObjects4= [];


gdjs.BaseCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BaseCode.GDMonsterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BaseCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.BaseCode.GDMonsterObjects2[i].getX() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) + 5 ) {
        isConditionTrue_0 = true;
        gdjs.BaseCode.GDMonsterObjects2[k] = gdjs.BaseCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.BaseCode.GDMonsterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BaseCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.BaseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDMonsterObjects2[i].addForce(-(450), 0, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BaseCode.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BaseCode.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.BaseCode.GDMonsterObjects1[i].getX() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 5 ) {
        isConditionTrue_0 = true;
        gdjs.BaseCode.GDMonsterObjects1[k] = gdjs.BaseCode.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.BaseCode.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.BaseCode.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.BaseCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}
}

}


};gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape1Objects1ObjectsGDgdjs_9546BaseCode_9546GDShape2Objects1ObjectsGDgdjs_9546BaseCode_9546GDShape3Objects1ObjectsGDgdjs_9546BaseCode_9546GDShape4Objects1Objects = Hashtable.newFrom({"Shape1": gdjs.BaseCode.GDShape1Objects1, "Shape2": gdjs.BaseCode.GDShape2Objects1, "Shape3": gdjs.BaseCode.GDShape3Objects1, "Shape4": gdjs.BaseCode.GDShape4Objects1});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape1Objects2ObjectsGDgdjs_9546BaseCode_9546GDShape2Objects2ObjectsGDgdjs_9546BaseCode_9546GDShape3Objects2ObjectsGDgdjs_9546BaseCode_9546GDShape4Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.BaseCode.GDShape1Objects2, "Shape2": gdjs.BaseCode.GDShape2Objects2, "Shape3": gdjs.BaseCode.GDShape3Objects2, "Shape4": gdjs.BaseCode.GDShape4Objects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.BaseCode.GDMonsterObjects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape1Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.BaseCode.GDShape1Objects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape1ParticleObjects3Objects = Hashtable.newFrom({"Shape1Particle": gdjs.BaseCode.GDShape1ParticleObjects3});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape2Objects2Objects = Hashtable.newFrom({"Shape2": gdjs.BaseCode.GDShape2Objects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape2ParticleObjects3Objects = Hashtable.newFrom({"Shape2Particle": gdjs.BaseCode.GDShape2ParticleObjects3});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape3Objects2Objects = Hashtable.newFrom({"Shape3": gdjs.BaseCode.GDShape3Objects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape3ParticleObjects3Objects = Hashtable.newFrom({"Shape3Particle": gdjs.BaseCode.GDShape3ParticleObjects3});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape4Objects2Objects = Hashtable.newFrom({"Shape4": gdjs.BaseCode.GDShape4Objects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape4ParticleObjects3Objects = Hashtable.newFrom({"Shape4Particle": gdjs.BaseCode.GDShape4ParticleObjects3});
gdjs.BaseCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape1Objects2Objects) != 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BaseCode.GDShape1Objects2, gdjs.BaseCode.GDShape1Objects3);

gdjs.BaseCode.GDShape1ParticleObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape1ParticleObjects3Objects, (( gdjs.BaseCode.GDShape1Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape1Objects3[0].getPointX("Center")), (( gdjs.BaseCode.GDShape1Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape1Objects3[0].getPointY("Center")), "");
}
{for(var i = 0, len = gdjs.BaseCode.GDShape1ParticleObjects3.length ;i < len;++i) {
    gdjs.BaseCode.GDShape1ParticleObjects3[i].setParticleSize1((( gdjs.BaseCode.GDShape1Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape1Objects3[0].getWidth()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape2Objects2Objects) != 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BaseCode.GDShape2Objects2, gdjs.BaseCode.GDShape2Objects3);

gdjs.BaseCode.GDShape2ParticleObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape2ParticleObjects3Objects, (( gdjs.BaseCode.GDShape2Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape2Objects3[0].getPointX("Center")), (( gdjs.BaseCode.GDShape2Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape2Objects3[0].getPointY("Center")), "");
}
{for(var i = 0, len = gdjs.BaseCode.GDShape2ParticleObjects3.length ;i < len;++i) {
    gdjs.BaseCode.GDShape2ParticleObjects3[i].setParticleSize1((( gdjs.BaseCode.GDShape2Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape2Objects3[0].getWidth()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape3Objects2Objects) != 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BaseCode.GDShape3Objects2, gdjs.BaseCode.GDShape3Objects3);

gdjs.BaseCode.GDShape3ParticleObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape3ParticleObjects3Objects, (( gdjs.BaseCode.GDShape3Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape3Objects3[0].getPointX("Center")), (( gdjs.BaseCode.GDShape3Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape3Objects3[0].getPointY("Center")), "");
}
{for(var i = 0, len = gdjs.BaseCode.GDShape3ParticleObjects3.length ;i < len;++i) {
    gdjs.BaseCode.GDShape3ParticleObjects3[i].setParticleSize1((( gdjs.BaseCode.GDShape3Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape3Objects3[0].getWidth()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape4Objects2Objects) != 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BaseCode.GDShape4Objects2, gdjs.BaseCode.GDShape4Objects3);

gdjs.BaseCode.GDShape4ParticleObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape4ParticleObjects3Objects, (( gdjs.BaseCode.GDShape4Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape4Objects3[0].getPointX("Center")), (( gdjs.BaseCode.GDShape4Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape4Objects3[0].getPointY("Center")), "");
}
{for(var i = 0, len = gdjs.BaseCode.GDShape4ParticleObjects3.length ;i < len;++i) {
    gdjs.BaseCode.GDShape4ParticleObjects3[i].setParticleSize1((( gdjs.BaseCode.GDShape4Objects3.length === 0 ) ? 0 :gdjs.BaseCode.GDShape4Objects3[0].getWidth()));
}
}
}

}


};gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.BaseCode.GDObstacleObjects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.BaseCode.GDMonsterObjects2});
gdjs.BaseCode.eventsList2 = function(runtimeScene) {

};gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.BaseCode.GDObstacleObjects1});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.BaseCode.GDButtonTryAgainObjects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.BaseCode.GDButtonTryAgainObjects2});
gdjs.BaseCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BaseCode.GDButtonTryAgainObjects2, gdjs.BaseCode.GDButtonTryAgainObjects3);

{for(var i = 0, len = gdjs.BaseCode.GDButtonTryAgainObjects3.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonTryAgainObjects3[i].getBehavior("Animation").setAnimationName("TryAgainPressed");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Base", false);
}
}

}


};gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDButtonMainMenuObjects2Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.BaseCode.GDButtonMainMenuObjects2});
gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDButtonMainMenuObjects1Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.BaseCode.GDButtonMainMenuObjects1});
gdjs.BaseCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BaseCode.GDButtonMainMenuObjects1, gdjs.BaseCode.GDButtonMainMenuObjects2);

{for(var i = 0, len = gdjs.BaseCode.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonMainMenuObjects2[i].getBehavior("Animation").setAnimationName("MainMenuPressed");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
}

}


};gdjs.BaseCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.BaseCode.GDButtonTryAgainObjects1, gdjs.BaseCode.GDButtonTryAgainObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDButtonTryAgainObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.BaseCode.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.BaseCode.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonTryAgainObjects2[i].getBehavior("Animation").setAnimationName("TryAgainNormal");
}
}
}

}


{

gdjs.copyArray(gdjs.BaseCode.GDButtonTryAgainObjects1, gdjs.BaseCode.GDButtonTryAgainObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDButtonTryAgainObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BaseCode.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.BaseCode.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonTryAgainObjects2[i].getBehavior("Animation").setAnimationName("TryAgainHover");
}
}

{ //Subevents
gdjs.BaseCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.BaseCode.GDButtonMainMenuObjects1, gdjs.BaseCode.GDButtonMainMenuObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDButtonMainMenuObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.BaseCode.GDButtonMainMenuObjects2 */
{for(var i = 0, len = gdjs.BaseCode.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonMainMenuObjects2[i].getBehavior("Animation").setAnimationName("MainMenuNormal");
}
}
}

}


{

/* Reuse gdjs.BaseCode.GDButtonMainMenuObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDButtonMainMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.BaseCode.GDButtonMainMenuObjects1 */
{for(var i = 0, len = gdjs.BaseCode.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonMainMenuObjects1[i].getBehavior("Animation").setAnimationName("MainMenuHover");
}
}

{ //Subevents
gdjs.BaseCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.BaseCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BaseCode.GDMonsterObjects1);
{for(var i = 0, len = gdjs.BaseCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMonsterObjects1[i].addForce(-(450), 0, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BaseCode.GDMonsterObjects1);
{for(var i = 0, len = gdjs.BaseCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.BaseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShapeCreation") > 1.3;
if (isConditionTrue_0) {
gdjs.BaseCode.GDShape1Objects1.length = 0;

gdjs.BaseCode.GDShape2Objects1.length = 0;

gdjs.BaseCode.GDShape3Objects1.length = 0;

gdjs.BaseCode.GDShape4Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene(runtimeScene, gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape1Objects1ObjectsGDgdjs_9546BaseCode_9546GDShape2Objects1ObjectsGDgdjs_9546BaseCode_9546GDShape3Objects1ObjectsGDgdjs_9546BaseCode_9546GDShape4Objects1Objects, "Shape" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 4)), gdjs.randomInRange(80, 640 - 80), -(100), "");
}
{for(var i = 0, len = gdjs.BaseCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.BaseCode.GDShape2Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.BaseCode.GDShape3Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.BaseCode.GDShape4Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape4Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}
{for(var i = 0, len = gdjs.BaseCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape1Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.BaseCode.GDShape2Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape2Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.BaseCode.GDShape3Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape3Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.BaseCode.GDShape4Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape4Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.BaseCode.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.BaseCode.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.BaseCode.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.BaseCode.GDShape4Objects1);
{for(var i = 0, len = gdjs.BaseCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape1Objects1[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), 0);
}
for(var i = 0, len = gdjs.BaseCode.GDShape2Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape2Objects1[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), 0);
}
for(var i = 0, len = gdjs.BaseCode.GDShape3Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape3Objects1[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), 0);
}
for(var i = 0, len = gdjs.BaseCode.GDShape4Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape4Objects1[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), 0);
}
}
{for(var i = 0, len = gdjs.BaseCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape1Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape2Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape3Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape3Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape4Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape4Objects1[i].rotate(90, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.BaseCode.GDObstacleObjects1);
{for(var i = 0, len = gdjs.BaseCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDObstacleObjects1[i].addPolarForce(90, 1.5 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), 0);
}
}
{for(var i = 0, len = gdjs.BaseCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDObstacleObjects1[i].setZOrder(4);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).add(7 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.BaseCode.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.BaseCode.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.BaseCode.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.BaseCode.GDShape4Objects1);

gdjs.BaseCode.forEachTotalCount2 = 0;
gdjs.BaseCode.forEachObjects2.length = 0;
gdjs.BaseCode.forEachCount0_2 = gdjs.BaseCode.GDShape1Objects1.length;
gdjs.BaseCode.forEachTotalCount2 += gdjs.BaseCode.forEachCount0_2;
gdjs.BaseCode.forEachObjects2.push.apply(gdjs.BaseCode.forEachObjects2,gdjs.BaseCode.GDShape1Objects1);
gdjs.BaseCode.forEachCount1_2 = gdjs.BaseCode.GDShape2Objects1.length;
gdjs.BaseCode.forEachTotalCount2 += gdjs.BaseCode.forEachCount1_2;
gdjs.BaseCode.forEachObjects2.push.apply(gdjs.BaseCode.forEachObjects2,gdjs.BaseCode.GDShape2Objects1);
gdjs.BaseCode.forEachCount2_2 = gdjs.BaseCode.GDShape3Objects1.length;
gdjs.BaseCode.forEachTotalCount2 += gdjs.BaseCode.forEachCount2_2;
gdjs.BaseCode.forEachObjects2.push.apply(gdjs.BaseCode.forEachObjects2,gdjs.BaseCode.GDShape3Objects1);
gdjs.BaseCode.forEachCount3_2 = gdjs.BaseCode.GDShape4Objects1.length;
gdjs.BaseCode.forEachTotalCount2 += gdjs.BaseCode.forEachCount3_2;
gdjs.BaseCode.forEachObjects2.push.apply(gdjs.BaseCode.forEachObjects2,gdjs.BaseCode.GDShape4Objects1);
for (gdjs.BaseCode.forEachIndex2 = 0;gdjs.BaseCode.forEachIndex2 < gdjs.BaseCode.forEachTotalCount2;++gdjs.BaseCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BaseCode.GDMonsterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.BaseCode.GDScoreObjects2);
gdjs.BaseCode.GDShape1Objects2.length = 0;

gdjs.BaseCode.GDShape2Objects2.length = 0;

gdjs.BaseCode.GDShape3Objects2.length = 0;

gdjs.BaseCode.GDShape4Objects2.length = 0;


if (gdjs.BaseCode.forEachIndex2 < gdjs.BaseCode.forEachCount0_2) {
    gdjs.BaseCode.GDShape1Objects2.push(gdjs.BaseCode.forEachObjects2[gdjs.BaseCode.forEachIndex2]);
}
else if (gdjs.BaseCode.forEachIndex2 < gdjs.BaseCode.forEachCount0_2+gdjs.BaseCode.forEachCount1_2) {
    gdjs.BaseCode.GDShape2Objects2.push(gdjs.BaseCode.forEachObjects2[gdjs.BaseCode.forEachIndex2]);
}
else if (gdjs.BaseCode.forEachIndex2 < gdjs.BaseCode.forEachCount0_2+gdjs.BaseCode.forEachCount1_2+gdjs.BaseCode.forEachCount2_2) {
    gdjs.BaseCode.GDShape3Objects2.push(gdjs.BaseCode.forEachObjects2[gdjs.BaseCode.forEachIndex2]);
}
else if (gdjs.BaseCode.forEachIndex2 < gdjs.BaseCode.forEachCount0_2+gdjs.BaseCode.forEachCount1_2+gdjs.BaseCode.forEachCount2_2+gdjs.BaseCode.forEachCount3_2) {
    gdjs.BaseCode.GDShape4Objects2.push(gdjs.BaseCode.forEachObjects2[gdjs.BaseCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDShape1Objects2ObjectsGDgdjs_9546BaseCode_9546GDShape2Objects2ObjectsGDgdjs_9546BaseCode_9546GDShape3Objects2ObjectsGDgdjs_9546BaseCode_9546GDShape4Objects2Objects, gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.BaseCode.GDShape1Objects2.length ;i < len;++i) {
    gdjs.BaseCode.GDShape1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape2Objects2.length ;i < len;++i) {
    gdjs.BaseCode.GDShape2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape3Objects2.length ;i < len;++i) {
    gdjs.BaseCode.GDShape3Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape4Objects2.length ;i < len;++i) {
    gdjs.BaseCode.GDShape4Objects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "monster.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.BaseCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDScoreObjects2[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}

{ //Subevents: 
gdjs.BaseCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.BaseCode.GDObstacleObjects1);

for (gdjs.BaseCode.forEachIndex2 = 0;gdjs.BaseCode.forEachIndex2 < gdjs.BaseCode.GDObstacleObjects1.length;++gdjs.BaseCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BaseCode.GDMonsterObjects2);
gdjs.BaseCode.GDObstacleObjects2.length = 0;


gdjs.BaseCode.forEachTemporary2 = gdjs.BaseCode.GDObstacleObjects1[gdjs.BaseCode.forEachIndex2];
gdjs.BaseCode.GDObstacleObjects2.push(gdjs.BaseCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDObstacleObjects2Objects, gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDMonsterObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.BaseCode.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDObstacleObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BaseCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDMonsterObjects2[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "killed.wav", false, 100, 1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacleCreation");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "obstacleCreation") > 5;
if (isConditionTrue_0) {
gdjs.BaseCode.GDObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.BaseCode.mapOfGDgdjs_9546BaseCode_9546GDObstacleObjects1Objects, gdjs.randomInRange(80, 640 - 80), -(100), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacleCreation");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BaseCode.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BaseCode.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.BaseCode.GDMonsterObjects1[i].getBehavior("Health").IsJustDamaged(null) ) {
        isConditionTrue_0 = true;
        gdjs.BaseCode.GDMonsterObjects1[k] = gdjs.BaseCode.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.BaseCode.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.BaseCode.GDLifeObjects1);
/* Reuse gdjs.BaseCode.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.BaseCode.GDLifeObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDLifeObjects1[i].getBehavior("Animation").setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.BaseCode.GDMonsterObjects1.length === 0 ) ? 0 :gdjs.BaseCode.GDMonsterObjects1[0].getBehavior("Health").Health(null))));
}
}
{for(var i = 0, len = gdjs.BaseCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMonsterObjects1[i].getBehavior("Flash").Flash(1.5, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.BaseCode.GDMonsterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BaseCode.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.BaseCode.GDMonsterObjects1[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.BaseCode.GDMonsterObjects1[k] = gdjs.BaseCode.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.BaseCode.GDMonsterObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.BaseCode.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.BaseCode.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.BaseCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.BaseCode.GDLifeObjects1);
/* Reuse gdjs.BaseCode.GDMonsterObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.BaseCode.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.BaseCode.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.BaseCode.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.BaseCode.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.BaseCode.GDShape4Objects1);
{for(var i = 0, len = gdjs.BaseCode.GDLifeObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDLifeObjects1[i].getBehavior("Animation").setAnimationName("Life0");
}
}
{for(var i = 0, len = gdjs.BaseCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMonsterObjects1[i].getBehavior("Animation").setAnimationName("MonsterDead");
}
}
{for(var i = 0, len = gdjs.BaseCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape2Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape3Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.BaseCode.GDShape4Objects1.length ;i < len;++i) {
    gdjs.BaseCode.GDShape4Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BaseCode.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.BaseCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDGameOverObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BaseCode.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonTryAgainObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.BaseCode.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonMainMenuObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.BaseCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.BaseCode.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.BaseCode.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.BaseCode.GDGameOverObjects1);
{for(var i = 0, len = gdjs.BaseCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDGameOverObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BaseCode.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonTryAgainObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.BaseCode.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDButtonMainMenuObjects1[i].hide();
}
}
}

}


};

gdjs.BaseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BaseCode.GDMonsterObjects1.length = 0;
gdjs.BaseCode.GDMonsterObjects2.length = 0;
gdjs.BaseCode.GDMonsterObjects3.length = 0;
gdjs.BaseCode.GDMonsterObjects4.length = 0;
gdjs.BaseCode.GDShape1Objects1.length = 0;
gdjs.BaseCode.GDShape1Objects2.length = 0;
gdjs.BaseCode.GDShape1Objects3.length = 0;
gdjs.BaseCode.GDShape1Objects4.length = 0;
gdjs.BaseCode.GDShape2Objects1.length = 0;
gdjs.BaseCode.GDShape2Objects2.length = 0;
gdjs.BaseCode.GDShape2Objects3.length = 0;
gdjs.BaseCode.GDShape2Objects4.length = 0;
gdjs.BaseCode.GDShape3Objects1.length = 0;
gdjs.BaseCode.GDShape3Objects2.length = 0;
gdjs.BaseCode.GDShape3Objects3.length = 0;
gdjs.BaseCode.GDShape3Objects4.length = 0;
gdjs.BaseCode.GDShape4Objects1.length = 0;
gdjs.BaseCode.GDShape4Objects2.length = 0;
gdjs.BaseCode.GDShape4Objects3.length = 0;
gdjs.BaseCode.GDShape4Objects4.length = 0;
gdjs.BaseCode.GDScoreObjects1.length = 0;
gdjs.BaseCode.GDScoreObjects2.length = 0;
gdjs.BaseCode.GDScoreObjects3.length = 0;
gdjs.BaseCode.GDScoreObjects4.length = 0;
gdjs.BaseCode.GDObstacleObjects1.length = 0;
gdjs.BaseCode.GDObstacleObjects2.length = 0;
gdjs.BaseCode.GDObstacleObjects3.length = 0;
gdjs.BaseCode.GDObstacleObjects4.length = 0;
gdjs.BaseCode.GDLifeObjects1.length = 0;
gdjs.BaseCode.GDLifeObjects2.length = 0;
gdjs.BaseCode.GDLifeObjects3.length = 0;
gdjs.BaseCode.GDLifeObjects4.length = 0;
gdjs.BaseCode.GDGameOverObjects1.length = 0;
gdjs.BaseCode.GDGameOverObjects2.length = 0;
gdjs.BaseCode.GDGameOverObjects3.length = 0;
gdjs.BaseCode.GDGameOverObjects4.length = 0;
gdjs.BaseCode.GDButtonTryAgainObjects1.length = 0;
gdjs.BaseCode.GDButtonTryAgainObjects2.length = 0;
gdjs.BaseCode.GDButtonTryAgainObjects3.length = 0;
gdjs.BaseCode.GDButtonTryAgainObjects4.length = 0;
gdjs.BaseCode.GDButtonMainMenuObjects1.length = 0;
gdjs.BaseCode.GDButtonMainMenuObjects2.length = 0;
gdjs.BaseCode.GDButtonMainMenuObjects3.length = 0;
gdjs.BaseCode.GDButtonMainMenuObjects4.length = 0;
gdjs.BaseCode.GDShape1ParticleObjects1.length = 0;
gdjs.BaseCode.GDShape1ParticleObjects2.length = 0;
gdjs.BaseCode.GDShape1ParticleObjects3.length = 0;
gdjs.BaseCode.GDShape1ParticleObjects4.length = 0;
gdjs.BaseCode.GDShape2ParticleObjects1.length = 0;
gdjs.BaseCode.GDShape2ParticleObjects2.length = 0;
gdjs.BaseCode.GDShape2ParticleObjects3.length = 0;
gdjs.BaseCode.GDShape2ParticleObjects4.length = 0;
gdjs.BaseCode.GDShape3ParticleObjects1.length = 0;
gdjs.BaseCode.GDShape3ParticleObjects2.length = 0;
gdjs.BaseCode.GDShape3ParticleObjects3.length = 0;
gdjs.BaseCode.GDShape3ParticleObjects4.length = 0;
gdjs.BaseCode.GDShape4ParticleObjects1.length = 0;
gdjs.BaseCode.GDShape4ParticleObjects2.length = 0;
gdjs.BaseCode.GDShape4ParticleObjects3.length = 0;
gdjs.BaseCode.GDShape4ParticleObjects4.length = 0;

gdjs.BaseCode.eventsList6(runtimeScene);
gdjs.BaseCode.GDMonsterObjects1.length = 0;
gdjs.BaseCode.GDMonsterObjects2.length = 0;
gdjs.BaseCode.GDMonsterObjects3.length = 0;
gdjs.BaseCode.GDMonsterObjects4.length = 0;
gdjs.BaseCode.GDShape1Objects1.length = 0;
gdjs.BaseCode.GDShape1Objects2.length = 0;
gdjs.BaseCode.GDShape1Objects3.length = 0;
gdjs.BaseCode.GDShape1Objects4.length = 0;
gdjs.BaseCode.GDShape2Objects1.length = 0;
gdjs.BaseCode.GDShape2Objects2.length = 0;
gdjs.BaseCode.GDShape2Objects3.length = 0;
gdjs.BaseCode.GDShape2Objects4.length = 0;
gdjs.BaseCode.GDShape3Objects1.length = 0;
gdjs.BaseCode.GDShape3Objects2.length = 0;
gdjs.BaseCode.GDShape3Objects3.length = 0;
gdjs.BaseCode.GDShape3Objects4.length = 0;
gdjs.BaseCode.GDShape4Objects1.length = 0;
gdjs.BaseCode.GDShape4Objects2.length = 0;
gdjs.BaseCode.GDShape4Objects3.length = 0;
gdjs.BaseCode.GDShape4Objects4.length = 0;
gdjs.BaseCode.GDScoreObjects1.length = 0;
gdjs.BaseCode.GDScoreObjects2.length = 0;
gdjs.BaseCode.GDScoreObjects3.length = 0;
gdjs.BaseCode.GDScoreObjects4.length = 0;
gdjs.BaseCode.GDObstacleObjects1.length = 0;
gdjs.BaseCode.GDObstacleObjects2.length = 0;
gdjs.BaseCode.GDObstacleObjects3.length = 0;
gdjs.BaseCode.GDObstacleObjects4.length = 0;
gdjs.BaseCode.GDLifeObjects1.length = 0;
gdjs.BaseCode.GDLifeObjects2.length = 0;
gdjs.BaseCode.GDLifeObjects3.length = 0;
gdjs.BaseCode.GDLifeObjects4.length = 0;
gdjs.BaseCode.GDGameOverObjects1.length = 0;
gdjs.BaseCode.GDGameOverObjects2.length = 0;
gdjs.BaseCode.GDGameOverObjects3.length = 0;
gdjs.BaseCode.GDGameOverObjects4.length = 0;
gdjs.BaseCode.GDButtonTryAgainObjects1.length = 0;
gdjs.BaseCode.GDButtonTryAgainObjects2.length = 0;
gdjs.BaseCode.GDButtonTryAgainObjects3.length = 0;
gdjs.BaseCode.GDButtonTryAgainObjects4.length = 0;
gdjs.BaseCode.GDButtonMainMenuObjects1.length = 0;
gdjs.BaseCode.GDButtonMainMenuObjects2.length = 0;
gdjs.BaseCode.GDButtonMainMenuObjects3.length = 0;
gdjs.BaseCode.GDButtonMainMenuObjects4.length = 0;
gdjs.BaseCode.GDShape1ParticleObjects1.length = 0;
gdjs.BaseCode.GDShape1ParticleObjects2.length = 0;
gdjs.BaseCode.GDShape1ParticleObjects3.length = 0;
gdjs.BaseCode.GDShape1ParticleObjects4.length = 0;
gdjs.BaseCode.GDShape2ParticleObjects1.length = 0;
gdjs.BaseCode.GDShape2ParticleObjects2.length = 0;
gdjs.BaseCode.GDShape2ParticleObjects3.length = 0;
gdjs.BaseCode.GDShape2ParticleObjects4.length = 0;
gdjs.BaseCode.GDShape3ParticleObjects1.length = 0;
gdjs.BaseCode.GDShape3ParticleObjects2.length = 0;
gdjs.BaseCode.GDShape3ParticleObjects3.length = 0;
gdjs.BaseCode.GDShape3ParticleObjects4.length = 0;
gdjs.BaseCode.GDShape4ParticleObjects1.length = 0;
gdjs.BaseCode.GDShape4ParticleObjects2.length = 0;
gdjs.BaseCode.GDShape4ParticleObjects3.length = 0;
gdjs.BaseCode.GDShape4ParticleObjects4.length = 0;


return;

}

gdjs['BaseCode'] = gdjs.BaseCode;
