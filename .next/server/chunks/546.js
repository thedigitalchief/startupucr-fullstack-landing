exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 3675:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Help_section__5Mhkb",
	"bgWrap": "Help_bgWrap__NcwUs",
	"background": "Help_background__wfxN1",
	"wave": "Help_wave__4C2AY",
	"shapefill": "Help_shapefill__WO_sE",
	"mainContent": "Help_mainContent__su2NG",
	"content": "Help_content__LTcXq",
	"buttonWrapper": "Help_buttonWrapper__NT4_r",
	"header": "Help_header__eEMmJ",
	"button": "Help_button__sYeB5",
	"sponsorbutton": "Help_sponsorbutton__g4AM1",
	"title": "Help_title__9JsIm",
	"arrow": "Help_arrow__aDfy_"
};


/***/ }),

/***/ 9546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Help)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/globe_swoosh.png
/* harmony default export */ const globe_swoosh = ({"src":"/_next/static/media/globe_swoosh.96f89e73.png","height":1548,"width":2923,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAWUlEQVR42mO4feuWGgMh8H1ePcuvaWlMyGIPjkzw3H6qyYXh+ovXjCCBn7MKOH6ubeUBsy+ujvtxYMaTX4dm72dABj/mFXP9m1XO/nVBns33bT1Hvm1o7gYAmvEnrYhbxUIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./styles/Help.module.css
var Help_module = __webpack_require__(3675);
var Help_module_default = /*#__PURE__*/__webpack_require__.n(Help_module);
;// CONCATENATED MODULE: ./pages/help.js







function Help() {
    const [isMobile, setIsMobile] = (0,external_react_.useState)(false);
    var buttonVariants = {};
    if (!isMobile) buttonVariants = {
        hover: {
            scale: 1.05
        },
        tap: {
            scale: 0.995
        }
    };
    const handleResize = ()=>{
        setIsMobile(window.innerWidth <= 720);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", handleResize);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Help_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Help_module_default()).wave,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1200 120",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",
                        className: (Help_module_default()).shapefill
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Help_module_default()).bgWrap,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Help_module_default()).background,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "Section background",
                            src: globe_swoosh,
                            width: 2923,
                            height: 1548,
                            quality: 80,
                            layout: "responsive",
                            objectFit: "contain"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Help_module_default()).mainContent,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "get involved"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (Help_module_default()).content,
                                children: "Not interested in hacking but still want to participate? Great! We would love to have you on board. Fill out the forms below if you'd like to help hackers throughout the day."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "Mentors"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Mentors are in charge of helping the hackers with new technologies and working through any bugs or obstacles they encounter. We recommend this position if you are well versed in a particular stack to offer the best guidance."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "Volunteers"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Volunteers help out with the majority of day-of event tasks including, but not limited to, matching hackers to mentors, helping hackers find teams, hosting activities, and answering general questions."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "Sponsors"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Help_module_default()).buttonWrapper,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://forms.gle/WZ6egHpSrFdFEhRr8",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
                                            variants: buttonVariants,
                                            whileHover: "hover",
                                            whileTap: "tap",
                                            transition: {
                                                ease: "easeInOut",
                                                duration: 0.015
                                            },
                                            className: (Help_module_default()).button,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "mentors"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {
                                                    className: (Help_module_default()).arrow
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://forms.gle/nLr9L5FHWXfZWogd7",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
                                            variants: buttonVariants,
                                            whileHover: "hover",
                                            whileTap: "tap",
                                            transition: {
                                                ease: "easeInOut",
                                                duration: 0.015
                                            },
                                            className: (Help_module_default()).button,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "volunteers"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {
                                                    className: (Help_module_default()).arrow
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "/sponsorship-packet.pdf",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
                                            variants: buttonVariants,
                                            whileHover: "hover",
                                            whileTap: "tap",
                                            transition: {
                                                ease: "easeInOut",
                                                duration: 0.015
                                            },
                                            className: `${(Help_module_default()).button} ${(Help_module_default()).sponsorbutton}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "sponsor us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {
                                                    className: (Help_module_default()).arrow
                                                })
                                            ]
                                        })
                                    })
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