import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, s as setContext, h as subscribe, v as validate_component, m as missing_component, n as noop } from "../../chunks/index-c9907ad8.js";
import { M as MDCFoundation, f as forwardEventsBuilder, d as dispatch, c as classMap, r as readable, a as classAdderBuilder, D as Div, S as Span, b as Main, I as IconButton, e as Icon, g as Svg } from "../../chunks/IconButton-66bf42a7.js";
import { __extends, __assign } from "tslib";
import { mdiMenu } from "@mdi/js";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  FIXED_CLASS: "mdc-top-app-bar--fixed",
  FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
  SHORT_CLASS: "mdc-top-app-bar--short",
  SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
  SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
};
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings = {
  ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
  NAVIGATION_EVENT: "MDCTopAppBar:nav",
  NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
  ROOT_SELECTOR: ".mdc-top-app-bar",
  TITLE_SELECTOR: ".mdc-top-app-bar__title"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTopAppBarBaseFoundation = function(_super) {
  __extends(MDCTopAppBarBaseFoundation2, _super);
  function MDCTopAppBarBaseFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTopAppBarBaseFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        setStyle: function() {
          return void 0;
        },
        getTopAppBarHeight: function() {
          return 0;
        },
        notifyNavigationIconClicked: function() {
          return void 0;
        },
        getViewportScrollY: function() {
          return 0;
        },
        getTotalActionItems: function() {
          return 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTopAppBarBaseFoundation2.prototype.handleTargetScroll = function() {
  };
  MDCTopAppBarBaseFoundation2.prototype.handleWindowResize = function() {
  };
  MDCTopAppBarBaseFoundation2.prototype.handleNavigationClick = function() {
    this.adapter.notifyNavigationIconClicked();
  };
  return MDCTopAppBarBaseFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = function(_super) {
  __extends(MDCTopAppBarFoundation2, _super);
  function MDCTopAppBarFoundation2(adapter) {
    var _this = _super.call(this, adapter) || this;
    _this.wasDocked = true;
    _this.isDockedShowing = true;
    _this.currentAppBarOffsetTop = 0;
    _this.isCurrentlyBeingResized = false;
    _this.resizeThrottleId = INITIAL_VALUE;
    _this.resizeDebounceId = INITIAL_VALUE;
    _this.lastScrollPosition = _this.adapter.getViewportScrollY();
    _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
    return _this;
  }
  MDCTopAppBarFoundation2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.adapter.setStyle("top", "");
  };
  MDCTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
    var diff = currentScrollPosition - this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
    if (!this.isCurrentlyBeingResized) {
      this.currentAppBarOffsetTop -= diff;
      if (this.currentAppBarOffsetTop > 0) {
        this.currentAppBarOffsetTop = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) {
        this.currentAppBarOffsetTop = -this.topAppBarHeight;
      }
      this.moveTopAppBar();
    }
  };
  MDCTopAppBarFoundation2.prototype.handleWindowResize = function() {
    var _this = this;
    if (!this.resizeThrottleId) {
      this.resizeThrottleId = setTimeout(function() {
        _this.resizeThrottleId = INITIAL_VALUE;
        _this.throttledResizeHandler();
      }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }
    this.isCurrentlyBeingResized = true;
    if (this.resizeDebounceId) {
      clearTimeout(this.resizeDebounceId);
    }
    this.resizeDebounceId = setTimeout(function() {
      _this.handleTargetScroll();
      _this.isCurrentlyBeingResized = false;
      _this.resizeDebounceId = INITIAL_VALUE;
    }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  };
  MDCTopAppBarFoundation2.prototype.checkForUpdate = function() {
    var offscreenBoundaryTop = -this.topAppBarHeight;
    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
    if (partiallyShowing) {
      this.wasDocked = false;
    } else {
      if (!this.wasDocked) {
        this.wasDocked = true;
        return true;
      } else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
        this.isDockedShowing = hasAnyPixelsOnscreen;
        return true;
      }
    }
    return partiallyShowing;
  };
  MDCTopAppBarFoundation2.prototype.moveTopAppBar = function() {
    if (this.checkForUpdate()) {
      var offset = this.currentAppBarOffsetTop;
      if (Math.abs(offset) >= this.topAppBarHeight) {
        offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
      }
      this.adapter.setStyle("top", offset + "px");
    }
  };
  MDCTopAppBarFoundation2.prototype.throttledResizeHandler = function() {
    var currentHeight = this.adapter.getTopAppBarHeight();
    if (this.topAppBarHeight !== currentHeight) {
      this.wasDocked = false;
      this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
      this.topAppBarHeight = currentHeight;
    }
    this.handleTargetScroll();
  };
  return MDCTopAppBarFoundation2;
}(MDCTopAppBarBaseFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFixedTopAppBarFoundation = function(_super) {
  __extends(MDCFixedTopAppBarFoundation2, _super);
  function MDCFixedTopAppBarFoundation2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.wasScrolled = false;
    return _this;
  }
  MDCFixedTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    var currentScroll = this.adapter.getViewportScrollY();
    if (currentScroll <= 0) {
      if (this.wasScrolled) {
        this.adapter.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled = false;
      }
    } else {
      if (!this.wasScrolled) {
        this.adapter.addClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled = true;
      }
    }
  };
  return MDCFixedTopAppBarFoundation2;
}(MDCTopAppBarFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCShortTopAppBarFoundation = function(_super) {
  __extends(MDCShortTopAppBarFoundation2, _super);
  function MDCShortTopAppBarFoundation2(adapter) {
    var _this = _super.call(this, adapter) || this;
    _this.collapsed = false;
    _this.isAlwaysCollapsed = false;
    return _this;
  }
  Object.defineProperty(MDCShortTopAppBarFoundation2.prototype, "isCollapsed", {
    get: function() {
      return this.collapsed;
    },
    enumerable: false,
    configurable: true
  });
  MDCShortTopAppBarFoundation2.prototype.init = function() {
    _super.prototype.init.call(this);
    if (this.adapter.getTotalActionItems() > 0) {
      this.adapter.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
    }
    this.setAlwaysCollapsed(this.adapter.hasClass(cssClasses.SHORT_COLLAPSED_CLASS));
  };
  MDCShortTopAppBarFoundation2.prototype.setAlwaysCollapsed = function(value) {
    this.isAlwaysCollapsed = !!value;
    if (this.isAlwaysCollapsed) {
      this.collapse();
    } else {
      this.maybeCollapseBar();
    }
  };
  MDCShortTopAppBarFoundation2.prototype.getAlwaysCollapsed = function() {
    return this.isAlwaysCollapsed;
  };
  MDCShortTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    this.maybeCollapseBar();
  };
  MDCShortTopAppBarFoundation2.prototype.maybeCollapseBar = function() {
    if (this.isAlwaysCollapsed) {
      return;
    }
    var currentScroll = this.adapter.getViewportScrollY();
    if (currentScroll <= 0) {
      if (this.collapsed) {
        this.uncollapse();
      }
    } else {
      if (!this.collapsed) {
        this.collapse();
      }
    }
  };
  MDCShortTopAppBarFoundation2.prototype.uncollapse = function() {
    this.adapter.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
    this.collapsed = false;
  };
  MDCShortTopAppBarFoundation2.prototype.collapse = function() {
    this.adapter.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
    this.collapsed = true;
  };
  return MDCShortTopAppBarFoundation2;
}(MDCTopAppBarBaseFoundation);
const TopAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { variant = "standard" } = $$props;
  let { color = "primary" } = $$props;
  let { collapsed = uninitializedValue } = $$props;
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  let { prominent = false } = $$props;
  let { dense = false } = $$props;
  let { scrollTarget = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  let oldScrollTarget = void 0;
  let oldVariant = variant;
  function getInstance() {
    const Foundation = {
      static: MDCTopAppBarBaseFoundation,
      short: MDCShortTopAppBarFoundation,
      fixed: MDCFixedTopAppBarFoundation
    }[variant] || MDCTopAppBarFoundation;
    return new Foundation({
      hasClass,
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () => dispatch(element, "SMUITopAppBar:nav", void 0, void 0, true),
      getViewportScrollY: () => scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () => element.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === "short") {
        collapsed = "isCollapsed" in instance && instance.isCollapsed;
      }
    }
  }
  function getPropStore() {
    return propStore;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.prominent === void 0 && $$bindings.prominent && prominent !== void 0)
    $$bindings.prominent(prominent);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.scrollTarget === void 0 && $$bindings.scrollTarget && scrollTarget !== void 0)
    $$bindings.scrollTarget(scrollTarget);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0)
    $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (propStoreSet) {
      propStoreSet({ variant, prominent, dense });
    }
  }
  {
    if (oldVariant !== variant && instance) {
      oldVariant = variant;
      instance.destroy();
      internalClasses = {};
      internalStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (instance && variant === "short" && "setAlwaysCollapsed" in instance) {
      instance.setAlwaysCollapsed(alwaysCollapsed);
    }
  }
  {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener("scroll", handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  }
  return `

<header${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-top-app-bar": true,
        "mdc-top-app-bar--short": variant === "short",
        "mdc-top-app-bar--short-collapsed": collapsed,
        "mdc-top-app-bar--fixed": variant === "fixed",
        "smui-top-app-bar--static": variant === "static",
        "smui-top-app-bar--color-secondary": color === "secondary",
        "mdc-top-app-bar--prominent": prominent,
        "mdc-top-app-bar--dense": dense,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    escape_object($$restProps)
  ], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</header>`;
});
var Row = classAdderBuilder({
  class: "mdc-top-app-bar__row",
  component: Div
});
const Section$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "toolbar", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { toolbar = false } = $$props;
  let element;
  setContext("SMUI:icon-button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  setContext("SMUI:button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.toolbar === void 0 && $$bindings.toolbar && toolbar !== void 0)
    $$bindings.toolbar(toolbar);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<section${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-top-app-bar__section": true,
        "mdc-top-app-bar__section--align-start": align === "start",
        "mdc-top-app-bar__section--align-end": align === "end"
      }))
    },
    escape_object(toolbar ? { role: "toolbar" } : {}),
    escape_object($$restProps)
  ], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</section>`;
});
classAdderBuilder({
  class: "mdc-top-app-bar__title",
  component: Span
});
const AutoAdjust$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propStore;
  let adjustClass;
  let $$restProps = compute_rest_props($$props, ["use", "class", "topAppBar", "component", "getElement"]);
  let $propStore, $$unsubscribe_propStore = noop, $$subscribe_propStore = () => ($$unsubscribe_propStore(), $$unsubscribe_propStore = subscribe(propStore, ($$value) => $propStore = $$value), propStore);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { topAppBar } = $$props;
  let element;
  let { component = Main } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.topAppBar === void 0 && $$bindings.topAppBar && topAppBar !== void 0)
    $$bindings.topAppBar(topAppBar);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_propStore(propStore = topAppBar && topAppBar.getPropStore());
    adjustClass = (() => {
      if (!propStore || $propStore.variant === "static") {
        return "";
      }
      if ($propStore.variant === "short") {
        return "mdc-top-app-bar--short-fixed-adjust";
      }
      if ($propStore.prominent && $propStore.dense) {
        return "mdc-top-app-bar--dense-prominent-fixed-adjust";
      }
      if ($propStore.prominent) {
        return "mdc-top-app-bar--prominent-fixed-adjust";
      }
      if ($propStore.dense) {
        return "mdc-top-app-bar--dense-fixed-adjust";
      }
      return "mdc-top-app-bar--fixed-adjust";
    })();
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({ [className]: true, [adjustClass]: true })
    }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_propStore();
  return $$rendered;
});
const Section = Section$1;
const AutoAdjust = AutoAdjust$1;
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html, body{width:100%;max-width:100%}.transparent-bar{background-color:transparent}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topAppBar;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(TopAppBar, "TopAppBar").$$render($$result, {
      class: "transparent-bar",
      variant: "standard",
      this: topAppBar
    }, {
      this: ($$value) => {
        topAppBar = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `${validate_component(Icon, "Icon").$$render($$result, { component: Svg, viewBox: "0 0 24 24" }, {}, {
                      default: () => {
                        return `<path${add_attribute("fill", "#FFF", 0)}${add_attribute("d", mdiMenu, 0)}></path>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}
        `;
          }
        })}`;
      }
    })}

${validate_component(AutoAdjust, "AutoAdjust").$$render($$result, { topAppBar }, {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { _layout as default };
