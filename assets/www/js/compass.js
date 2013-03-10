/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var comp = {	
	    initialize: function() {
	        this.bindEvents();
	    },		
	    // Wait for Cordova to load    
		//
	    bindEvents: function() {
			document.addEventListener("deviceready", onDeviceReady, false);
	    },
		// Cordova is ready
		//
		onDeviceReady: function() {
			navigator.compass.getCurrentHeading(onSuccess, onError);
		}, 
		
		// onSuccess: Get the current heading
		//    
		onSuccess: function(heading) {
			alert('Heading: ' + heading.magneticHeading);
		}, 
		
		// onError: Failed to get the heading    
		//    
		onError: function(compassError) {        
			alert('Compass Error: ' + compassError.code);   
		}
};
