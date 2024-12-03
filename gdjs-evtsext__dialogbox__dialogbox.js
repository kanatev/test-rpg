
gdjs.evtsExt__DialogBox__DialogBox = gdjs.evtsExt__DialogBox__DialogBox || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__DialogBox__DialogBox.DialogBox = class DialogBox extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext = {};
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDNoButtonObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDNoButtonObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDYesButtonObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDYesButtonObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDTextBorderObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDTextBorderObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects2= [];


gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Dialogue"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText((( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects1.length === 0 ) ? "" :gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).FullText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DialogBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DialogBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.onCreatedContext.GDDialogueObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1_1final = [];

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1_1final = [];

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects2= [];


gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14521980);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Dialogue"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).RestartFromBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Dialogue"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText() != (( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length === 0 ) ? "" :gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).FullText((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1);
/* Reuse gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText((( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText()));
}
}{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Dialogue"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("AutoTyping")).IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1[k] = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1);
{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1.length = 0;

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1_1final.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[k] = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1_1final.indexOf(gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[j]) === -1 )
            gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1_1final.push(gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[k] = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1_1final.indexOf(gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[j]) === -1 )
            gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1_1final.push(gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1_1final, gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1);
gdjs.copyArray(gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1_1final, gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14525340);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "HoverSound.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}}

}


};

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DialogBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DialogBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPostEventsContext.GDDialogueObjects2.length = 0;


return;
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext = {};
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDNoButtonObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDNoButtonObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDTextBorderObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDTextBorderObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDDialogueObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDDialogueObjects2= [];


gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("YesButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1[k] = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DialogBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DialogBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsYesClickedContext.GDDialogueObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext = {};
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDYesButtonObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDYesButtonObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDTextBorderObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDTextBorderObjects2= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDDialogueObjects1= [];
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDDialogueObjects2= [];


gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("NoButton"), gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1[k] = gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNoButtonObjectsList = [...runtimeScene.getObjects("NoButton")];
var GDNoButtonObjects = Hashtable.newFrom({"NoButton": thisGDNoButtonObjectsList});
var thisGDYesButtonObjectsList = [...runtimeScene.getObjects("YesButton")];
var GDYesButtonObjects = Hashtable.newFrom({"YesButton": thisGDYesButtonObjectsList});
var thisGDTextBorderObjectsList = [...runtimeScene.getObjects("TextBorder")];
var GDTextBorderObjects = Hashtable.newFrom({"TextBorder": thisGDTextBorderObjectsList});
var thisGDDialogueObjectsList = [...runtimeScene.getObjects("Dialogue")];
var GDDialogueObjects = Hashtable.newFrom({"Dialogue": thisGDDialogueObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NoButton": GDNoButtonObjects
, "YesButton": GDYesButtonObjects
, "TextBorder": GDTextBorderObjects
, "Dialogue": GDDialogueObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NoButton": thisGDNoButtonObjectsList
, "YesButton": thisGDYesButtonObjectsList
, "TextBorder": thisGDTextBorderObjectsList
, "Dialogue": thisGDDialogueObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DialogBox"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DialogBox"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDDialogueObjects2.length = 0;

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDNoButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDYesButtonObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDYesButtonObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDTextBorderObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDTextBorderObjects2.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDDialogueObjects1.length = 0;
gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.IsNoClickedContext.GDDialogueObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__DialogBox__DialogBox.DialogBox.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("DialogBox::DialogBox", gdjs.evtsExt__DialogBox__DialogBox.DialogBox);
