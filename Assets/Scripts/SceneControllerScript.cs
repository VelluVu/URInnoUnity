/* Babylon Editor Script Component (C# UnityScript) */

using System;
using UnityEditor;
using UnityEngine;
using Unity3D2Babylon;

namespace MyProject
{
	public class SceneControllerScript : EditorScriptComponent
	{
        [Header("-Script Properties-")]

        [BabylonProperty]
        public string hello = "Hello World";

		protected SceneControllerScript()
		{
			this.babylonClass = "PROJECT.SceneControllerScript";
		}
	}
}