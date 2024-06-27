import signals from 'signals';
import * as THREE from 'three';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { Editor } from './ThreeJS Editor/js/Editor.js';
import { Viewport } from './ThreeJS Editor/js/Viewport.js';
import { Toolbar } from './ThreeJS Editor/js/Toolbar.js';
import { Player } from './ThreeJS Editor/js/Player.js';
import { Sidebar } from './ThreeJS Editor/js/Sidebar.js';
import { Menubar } from './ThreeJS Editor/js/Menubar.js';
import { Resizer } from './ThreeJS Editor/js/Resizer.js';

function AddThreeJSEditorCSS()
{
  //* ThreeJS Editor main.css
  const link = document.createElement('link');
  document.body.appendChild(link);
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', '/ThreeJS Editor/css/main.css');
  link.setAttribute('type', 'text/css');
}
AddThreeJSEditorCSS();

//* Default ThreeJS Editor
window.URL = window.URL || window.webkitURL;
window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;

const editor = new Editor();

window.editor = editor; // Expose editor to Console
window.THREE = THREE; // Expose THREE to APP Scripts and Console

const viewport = new Viewport( editor );
document.body.appendChild( viewport.dom );
const toolbar = new Toolbar( editor );
document.body.appendChild( toolbar.dom );
const player = new Player( editor );
document.body.appendChild( player.dom );
const sidebar = new Sidebar( editor );
document.body.appendChild( sidebar.dom );
const menubar = new Menubar( editor );
document.body.appendChild( menubar.dom );
const resizer = new Resizer( editor );
document.body.appendChild( resizer.dom );

//

editor.storage.init( function () {

  editor.storage.get( async function ( state ) {
    if ( isLoadingFromHash ) return;
    if ( state !== undefined ) {
      await editor.fromJSON( state );
    }
    const selected = editor.config.getKey( 'selected' );

    if ( selected !== undefined ) {
      editor.selectByUuid( selected );
    }
  } );

  //

  let timeout;

  function saveState() {
    if ( editor.config.getKey( 'autosave' ) === false ) {
      return;
    }
    clearTimeout( timeout );

    timeout = setTimeout( function () {
      editor.signals.savingStarted.dispatch();
      timeout = setTimeout( function () {
        editor.storage.set( editor.toJSON() );
        editor.signals.savingFinished.dispatch();
      }, 100 );
    }, 1000 );
  }

  const signals = editor.signals;
  signals.geometryChanged.add( saveState );
  signals.objectAdded.add( saveState );
  signals.objectChanged.add( saveState );
  signals.objectRemoved.add( saveState );
  signals.materialChanged.add( saveState );
  signals.sceneBackgroundChanged.add( saveState );
  signals.sceneEnvironmentChanged.add( saveState );
  signals.sceneFogChanged.add( saveState );
  signals.sceneGraphChanged.add( saveState );
  signals.scriptChanged.add( saveState );
  signals.historyChanged.add( saveState );
} );

//

document.addEventListener( 'dragover', function ( event ) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
} );

document.addEventListener( 'drop', function ( event ) {
  event.preventDefault();
  if ( event.dataTransfer.types[ 0 ] === 'text/plain' ) return; // Outliner drop

  if ( event.dataTransfer.items ) {
    // DataTransferItemList supports folders
    editor.loader.loadItemList( event.dataTransfer.items );
  } else {
    editor.loader.loadFiles( event.dataTransfer.files );
  }
} );

function onWindowResize() {
  editor.signals.windowResize.dispatch();
}

window.addEventListener( 'resize', onWindowResize );

onWindowResize();

let isLoadingFromHash = false;
const hash = window.location.hash;

if ( hash.slice( 1, 6 ) === 'file=' ) {
  const file = hash.slice( 6 );

  if ( confirm( editor.strings.getKey( 'prompt/file/open' ) ) ) {
    const loader = new THREE.FileLoader();
    loader.crossOrigin = '';
    loader.load( file, function ( text ) {
      editor.clear();
      editor.fromJSON( JSON.parse( text ) );
    } );
    isLoadingFromHash = true;
  }
}

// ServiceWorker

if ( 'serviceWorker' in navigator ) {
  try {
    navigator.serviceWorker.register( 'sw.js' );
  } catch ( error ) {
  }
}

var constructLayoutScrollContainer = null;
var threeJSEditorPanels = [];
var constructEventsAssigned = false;
var previousConstructLayoutWidth, previousConstructLayoutHeight = 0;

function UpdateEditor()
{
  FindConstructLayout();
  Draw3DEditorOverlay();
  CallConstructPairingEvents();
}

function FindConstructLayout()
{
  const layoutScrollElements = document.getElementsByClassName("layoutScrollContainer");
  constructLayoutScrollContainer = layoutScrollElements.length > 0 ? layoutScrollElements[0] : null;
}

function Draw3DEditorOverlay() {
  if(constructLayoutScrollContainer == null)
  {
    RemoveAllEditorPanels();
    return;
  }
  else
  {
    const threeJSEditorViewport = GetPanelByID("viewport");
  
    threeJSEditorViewport.style.display = "default";
    threeJSEditorViewport.style.position = "fixed";
    
    if(threeJSEditorViewport.parentNode == null)
      constructLayoutScrollContainer.appendChild(threeJSEditorViewport);
    
    const { top, bottom, left, right } = constructLayoutScrollContainer.getBoundingClientRect();
    threeJSEditorViewport.style.top = `0px`;
    threeJSEditorViewport.style.bottom = `0px`;
    threeJSEditorViewport.style.left = `0px`;
    threeJSEditorViewport.style.right = `0px`;
  }
}

function CallConstructPairingEvents()
{
  if(constructLayoutScrollContainer.getBoundingClientRect().width != previousConstructLayoutWidth || constructLayoutScrollContainer.getBoundingClientRect().height)
  {
    onWindowResize();
    previousConstructLayoutWidth = constructLayoutScrollContainer.getBoundingClientRect().width;
    previousConstructLayoutHeight = constructLayoutScrollContainer.getBoundingClientRect().height;
  }  
}

function GetPanelByID(id)
{
  return threeJSEditorPanels.find(panel => panel.id == id);
}

function GetEditorPanelsFromDOM()
{
  const panels = [...document.getElementsByClassName("Panel"), ...document.getElementsByClassName("TabbedPanel")];
  threeJSEditorPanels = panels.length > 0 ? panels : threeJSEditorPanels;
  return threeJSEditorPanels;
}

function RemoveAllEditorPanels()
{
  GetEditorPanelsFromDOM().forEach(panelElement => {
    const parent = panelElement.parentNode;
    if(parent != null)
      panelElement.parentNode.removeChild(panelElement);
  });
}

// Update the editor viewport
setInterval(UpdateEditor, 200);
