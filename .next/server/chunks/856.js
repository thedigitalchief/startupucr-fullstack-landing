exports.id = 856;
exports.ids = [856];
exports.modules = {

/***/ 4263:
/***/ ((module) => {

// Exports
module.exports = {
	"element": "Index_element__zTb2M",
	"bgWrap": "Index_bgWrap___Iy44",
	"main": "Index_main__CIJfm",
	"intro": "Index_intro__z5gH2",
	"window": "Index_window__K7UVX",
	"windowHeader": "Index_windowHeader__RZ4Z4",
	"windowButton": "Index_windowButton__oWc8n",
	"windowContent": "Index_windowContent__pY3SM",
	"title": "Index_title__FUwyz",
	"subintrotext": "Index_subintrotext__7oEIA",
	"description": "Index_description__xlTQ3",
	"greeting": "Index_greeting__mDjH_",
	"code": "Index_code__CUQSm",
	"row": "Index_row__IpLvX",
	"iconWrapper": "Index_iconWrapper__xWoD6",
	"actionwrapper": "Index_actionwrapper__zH8Yf",
	"primarybutton": "Index_primarybutton__dsc1j",
	"arrow": "Index_arrow__aF5RB",
	"secondarybutton": "Index_secondarybutton__s7rgl",
	"sponsorbutton": "Index_sponsorbutton__PgI0_",
	"invisible": "Index_invisible__IrRKj",
	"heroLeft": "Index_heroLeft__L_C_r",
	"heroRight": "Index_heroRight__wZ_Jz",
	"date": "Index_date__SrY_G",
	"mobileimage": "Index_mobileimage__43cy_",
	"desktopimage": "Index_desktopimage__g63Qd"
};


/***/ }),

/***/ 6648:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "SignupCounter_wrapper__Swhm4",
	"icon": "SignupCounter_icon__6yCLh",
	"number": "SignupCounter_number__bbLay",
	"text": "SignupCounter_text__CoYSj"
};


/***/ }),

/***/ 7856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: ./styles/SignupCounter.module.css
var SignupCounter_module = __webpack_require__(6648);
var SignupCounter_module_default = /*#__PURE__*/__webpack_require__.n(SignupCounter_module);
;// CONCATENATED MODULE: ./components/SignupCounter.js




const fetcher = (url)=>fetch(url).then((res)=>res.json());
function SignupCounter() {
    const { data , error  } = external_swr_default()("/api/checkin/count", fetcher);
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (SignupCounter_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaRegEdit, {
                    className: (SignupCounter_module_default()).icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SignupCounter_module_default()).text,
                    children: "there seems to be an error."
                })
            ]
        });
    }
    if (!data) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (SignupCounter_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaRegEdit, {
                    className: (SignupCounter_module_default()).icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SignupCounter_module_default()).number,
                    children: "..."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (SignupCounter_module_default()).text,
                    children: "members joined so far!"
                })
            ]
        });
    } else return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SignupCounter_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaRegEdit, {
                className: (SignupCounter_module_default()).icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (SignupCounter_module_default()).number,
                children: Object.keys(data.checkins).length
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (SignupCounter_module_default()).text,
                children: "members signed up so far!"
            })
        ]
    });
}

// EXTERNAL MODULE: ./public/assets/logo.png
var logo = __webpack_require__(2451);
// EXTERNAL MODULE: ./public/assets/hero_left.png
var hero_left = __webpack_require__(5811);
// EXTERNAL MODULE: ./public/assets/hero_right.png
var hero_right = __webpack_require__(3215);
// EXTERNAL MODULE: ./styles/Index.module.css
var Index_module = __webpack_require__(4263);
var Index_module_default = /*#__PURE__*/__webpack_require__.n(Index_module);
;// CONCATENATED MODULE: ./pages/landing.js












function Home() {
    const [session] = (0,client_.useSession)();
    const [isMobile, setIsMobile] = (0,external_react_.useState)(false);
    var buttonVariants = {};
    if (!isMobile) {
        buttonVariants = {
            hover: {
                scale: 1.05
            },
            tap: {
                scale: 0.995
            }
        };
    }
    const [checkedIn, setCheckedIn] = (0,external_react_.useState)(false);
    const fetchData = async (userId)=>{
        const response = await fetch("/api/checkin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: userId
            })
        });
        const data = await response.json();
        setCheckedIn(Object.keys(data.checkins).length !== 0);
    };
    const handleResize = ()=>{
        setIsMobile(window.innerWidth <= 720);
    };
    (0,external_react_.useEffect)(()=>{
        if (session) fetchData(session.user.id);
        window.addEventListener("resize", handleResize);
        setIsMobile(window.innerWidth <= 720);
    }, [
        session
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Index_module_default()).bgWrap,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Index_module_default()).heroLeft,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: hero_left/* default */.Z,
                    alt: "Hero Image",
                    objectFit: "contain",
                    quality: 50,
                    placeholder: "blur",
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: (Index_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Index_module_default()).title,
                        children: "Startup@UCR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Index_module_default()).subintrotext,
                            children: "Entrepreneurship, Community, Execution."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: " "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: (Index_module_default()).greeting,
                                children: [
                                    "glad to have you, ",
                                    session.user.name,
                                    "!"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SignupCounter, {}),
                                    !session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Index_module_default()).actionwrapper,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "/sponsorship-packet.pdf",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
                                                    "aria-label": "Sponsor Button",
                                                    type: "button",
                                                    variants: buttonVariants,
                                                    whileHover: "hover",
                                                    whileTap: "tap",
                                                    transition: {
                                                        ease: "easeInOut",
                                                        duration: 0.02
                                                    },
                                                    className: `${(Index_module_default()).secondarybutton} ${(Index_module_default()).sponsorbutton}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "sponsor us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaChevronRight, {
                                                            className: (Index_module_default()).arrow
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.button, {
                                                "aria-label": "Sign In Button",
                                                type: "button",
                                                variants: buttonVariants,
                                                whileHover: "hover",
                                                whileTap: "tap",
                                                transition: {
                                                    ease: "easeInOut",
                                                    duration: 0.02
                                                },
                                                className: (Index_module_default()).primarybutton,
                                                onClick: client_.signIn,
                                                children: "Join us!"
                                            })
                                        ]
                                    }),
                                    session && isMobile && !checkedIn && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Index_module_default()).actionwrapper,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            passHref: true,
                                            href: "/checkin",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.button, {
                                                "aria-label": "Check In Button",
                                                type: "button",
                                                variants: buttonVariants,
                                                whileHover: "hover",
                                                whileTap: "tap",
                                                transition: {
                                                    ease: "easeInOut",
                                                    duration: 0.015
                                                },
                                                className: (Index_module_default()).primarybutton,
                                                children: "check in"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Index_module_default()).heroRight,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: hero_right/* default */.Z,
                    alt: "Hero Image",
                    objectFit: "contain",
                    quality: 50,
                    placeholder: "blur",
                    priority: true
                })
            })
        ]
    });
}


/***/ })

};
;