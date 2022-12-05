"use strict";
(() => {
var exports = {};
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 4600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchUsers)
/* harmony export */ });
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6264);

async function FetchUsers(req, res) {
    try {
        const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connectToDatabase */ .v)();
        const checkins = await db.collection("checkins").find().toArray();
        res.status(200).json({
            checkins
        });
    } catch  {
        res.status(500).json({
            error: "Unable to fetch users..."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [264], () => (__webpack_exec__(4600)));
module.exports = __webpack_exports__;

})();