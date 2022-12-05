(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,521,746,233,332,234,38];
exports.modules = {

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Tl1eP",
	"wave": "Footer_wave__aIbnO",
	"shapefill": "Footer_shapefill__6L_u1",
	"topWave": "Footer_topWave__BoVic",
	"socialWrapper": "Footer_socialWrapper__6T1M9",
	"icon": "Footer_icon__Me07u",
	"caption": "Footer_caption__0MXfK"
};


/***/ }),

/***/ 456:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Nav_navbar__bpUNv",
	"navwrapper": "Nav_navwrapper__p1TCN",
	"logo": "Nav_logo__QK0N1",
	"mobileLogo": "Nav_mobileLogo__XvF5H",
	"tabs": "Nav_tabs__ijXIo",
	"tab": "Nav_tab__CDtdC",
	"primarybutton": "Nav_primarybutton__4TSop",
	"secondarybutton": "Nav_secondarybutton__qOM3q",
	"hidetabs": "Nav_hidetabs__fxVRJ",
	"menuButtonWrapper": "Nav_menuButtonWrapper__foxem",
	"menuButton": "Nav_menuButton__WeZoJ",
	"desktopProfile": "Nav_desktopProfile__a1JZU",
	"mobileProfile": "Nav_mobileProfile__aVCeF",
	"mobileOpen": "Nav_mobileOpen__BsJXq",
	"open": "Nav_open__P3__G",
	"mobileHeader": "Nav_mobileHeader__rM7Ld"
};


/***/ }),

/***/ 4795:
/***/ ((module) => {

// Exports
module.exports = {
	"profilebutton": "ProfileDropdown_profilebutton__E2_Y5",
	"profiledropdown": "ProfileDropdown_profiledropdown__B6D7q",
	"profile": "ProfileDropdown_profile__bQ0LL",
	"open": "ProfileDropdown_open__IBp4I",
	"overlay": "ProfileDropdown_overlay__gbuTa",
	"toast": "ProfileDropdown_toast__rTaLW",
	"profileheader": "ProfileDropdown_profileheader__rcYQI",
	"statuslabel": "ProfileDropdown_statuslabel__Odx9f",
	"trigger": "ProfileDropdown_trigger__kMU8_",
	"status": "ProfileDropdown_status__tY6tY",
	"pending": "ProfileDropdown_pending__7uDAT",
	"denied": "ProfileDropdown_denied__MOMuF",
	"accepted": "ProfileDropdown_accepted__sb_tm",
	"profilebody": "ProfileDropdown_profilebody__mSvb7",
	"icon": "ProfileDropdown_icon__Io_vm",
	"primaryoption": "ProfileDropdown_primaryoption__UrbW9",
	"secondaryoption": "ProfileDropdown_secondaryoption__kswda",
	"hide": "ProfileDropdown_hide__rnbBm"
};


/***/ }),

/***/ 308:
/***/ ((module) => {

// Exports
module.exports = {
	"stack": "Scroll_stack__WK6zI",
	"wrapper": "Scroll_wrapper__Il9OD",
	"icon": "Scroll_icon__bHE8q",
	"hide": "Scroll_hide__8v7XZ"
};


/***/ }),

/***/ 6399:
/***/ ((module) => {

// Exports
module.exports = {
	"stack": "Socials_stack__zQlhc",
	"wrapper": "Socials_wrapper__t7zRX",
	"icon": "Socials_icon__9Nby2",
	"caption": "Socials_caption__vHJgd"
};


/***/ }),

/***/ 2451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.55b94b49.png","height":483,"width":308,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAmUlEQVR42mPgtV0kzmC9OIKBYYMtiOa1XSzOwGC9JMzBcz7f/1MMZk5e8/lAfAYGhrU2/98z8P3epv3//ycGPiDfmoFBdUXA/2MMgl83MDT+3S4vAuIzqDou0mPQXu7GwHBEkkFlhZmK4yJDBgYGBgZJ+8Wu1h6LYiXsF3szwIHtElMg3gLEhgxwYLdUESiQzWCziJGBgYEBANAiLVWROx1PAAAAAElFTkSuQmCC","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4852);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4__);





function Footer() {
    const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    const [appStatus, setAppStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const fetchData = async (id)=>{
        const response = await fetch("/api/checkin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: id
            })
        });
        const data = await response.json();
        if (data.checkins[0]) {
            setAppStatus(data.checkins[0].qualified);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (session) fetchData(session.user.id);
    }, [
        session
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().topWave),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1200 120",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().shapefill)
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().wave),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1200 120",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().shapefill)
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().socialWrapper),
                children: [
                    session && appStatus === "yes" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://discord.gg/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoLogoDiscord, {
                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://www.facebook.com/startupucr/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoLogoFacebook, {
                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://www.instagram.com/startupucr/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoLogoInstagram, {
                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://www.linkedin.com/in/dylanhnguyen",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoLogoLinkedin, {
                                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().caption),
                children: [
                    "Startup@UCR",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "2022 \xa9 All rights reserved."
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5782);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ProfileDropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(834);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2451);
/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(456);
/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProfileDropdown__WEBPACK_IMPORTED_MODULE_9__]);
_ProfileDropdown__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function Nav() {
    const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    var buttonVariants = {};
    if (!isMobile) buttonVariants = {
        hover: {
            scale: 1.05
        },
        tap: {
            scale: 0.995
        }
    };
    const [targetElement, setTargetElement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [checkedIn, setCheckedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [inGroup, setInGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [groupId, setGroupId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [appStatus, setAppStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fetchData = async (id)=>{
        const response = await fetch("/api/checkin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: id
            })
        });
        const data = await response.json();
        setCheckedIn(Object.keys(data.checkins).length !== 0);
        if (data.checkins[0]) {
            setAppStatus(data.checkins[0].qualified);
            setInGroup(data.checkins[0].groupId !== "");
            if (data.checkins[0].groupId !== "") {
                setGroupId(data.checkins[0].groupId);
            }
        }
    };
    const handleResize = ()=>{
        if (window.innerWidth > 720) setOpen(false);
        setIsMobile(window.innerWidth <= 720);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (session) fetchData(session.user.id);
        window.addEventListener("resize", handleResize);
        setTargetElement(document.querySelector("nav"));
        if (targetElement) {
            if (open) (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__.disableBodyScroll)(targetElement);
            else (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_6__.enableBodyScroll)(targetElement);
        }
    }, [
        session,
        router.pathname,
        targetElement,
        open
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: open && (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().open),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().navbar),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().navwrapper),
                children: [
                    router.pathname !== "/" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        passHref: true,
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().logo),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                alt: "Logo Image",
                                objectFit: "contain",
                                width: 40,
                                height: 40,
                                quality: 100
                            })
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                        activeClass: "active",
                        to: "Home",
                        spy: true,
                        smooth: true,
                        offset: -70,
                        duration: 500,
                        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                        onClick: ()=>setOpen(false),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().logo),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                alt: "Logo Image",
                                objectFit: "contain",
                                width: 40,
                                height: 40,
                                quality: 100
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().mobileHeader),
                                children: [
                                    session && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().mobileProfile),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileDropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            visible: !open,
                                            checkedIn: checkedIn,
                                            inGroup: inGroup,
                                            groupId: groupId,
                                            appStatus: appStatus
                                        })
                                    }),
                                    router.pathname !== "/" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        passHref: true,
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().mobileLogo),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                                alt: "Logo Image",
                                                objectFit: "contain",
                                                width: 35,
                                                height: 35,
                                                quality: 100
                                            })
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                        activeClass: "active",
                                        to: "Home",
                                        spy: true,
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                        onClick: ()=>setOpen(false),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().mobileLogo),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _public_assets_logo_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                                alt: "Logo Image",
                                                objectFit: "contain",
                                                width: 35,
                                                height: 35,
                                                quality: 100
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().menuButtonWrapper),
                                        onClick: ()=>setOpen(!open),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_10__.HiMenu, {
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().menuButton)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_10__.HiX, {
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().menuButton)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                id: "nav",
                                className: open ? `${(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().mobileOpen)} ${(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tabs)}` : `${(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tabs)}`,
                                children: [
                                    router.pathname !== "/live" && (router.pathname !== "/" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/",
                                        passHref: true,
                                        onClick: ()=>setOpen(false),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                            children: "home"
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Home",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "home"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Events",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "schedule"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "About",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "about"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Resources",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "support"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Sponsors",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "sponsors"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Board",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "staff"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "FAQ",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "faq"
                                            })
                                        ]
                                    })),
                                    router.pathname === "/live" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Countdown",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "countdown"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Schedule",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "schedule"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Judges",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "judges"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Resources",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "resources"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Sponsors",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "sponsors"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                                                activeClass: "active",
                                                to: "Team",
                                                spy: true,
                                                smooth: true,
                                                offset: -70,
                                                duration: 500,
                                                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().tab),
                                                onClick: ()=>setOpen(false),
                                                children: "staff"
                                            })
                                        ]
                                    }),
                                    !session ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {
                                        "aria-label": "Sign In Button",
                                        type: "button",
                                        variants: buttonVariants,
                                        whileHover: "hover",
                                        whileTap: "tap",
                                        transition: {
                                            ease: "easeInOut",
                                            duration: 0.015
                                        },
                                        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().primarybutton),
                                        onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_4__.signIn,
                                        children: "apply"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: session && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_12___default().desktopProfile),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProfileDropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                visible: true,
                                                checkedIn: checkedIn,
                                                inGroup: inGroup,
                                                groupId: groupId,
                                                appStatus: appStatus
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProfileDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4795);
/* harmony import */ var _styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function ProfileDropdown(props) {
    const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    var buttonVariants = {};
    if (!isMobile) buttonVariants = {
        hover: {
            scale: 1.05
        },
        tap: {
            scale: 0.995
        }
    };
    const [openProfile, setOpenProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const triggerWarning = ()=>{
        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"])(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().toast),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Membership or checkin status will be updated soon."
                })
            ]
        }), {
            id: "appStatusInfo",
            duration: 6000
        });
    };
    const handleResize = ()=>{
        setIsMobile(window.innerWidth <= 720);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        const handleRouteChange = ()=>{
            setOpenProfile(false);
        };
        router.events.on("routeChangeStart", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [
        setOpenProfile
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: !props.visible && (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().hide),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: openProfile && props.visible ? `${(_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().open)} ${(_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().profiledropdown)}` : `${(_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().profiledropdown)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
                        "aria-label": "View Group Button",
                        type: "button",
                        variants: buttonVariants,
                        whileHover: "hover",
                        whileTap: "tap",
                        transition: {
                            ease: "easeInOut",
                            duration: 0.015
                        },
                        className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().profilebutton),
                        onClick: ()=>setOpenProfile(!openProfile),
                        children: openProfile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiX, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiUser, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().profile),
                        children: [
                            session && props.checkedIn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().profileheader),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().statuslabel),
                                        children: [
                                            "application status",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaRegQuestionCircle, {
                                                onClick: ()=>triggerWarning(),
                                                className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().trigger)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().status),
                                        children: props.appStatus === "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().pending),
                                            children: "pending..."
                                        }) || props.appStatus === "yes" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().accepted),
                                            children: "accepted"
                                        }) || props.appStatus === "no" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().denied),
                                            children: "denied"
                                        })
                                    })
                                ]
                            }),
                            props.appStatus === "yes" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().profilebody),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    passHref: true,
                                    href: props.inGroup ? "/groups/" + props.groupId : "/groups/",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
                                        "aria-label": "Groups Button",
                                        type: "button",
                                        className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().primaryoption),
                                        onClick: ()=>setOpenProfile(false),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().icon),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiUsers, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: props.inGroup ? "my group" : "groups"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().profilefooter),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
                                    "aria-label": "Sign Out Button",
                                    type: "button",
                                    className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().secondaryoption),
                                    onClick: next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signOut,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().icon),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiLogout, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "Sign Out"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_ProfileDropdown_module_css__WEBPACK_IMPORTED_MODULE_9___default().overlay),
                onClick: ()=>setOpenProfile(false)
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Socials)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9034);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6399);
/* harmony import */ var _styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5__);






function Socials() {
    const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    const [appStatus, setAppStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const fetchData = async (id)=>{
        const response = await fetch("/api/checkin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: id
            })
        });
        const data = await response.json();
        if (data.checkins[0]) {
            setAppStatus(data.checkins[0].qualified);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (session) fetchData(session.user.id);
    }, [
        session
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().stack),
        children: [
            session && appStatus === "yes" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://discord.gg/",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    whileHover: {
                        width: 300
                    },
                    className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoLogoDiscord, {
                                className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),
                            children: "Join our Discord server!"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.facebook.com//",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    whileHover: {
                        width: 300
                    },
                    className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoLogoFacebook, {
                                className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),
                            children: "Check out our Facebook!"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.instagram.com/",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    whileHover: {
                        width: 305
                    },
                    className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoLogoInstagram, {
                                className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),
                            children: "Check out our Instagram!"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://www.linkedin.com//",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    whileHover: {
                        width: 290
                    },
                    className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoLogoLinkedin, {
                                className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Socials_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),
                            children: "Check out our LinkedIn!"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 8344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TopScroll)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3094);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-icons/vsc"
const vsc_namespaceObject = require("react-icons/vsc");
// EXTERNAL MODULE: ./styles/Scroll.module.css
var Scroll_module = __webpack_require__(308);
var Scroll_module_default = /*#__PURE__*/__webpack_require__.n(Scroll_module);
;// CONCATENATED MODULE: ./components/TopScroll.js






function TopScroll() {
    const router = (0,router_.useRouter)();
    const [isMobile, setIsMobile] = (0,external_react_.useState)(false);
    const [scrollPosition, setScrollPosition] = (0,external_react_.useState)(0);
    const handleScroll = ()=>{
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    const handleResize = ()=>{
        setIsMobile(window.innerWidth <= 720);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", handleResize);
        setIsMobile(window.innerWidth <= 720);
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: isMobile && router.pathname === "/" && scrollPosition > 360 ? `${(Scroll_module_default()).stack}` : `${(Scroll_module_default()).stack} ${(Scroll_module_default()).hide}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Scroll_module_default()).wrapper,
            onClick: ()=>external_react_scroll_.animateScroll.scrollToTop(),
            children: /*#__PURE__*/ jsx_runtime_.jsx(vsc_namespaceObject.VscTriangleUp, {
                className: (Scroll_module_default()).icon
            })
        })
    });
}


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(427);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8731);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(723);
/* harmony import */ var _components_Socials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1283);
/* harmony import */ var _components_TopScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8344);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _components_Nav__WEBPACK_IMPORTED_MODULE_3__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_2__, _components_Nav__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_auth_client__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        session: pageProps.session,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Socials__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TopScroll__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5782:
/***/ ((module) => {

"use strict";
module.exports = require("body-scroll-lock");

/***/ }),

/***/ 9034:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 427:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 1111:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/hi");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 3094:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,676,664], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();