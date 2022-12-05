"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 2139:
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 3255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_sendEmail)
});

;// CONCATENATED MODULE: ./util/sendEmail.js
const sendEmail = async ({ email , template_id , name , members , invite_code , newcomer  })=>{
    const sgMail = __webpack_require__(2139);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: email,
        from: "contact@startupucr.com",
        dynamic_template_data: {
            "first_name": name,
            "members": members,
            "invite_code": invite_code,
            "newcomer": newcomer
        },
        template_id: template_id
    };
    sgMail.send(msg).then(()=>{
    // console.log('Email sent')
    }).catch((error)=>{
    // console.error(error)
    });
};


// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
;// CONCATENATED MODULE: ./pages/api/sendEmail.ts
/* eslint-disable import/no-anonymous-default-export */ 

/* harmony default export */ const api_sendEmail = (async (req, res)=>{
    const session = await (0,client_.getSession)({
        req
    });
    if (session) {
        if (req.method === "POST") {
            const { email , template_id , name , members , invite_code , newcomer  } = req.body;
            await sendEmail({
                email,
                template_id,
                name,
                members,
                invite_code,
                newcomer
            });
            return res.status(200).end();
        }
        return res.status(404).json({
            error: {
                code: "not_found",
                messgae: "The requested endpoint was not found or doesn't support this method."
            }
        });
    } else {
        res.status(401).json({});
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3255));
module.exports = __webpack_exports__;

})();