/* Babylon Editor Script Component (C# UnityScript) */

using System;
using UnityEditor;
using UnityEngine;
using Unity3D2Babylon;

namespace MyProject
{
	public class RaycastForward : EditorScriptComponent
	{
        [Header("-Raycast Properties-")]

        [BabylonProperty, Range(0,100)]
        public int rayCastLength = 5;

		protected RaycastForward()
		{
			this.babylonClass = "PROJECT.RaycastForward";
		}
	}
}