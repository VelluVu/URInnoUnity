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
        public int raycastLength = 5;
		public bool fired = false;
		public float fireRate = 0.1f;

		protected RaycastForward()
		{
			this.babylonClass = "PROJECT.RaycastForward";
		}
	}
}