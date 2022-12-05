exports.id = 636;
exports.ids = [636];
exports.modules = {

/***/ 6171:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Faq_section__9pFlm",
	"wave": "Faq_wave__pNCkc",
	"shapefill": "Faq_shapefill__QcNKT",
	"mainContent": "Faq_mainContent__qXsv6",
	"content": "Faq_content__nsPoR",
	"faq": "Faq_faq__Zn7EP",
	"questionAnswer": "Faq_questionAnswer__GOwXj",
	"slice": "Faq_slice__3I9qQ",
	"question": "Faq_question__LpKbN",
	"link": "Faq_link__ViokG"
};


/***/ }),

/***/ 2636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Faq)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/assets/slice.png
/* harmony default export */ const slice = ({"src":"/_next/static/media/slice.fe000b30.png","height":135,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoklEQVR42l3NMQ7BYByG8f/sHhZXMBlcQVJJJRJJDc1XSTWRWC1uwNLJYq1Ew1dtI5RY7AxWEZsES9+XGD0HeH6CpHtj3Nxg31e4BkX5DytFLmrE1iPP/huXyQ7H4QCzapm+FATay5i2SW0+kfX4PRGJRaYWEXVOko+NEiL3zrUidZ1cGjmTFhHZROA2fkw+MouYOyFi7wHtvBCqA6Z2RUTkAwztYuzedlKVAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./styles/Faq.module.css
var Faq_module = __webpack_require__(6171);
var Faq_module_default = /*#__PURE__*/__webpack_require__.n(Faq_module);
;// CONCATENATED MODULE: ./pages/faq.js






function Faq() {
    const faq = [
        {
            question: "What is Startup@UCR?",
            answer: ""
        },
        {
            question: "How do I join?",
            answer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    "You can apply by",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: "/signin",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Faq_module_default()).link,
                            children: "signing in first"
                        })
                    }),
                    " ",
                    "with your Github, Google, or LinkedIn account and filling out the check-in form. The check-in form is accessible on the website after signing in."
                ]
            })
        },
        {
            question: "When?",
            answer: "."
        },
        {
            question: "How much does it cost?",
            answer: ""
        },
        {
            question: "Where is the event?",
            answer: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
        },
        {
            question: "Where will we submit?",
            answer: "Y"
        },
        {
            question: "Can I use a project I've already worked on?",
            answer: ""
        },
        {
            question: "I've never started a business beofre!",
            answer: "That's the best reason to come out! "
        },
        {
            question: "What will I need to participate?",
            answer: "A working device (i.e your laptop or PC) and a stable internet connection. And, of course, you."
        },
        {
            question: "I’m in high school, am I still eligible to apply?",
            answer: "Yes, we welcome anyone from any high school or college to come out and hack with us."
        },
        {
            question: "",
            answer: ""
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Faq_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Faq_module_default()).wave,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1200 120",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",
                        className: (Faq_module_default()).shapefill
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Faq_module_default()).mainContent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Questions?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (Faq_module_default()).content
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Faq_module_default()).faq,
                        children: faq.map(({ question , answer  }, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Faq_module_default()).questionAnswer,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Faq_module_default()).question,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Faq_module_default()).slice,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    alt: "Startup Slice",
                                                    src: slice,
                                                    width: 201,
                                                    height: 135,
                                                    quality: 80,
                                                    layout: "responsive",
                                                    objectFit: "contain"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: question
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: answer
                                        })
                                    })
                                ]
                            }, idx))
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;