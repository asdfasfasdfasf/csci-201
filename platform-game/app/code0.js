gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects3= [];
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects1= [];
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects2= [];
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects3= [];
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects1= [];
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects2= [];
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects3= [];
gdjs.Untitled_32sceneCode.GDBushObjects1= [];
gdjs.Untitled_32sceneCode.GDBushObjects2= [];
gdjs.Untitled_32sceneCode.GDBushObjects3= [];
gdjs.Untitled_32sceneCode.GDCloudObjects1= [];
gdjs.Untitled_32sceneCode.GDCloudObjects2= [];
gdjs.Untitled_32sceneCode.GDCloudObjects3= [];
gdjs.Untitled_32sceneCode.GDCoinObjects1= [];
gdjs.Untitled_32sceneCode.GDCoinObjects2= [];
gdjs.Untitled_32sceneCode.GDCoinObjects3= [];
gdjs.Untitled_32sceneCode.GDScore2Objects1= [];
gdjs.Untitled_32sceneCode.GDScore2Objects2= [];
gdjs.Untitled_32sceneCode.GDScore2Objects3= [];
gdjs.Untitled_32sceneCode.GDSlimeObjects1= [];
gdjs.Untitled_32sceneCode.GDSlimeObjects2= [];
gdjs.Untitled_32sceneCode.GDSlimeObjects3= [];
gdjs.Untitled_32sceneCode.GDLeftObjects1= [];
gdjs.Untitled_32sceneCode.GDLeftObjects2= [];
gdjs.Untitled_32sceneCode.GDLeftObjects3= [];
gdjs.Untitled_32sceneCode.GDRightObjects1= [];
gdjs.Untitled_32sceneCode.GDRightObjects2= [];
gdjs.Untitled_32sceneCode.GDRightObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Running");
}
}
}

}


{

/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Untitled_32sceneCode.GDCoinObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Untitled_32sceneCode.GDSlimeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Untitled_32sceneCode.GDLeftObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Untitled_32sceneCode.GDSlimeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Untitled_32sceneCode.GDRightObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Untitled_32sceneCode.GDSlimeObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Untitled_32sceneCode.GDSlimeObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Untitled_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Untitled_32sceneCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "c52f1dacc263a2a6dc94e712a2a148f909b73372fa8e0622cb237fdc6a72fd6c_Coins 8.aac", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(100);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScore2Objects1[i].getBehavior("Text").setText("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Untitled_32sceneCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Untitled_32sceneCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSlimeObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDLeftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Untitled_32sceneCode.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Untitled_32sceneCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSlimeObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDRightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Untitled_32sceneCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].getVariableString(gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSlimeObjects1[k] = gdjs.Untitled_32sceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSlimeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Untitled_32sceneCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].getVariableString(gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSlimeObjects1[k] = gdjs.Untitled_32sceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSlimeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Untitled_32sceneCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSlimeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Untitled_32sceneCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDSlimeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBushObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBushObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBushObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCloudObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloudObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloudObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLeftObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeftObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLeftObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRightObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassPlatformObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSmallBridgeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBushObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBushObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBushObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCloudObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloudObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloudObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCoinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSlimeObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLeftObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeftObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLeftObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRightObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
