(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{287:function(t,e,r){"use strict";r.r(e);var i=r(0),c=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),r("p",[t._v("以下为 picker 相关的 API，用于数据选择，日期选择，时间选择。（ H5模块如需使用，请手动引入 "),r("a",{attrs:{href:"https://github.com/weexteam/weex-picker",target:"_blank",rel:"noopener noreferrer"}},[t._v("weex-picker组件"),r("OutboundLink")],1),t._v("）。")]),t._m(1),t._m(2),r("p",[t._v("调用单选 picker")]),r("p",[t._v("options参数如下：")]),t._m(3),t._m(4),t._m(5),t._m(6),r("p",[t._v("调用 date picker")]),r("p",[t._v("options参数如下：")]),t._m(7),t._m(8),t._m(9),t._m(10),r("p",[t._v("调用 time picker")]),r("p",[t._v("options参数如下：")]),t._m(11),t._m(12),t._m(13),t._m(14),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/060faedd0952f518d2d5322a5fb5ea2f",target:"_blank",rel:"noopener noreferrer"}},[t._v("基本用法"),r("OutboundLink")],1),r("IPhoneImg",{attrs:{imgSrc:"https://img.alicdn.com/tfs/TB1idhbogHqK1RjSZJnXXbNLpXa-544-960.gif"}})],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"picker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#picker","aria-hidden":"true"}},[this._v("#")]),this._v(" picker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"picker-pick-options-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#picker-pick-options-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" picker.pick(options, callback)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),r("th",[t._v("说明")]),r("th",[t._v("类型")])])]),r("tbody",[r("tr",[r("td",[t._v("index")]),r("td",[t._v("默认选中的选项")]),r("td",[t._v("number")])]),r("tr",[r("td",[t._v("items")]),r("td",[t._v("picker 数据源")]),r("td",[t._v("array")])]),r("tr",[r("td",[t._v("textColor")]),r("td",[t._v("picker中文字的颜色")]),r("td",[t._v("color")])]),r("tr",[r("td",[t._v("selectionColor")]),r("td",[t._v("picker中选中item的背景色")]),r("td",[t._v("color")])]),r("tr",[r("td",[t._v("confirmTitle")]),r("td",[t._v("确认按钮的文案")]),r("td",[t._v("string")])]),r("tr",[r("td",[t._v("cancelTitle")]),r("td",[t._v("取消按钮的文案")]),r("td",[t._v("string")])]),r("tr",[r("td",[t._v("confirmTitleColor")]),r("td",[t._v("确认按钮的文字颜色")]),r("td",[t._v("color")])]),r("tr",[r("td",[t._v("cancelTitleColor")]),r("td",[t._v("取消按钮的文字颜色")]),r("td",[t._v("color")])]),r("tr",[r("td",[t._v("title")]),r("td",[t._v("对话框的标题")]),r("td",[t._v("string")])]),r("tr",[r("td",[t._v("titleColor")]),r("td",[t._v("对话框标题的文字颜色")]),r("td",[t._v("color")])]),r("tr",[r("td",[t._v("titleBackgroundColor")]),r("td",[t._v("对话框标题的背景色")]),r("td",[t._v("color")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("callback {function(ret)}")]),this._v("：执行完读取操作后的回调函数。"),e("code",[this._v("ret {Object}")]),this._v(" 为 "),e("code",[this._v("callback")]),this._v(" 函数的参数，有两个属性：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v("result {string}")]),t._v("：结果三种类型 "),r("code",[t._v("success")]),t._v(", "),r("code",[t._v("cancel")]),t._v(", "),r("code",[t._v("error")])]),r("li",[r("code",[t._v("data {number}")]),t._v("：选择的选项,仅成功确认时候存在")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"picker-pickdate-options-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#picker-pickdate-options-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" picker.pickDate(options, callback)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),r("th",[t._v("说明")]),r("th",[t._v("类型")])])]),r("tbody",[r("tr",[r("td",[t._v("value")]),r("td",[t._v("必选，date picker 选中的值，date 的字符串格式为 "),r("code",[t._v("yyyy-MM-dd")])]),r("td",[t._v("string")])]),r("tr",[r("td",[t._v("max")]),r("td",[t._v("可选，date 的最大值")]),r("td",[t._v("string")])]),r("tr",[r("td",[t._v("min")]),r("td",[t._v("可选，date 的最小值")]),r("td",[t._v("string")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("callback {function(ret)}")]),this._v("：执行完读取操作后的回调函数。"),e("code",[this._v("ret {Object}")]),this._v(" 为 "),e("code",[this._v("callback")]),this._v(" 函数的参数，有两个属性：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v("result {string}")]),t._v("：结果三种类型 "),r("code",[t._v("success")]),t._v(", "),r("code",[t._v("cancel")]),t._v(", "),r("code",[t._v("error")])]),r("li",[r("code",[t._v("data {number}")]),t._v("：选择的值 date 的字符，格式为 yyyy-MM-dd, 仅成功确认的时候存在")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"picker-picktime-options-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#picker-picktime-options-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" picker.pickTime(options, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("参数")]),e("th",[this._v("说明")]),e("th",[this._v("类型")])])]),e("tbody",[e("tr",[e("td",[this._v("value")]),e("td",[this._v("必选，time 格式为 "),e("code",[this._v("HH:mm")])]),e("td",[this._v("string")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("callback {function(ret)}")]),this._v("：执行完读取操作后的回调函数。"),e("code",[this._v("ret {Object}")]),this._v(" 为 "),e("code",[this._v("callback")]),this._v(" 函数的参数，有两个属性：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v("result {string}")]),t._v("：结果三种类型 "),r("code",[t._v("success")]),t._v(", "),r("code",[t._v("cancel")]),t._v(", "),r("code",[t._v("error")])]),r("li",[r("code",[t._v("data {number}")]),t._v("：time 格式为 "),r("code",[t._v("HH:mm")]),t._v(", 仅成功确认的时候存在")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])}],!1,null,null,null);c.options.__file="picker.md";e.default=c.exports}}]);