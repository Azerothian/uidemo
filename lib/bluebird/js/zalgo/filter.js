/**
 * Copyright (c) 2013 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
"use strict";
module.exports = function(Promise) {
    var ASSERT = require("./assert.js");
    var isArray = require("./util.js").isArray;

    function Promise$_filter(booleans) {
        var values = this._settledValue;
        var len = values.length;
        var ret = new Array(len);
        var j = 0;

        for (var i = 0; i < len; ++i) {
            var bool = booleans[i];

            if (bool === void 0 && !(i in booleans)) {
                continue;
            }

            if (bool) ret[j++] = values[i];

        }
        ret.length = j;
        return ret;
    }

    var ref = {ref: null};
    Promise.filter = function Promise$Filter(promises, fn) {
        return Promise.map(promises, fn, ref)
            ._then(Promise$_filter, void 0, void 0,
                    ref.ref, void 0, Promise.filter);
    };

    Promise.prototype.filter = function Promise$filter(fn) {
        return this.map(fn, ref)
            ._then(Promise$_filter, void 0, void 0,
                    ref.ref, void 0, this.filter);
    };
};
