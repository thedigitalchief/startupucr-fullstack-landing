"use strict";
(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 5714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateCheckIn)
/* harmony export */ });
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6264);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);


async function CreateCheckIn(req, res) {
    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (session) {
        const { db  } = await (0,_util_mongodb__WEBPACK_IMPORTED_MODULE_0__/* .connectToDatabase */ .v)();
        const { user: [name, email, race, gender, school, major, grade, first_time, grad, id]  } = req.body;
        await db.collection("checkins").insertOne({
            name: name,
            email: email,
            race: race,
            gender: gender,
            school: school,
            major: major,
            grade: grade,
            firstTimeHacker: first_time,
            graduate: grad,
            userId: id,
            qualified: "",
            groupId: "",
            createdAt: new Date()
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
var __webpack_exports__ = __webpack_require__.X(0, [264], () => (__webpack_exec__(5714)));
module.exports = __webpack_exports__;

})();