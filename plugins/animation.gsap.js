
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic', 'gsap', 'TweenMax', 'TimelineMax'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		// Loads whole gsap package onto global scope.
		var gsap = require("gsap/dist/gsap") || require("gsap");

		// TweenMax/TimelineMax will be global in v2. In v3, they will be on the gsap object
		factory(require('scrollmagic'), gsap, TweenMax || gsap, TimelineMax || gsap);
	} else {
		// Browser globals
		factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.gsap, root.gsap || root.TweenMax || root.TweenLite, root.gsap || root.TimelineMax || root.TimelineLite);
	}
}(this, function (ScrollMagic, Gsap, Tween, Timeline) {
	"use strict";
	var NAMESPACE = "animation.gsap";
	var GSAP3_OR_GREATER = Gsap && parseFloat(Gsap.version) >= 3;

	var
		console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}
	if (!Tween) {
		err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
	}

	
	// add option (TODO: DOC (private for dev))
	ScrollMagic.Scene.addOption(
		"tweenChanges", // name
		false, // default
		function (val) { // validation callback
			return !!val;
		}
	);
	// extend scene
	ScrollMagic.Scene.extend(function () {
		var Scene = this,
			_tween;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		// set listeners
		Scene.on("progress.plugin_gsap", function () {
			updateTweenProgress();
		});
		Scene.on("destroy.plugin_gsap", function (e) {
			Scene.removeTween(e.reset);
		});

		/**
		 * Update the tween progress to current position.
		 * @private
		 */
		var updateTweenProgress = function () {
			if (_tween) {
				var
					progress = Scene.progress(),
					state = Scene.state();
				if (_tween.repeat && _tween.repeat() === -1) {
					// infinite loop, so not in relation to progress
					if (state === 'DURING' && _tween.paused()) {
						_tween.play();
					} else if (state !== 'DURING' && !_tween.paused()) {
						_tween.pause();
					}
				} else if (progress != _tween.progress()) { // do we even need to update the progress?
					// no infinite loop - so should we just play or go to a specific point in time?
					if (Scene.duration() === 0) {
						// play the animation
						if (progress > 0) { // play from 0 to 1
							_tween.play();
						} else { // play from 1 to 0
							_tween.reverse();
						}
					} else {
						// go to a specific point in time
						if (Scene.tweenChanges() && _tween.tweenTo) {
							// go smooth
							_tween.tweenTo(progress * _tween.duration());
						} else {
							// just hard set it
							_tween.progress(progress).pause();
						}
					}
				}
			}
		};

	
		Scene.setTween = function (TweenObject, duration, params) {
			var newTween;

			if (arguments.length > 1) {
				var durationIsSet = typeof arguments['1'] === 'number';

				if (GSAP3_OR_GREATER) {
					// If we're using gsap 3 with proper gsap 3 syntax of 2 arguments
					if (!durationIsSet) {
						params = duration;
					}
					// Add a duration is there isn't one
					if (!params.hasOwnProperty('duration')) {
						params.duration = durationIsSet ? duration : 1;
					}
				} else {
					// If we're using gsap 2 or earlier syntax
					if (arguments.length < 3) {
						params = duration;
						duration = 1;
					}
				}

				// 2 arguments should be gsap 3 syntax, and 3 arguments for 
				TweenObject = GSAP3_OR_GREATER ? Tween.to(TweenObject, params) : Tween.to(TweenObject, duration, params);
			}
			try {
				// wrap Tween into a Timeline Object if not gsap 3 or greater and available to include delay and repeats in the duration and standardize methods.
				if (Timeline && !GSAP3_OR_GREATER) {
					newTween = new Timeline({
							smoothChildTiming: true
						})
						.add(TweenObject);
				} else {
					newTween = TweenObject;
				}
				newTween.pause();
			} catch (e) {
				log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
				return Scene;
			}
			if (_tween) { // kill old tween?
				Scene.removeTween();
			}
			_tween = newTween;

			// some properties need to be transferred it to the wrapper, otherwise they would get lost.
			if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
				_tween.repeat(-1);
				_tween.yoyo(TweenObject.yoyo());
			}
			// Some tween validations and debugging helpers

			if (Scene.tweenChanges() && !_tween.tweenTo) {
				log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
			}

			// check if there are position tweens defined for the trigger and warn about it :)
			if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
				var
					triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
					vertical = Scene.controller().info("vertical");
				triggerTweens.forEach(function (value, index) {
					var
						tweenvars = value.vars.css || value.vars,
						condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
					if (condition) {
						log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
						return false;
					}
				});
			}

			// warn about tween overwrites, when an element is tweened multiple times
			if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
				var
					// However, onInterrupt deprecated onOverwrite in GSAP v3
					methodUsed = GSAP3_OR_GREATER ? 'onInterrupt' : 'onOverwrite',
					list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween], // get all nested tween objects
					newCallback = function () {
						log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
					};
				for (var i = 0, thisTween, oldCallback; i < list.length; i++) {
					/*jshint loopfunc: true */
					thisTween = list[i];
					if (oldCallback !== newCallback) { // if tweens is added more than once
						oldCallback = thisTween.vars[methodUsed];
						thisTween.vars[methodUsed] = function () {
							if (oldCallback) {
								oldCallback.apply(this, arguments);
							}
							newCallback.apply(this, arguments);
						};
					}
				}
			}
			log(3, "added tween");

			updateTweenProgress();
			return Scene;
		};

		Scene.removeTween = function (reset) {
			if (_tween) {
				if (reset) {
					_tween.progress(0).pause();
				}
				_tween.kill();
				_tween = undefined;
				log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};

	});
}));