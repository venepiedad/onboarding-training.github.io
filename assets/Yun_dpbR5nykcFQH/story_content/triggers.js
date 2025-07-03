function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kBYjK93llI":
        Script1();
        break;
      case "5dspg9VumDw":
        Script2();
        break;
      case "5cGtp6twQpg":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6bvqHQH4zwc');
const duration = 750;
const easing = 'ease-out';
const id = '5uWFM3qI3og';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('66WrQuUpwVq');
const duration = 750;
const easing = 'ease-out';
const id = '61sCkEd05PC';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6pfiMayUK2s');
const duration = 750;
const easing = 'ease-out';
const id = '6HBXvYeXOzI';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
