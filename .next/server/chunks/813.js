exports.id = 813;
exports.ids = [813];
exports.modules = {

/***/ 8304:
/***/ ((module) => {

// Exports
module.exports = {
	"element": "Live_element__6Nihf",
	"countdown": "Live_countdown__pppTr",
	"title": "Live_title__6gffS",
	"subintrotext": "Live_subintrotext__p4A71",
	"description": "Live_description__nLjw6",
	"schedule": "Live_schedule__qR4VS",
	"wave": "Live_wave__TKpdg",
	"shapefill": "Live_shapefill__IhWOX",
	"schedules": "Live_schedules__COd7W",
	"eventGroupTitle": "Live_eventGroupTitle__WNfro",
	"hidden": "Live_hidden__3_3oi",
	"event": "Live_event__rirNu",
	"eventTime": "Live_eventTime__a_6uR",
	"eventName": "Live_eventName__aCEBI",
	"judges": "Live_judges__1pY8m",
	"grid": "Live_grid__JzwBg",
	"image": "Live_image__sPncV",
	"link": "Live_link__Ob__U",
	"name": "Live_name__IBns9",
	"role": "Live_role__8m5d_",
	"resources": "Live_resources__2acpw",
	"resourcesWrapper": "Live_resourcesWrapper__c_G7q",
	"resourcesBg": "Live_resourcesBg__vhv1e",
	"resourcesContent": "Live_resourcesContent__tiUJ2",
	"wrapper": "Live_wrapper__B0qe7",
	"buttonWrapper": "Live_buttonWrapper__gNAU9",
	"button": "Live_button__U_zJM",
	"github": "Live_github__5sPtl",
	"discord": "Live_discord__i6oTI",
	"arrow": "Live_arrow__H4B_Z",
	"heroLeft": "Live_heroLeft__7H00R",
	"heroRight": "Live_heroRight__pp_BT",
	"resourcesLeft": "Live_resourcesLeft__Co6R8",
	"resourcesRight": "Live_resourcesRight__xA20J"
};


/***/ }),

/***/ 4128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Live)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8304);
/* harmony import */ var _styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3__);




function Live() {
    const setupEvents = [
        {
            time: "7:00PM Mondays",
            name: "Weekly Meeting"
        }
    ];
    const workshops = [
        {
            time: "7:00PM Fridays",
            name: "Team Building"
        }
    ];
    const activities = [
        {
            time: "10:00am",
            name: "Club Panel"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().schedule),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().wave),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1200 120",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                        className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().shapefill)
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Schedule"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().schedules),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventGroupTitle),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "setup"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().hidden),
                                                children: "via"
                                            })
                                        ]
                                    }),
                                    setupEvents.map(({ time , name  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                            whileHover: {
                                                scale: 1.03
                                            },
                                            className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().event),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventTime),
                                                    children: time
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventName),
                                                    children: name
                                                })
                                            ]
                                        }))
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventGroupTitle),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "workshops"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "via zoom"
                                            })
                                        ]
                                    }),
                                    workshops.map(({ time , name  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                            whileHover: {
                                                scale: 1.03
                                            },
                                            className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().event),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventTime),
                                                    children: time
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventName),
                                                    children: name
                                                })
                                            ]
                                        }))
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventGroupTitle),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: "activities"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "via Zoom"
                                            })
                                        ]
                                    }),
                                    activities.map(({ time , name  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                            whileHover: {
                                                scale: 1.03
                                            },
                                            className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().event),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventTime),
                                                    children: time
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Live_module_css__WEBPACK_IMPORTED_MODULE_3___default().eventName),
                                                    children: name
                                                })
                                            ]
                                        }))
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;