"use strict";
(() => {
var exports = {};
exports.id = 787;
exports.ids = [787];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 1922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateGroup)
/* harmony export */ });
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6264);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);


async function CreateGroup(req, res) {
    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (session) {
        try {
            const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connectToDatabase */ .v)();
            const { group: [groupId, userId]  } = req.body; // check # of users before calling
            await db.collection("groups").deleteOne({
                groupId: groupId
            });
            await db.collection("checkins").updateOne({
                "userId": userId
            }, {
                $set: {
                    "groupId": ""
                }
            });
            res.status(200).json({});
        } catch  {
            res.status(500).json({
                error: "Unable to update groups..."
            });
        }
    } else {
        res.status(401).json({});
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [264], () => (__webpack_exec__(1922)));
module.exports = __webpack_exports__;

})();