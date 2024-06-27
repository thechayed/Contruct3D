
// var imports = document.createElement("Script");
// imports.innerText = "{'imports': {'three/addons/': './ThreeJS Editor/examples/jsm/','three/examples/': './ThreeJS Editor/examples/','three-gpu-pathtracer': './Libs/pathtracer.js','three-mesh-bvh': './Libs/mesh_bvh.js'}}";
// imports.setAttribute("type", "importmap");

import signals from 'signals';

import * as THREE from 'three';

// var overlayDiv = document.createElement('div');
// overlayDiv.id = 'threejs-overlay';
// document.body.appendChild(overlayDiv);
// var overlay = overlayDiv;

import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

import { Editor } from './ThreeJS Editor/js/Editor.js';
import { Viewport } from './ThreeJS Editor/js/Viewport.js';
import { Toolbar } from './ThreeJS Editor/js/Toolbar.js';
import { Script } from './ThreeJS Editor/js/Script.js';
import { Player } from './ThreeJS Editor/js/Player.js';
import { Sidebar } from './ThreeJS Editor/js/Sidebar.js';
import { Menubar } from './ThreeJS Editor/js/Menubar.js';
import { Resizer } from './ThreeJS Editor/js/Resizer.js';

window.URL = window.URL || window.webkitURL;
window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;

//

const editor = new Editor();

window.editor = editor; // Expose editor to Console
window.THREE = THREE; // Expose THREE to APP Scripts and Console

const viewport = new Viewport( editor );
document.body.appendChild( viewport.dom );

const toolbar = new Toolbar( editor );
document.body.appendChild( toolbar.dom );

const script = new Script( editor );
document.body.appendChild( script.dom );

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

//

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


var threeJSViewport = document.getElementById("viewport");
function updateEditorViewport() {
  // Check if the Construct 3 layout is available
  constructLayout = document.getElementsByClassName("layoutScrollContainer");
  
  if(constructLayout == null)
  {
    // If not, hide the viewport
    threeJSViewport.style.display = "none";
  }
  else
  {
    // Otherwise, Display the viewport
    threeJSViewport.style.display = "default";
    threeJSViewport.style.position = "fixed";
    
    // And position the viewport to the Construct 3 layout
    threeJSViewport.style.top = constructLayout.getClientBoundingRect().top + "px"; 
    threeJSViewport.style.bottom = constructLayout.getClientBoundingRect().bottom + "px"; 
    threeJSViewport.style.left = constructLayout.getClientBoundingRect().left + "px"; 
    threeJSViewport.style.right = constructLayout.getClientBoundingRect().right + "px"; 
  }
}

// Update the editor viewport
setInterval(updateEditorViewport, 2000);
