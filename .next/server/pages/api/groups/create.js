"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 4647:
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
        const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connectToDatabase */ .v)();
        const { group: [groupId, userId, userName]  } = req.body;
        await db.collection("groups").insertOne({
            groupId: groupId,
            users: [
                {
                    id: userId,
                    name: userName
                }
            ],
            createdAt: new Date()
        });
        await db.collection("checkins").updateOne({
            "userId": userId
        }, {
            $set: {
                "groupId": groupId
            }
        });
        res.status(200).json({});
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
var __webpack_exports__ = __webpack_require__.X(0, [264], () => (__webpack_exec__(4647)));
module.exports = __webpack_exports__;

})();