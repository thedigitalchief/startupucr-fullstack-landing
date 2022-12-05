exports.id = 864;
exports.ids = [864];
exports.modules = {

/***/ 7978:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "Team_section__Ic6r0",
	"wave": "Team_wave__kcA__",
	"shapefill": "Team_shapefill__PZ1ux",
	"team": "Team_team__Bw_Xv",
	"grid": "Team_grid__CSnma",
	"image": "Team_image__HSdxp",
	"leaves": "Team_leaves__DiBXq",
	"link": "Team_link__EzDoD",
	"name": "Team_name__B3Caj",
	"role": "Team_role__EX90y",
	"committee": "Team_committee__zAYhW",
	"committeeWrapper": "Team_committeeWrapper__GfQ6w",
	"committeeImageGroup": "Team_committeeImageGroup__WFJfG",
	"imageGroup": "Team_imageGroup__MZ7w_",
	"laptop": "Team_laptop__PeOp3",
	"speechbubble": "Team_speechbubble__3UACX",
	"girl": "Team_girl__FU0_s"
};


/***/ }),

/***/ 6864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Team)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./public/assets/leaves.png
/* harmony default export */ const leaves = ({"src":"/_next/static/media/leaves.0ca9f218.png","height":488,"width":1116,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWklEQVR42mOwOuKxz/qkVywDErA65tFufcLzvuVh9+8M5ntd91kdcf8AFAhiAALr457ZQPwaqOi/+S6XxwwgYLrNKc1in1swAxAATayxPOR+03y3yyajNfbqAFIDIiQnHpNmAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./styles/Team.module.css
var Team_module = __webpack_require__(7978);
var Team_module_default = /*#__PURE__*/__webpack_require__.n(Team_module);
;// CONCATENATED MODULE: ./components/Lead.js





function Lead(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: props.linkedin,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
                    whileHover: {
                        y: -8
                    },
                    className: (Team_module_default()).image,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Team_module_default()).leaves,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: leaves,
                                alt: "leaves",
                                width: 279,
                                height: 122,
                                quality: 80,
                                layout: "responsive",
                                objectFit: "contain"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: props.image,
                            alt: "lead profile picture",
                            width: props.width,
                            height: props.height,
                            quality: 80,
                            layout: "responsive",
                            objectFit: "contain",
                            className: (Team_module_default()).link
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figcaption", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Team_module_default()).name,
                        children: props.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Team_module_default()).role,
                        children: props.role
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./public/assets/leads/rj.png
/* harmony default export */ const rj = ({"src":"/_next/static/media/rj.e80f3d4d.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAwklEQVR42mP4vyX/3+a8/9sK/u8qBqGtIC5QkAFIATmfV2ctL3ZaUuz2fX0uRI7h76a8/zuKpqdba+kbtObF7msL+b+jECgI0ZF3YmrO/ulVB2ZWX52T839b/l+Qjs35/7fn/dlSdnFh3fXlzf93lAPVAQUZgPKfVmfv60y9tnbKyYWt25pivq3L+789n+Fwb5qcRRQDg/3b169uXL/OwMDm4ZVwoDudISs8lskihoHD8eWr148ePWZg0OKxigsPSgIA+dpxwQaD1F8AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/audrey.png
/* harmony default export */ const audrey = ({"src":"/_next/static/media/audrey.7bc5dd2c.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAyUlEQVR42mP4vyX/3+Y8IPl/Z9H/7YX/Nuf/35L3b0s+A0T076bcmzPjni5M+b8Nqo7hL5DaXnCsN+LQkv7tMxruzY4F6gMKMvzfWvh7bfLu2S3vLx94cGLnpQUV/7dm/92cz/B/R8mzuSH9vT3/////9vP3lr6i/5sy/20pAEoUPV8Uz8DAcHnfpgt71oerAEVy/28F6thWsL+vjEE93M27xNG7xMo24uDEht+b8hneryq2jey1iZpoH91vF9nrENXH4NZ3aVYVAG7fdvV/yn0wAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/paulian.png
/* harmony default export */ const paulian = ({"src":"/_next/static/media/paulian.44ca208e.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAw0lEQVR42mP4vyX/3+a8/1sL/u8q+r+zEMIFkgxg0fwf67L2NAec7o8CCv3fkgcUZPgLlNiev78r9sDCzkUdZWcmRP7fWfR3Ux7D/y0FfzZkHp1e/GTXrGvrJ21ujv6/DagjnwFo+tc1GZPzgx4fXHF7+7xZ+T5/N+WCJECGbitIdlQ7v6Ln+oZJgZaa/zfnAUVAOo50RzIwMEzuaV84awqDnP7m+uDfG3MZXi1NZxA3YGCQrG1p75w4RUMDyFY5NykWAPfAcXkPZ9/4AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/westin.png
/* harmony default export */ const westin = ({"src":"/_next/static/media/westin.addc8dad.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAv0lEQVR42mP4vyX/3+a8/1sL/u8qBqGtIC5QkAEsmv91bdayYuf11V6/NoJEgYIMfzfl/d9ZtKclYEJ2YGuyz7GeMCAXKMjwF6hjW/6V6SknJmUdn5h5ZXrS/20FQEGGP5tAFvxen31lcdPlRQ0/12cBJYCCDECN/zdl311UdHXfxhuHtt5dXvt3Q/r/ncUMJ/si01w1tBy87tx7cPf+A//opFBj3n3tYQwMDDJA7OXufu7s2X379sVGRTGAgDQA4e5ykUstHX4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/mariam.png
/* harmony default export */ const mariam = ({"src":"/_next/static/media/mariam.ac7f260f.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAzUlEQVR42mP4vyX/3+a8/1sL/m3O/b+t4P9WEBcoyPAXSG0reLU0bXKW56b6oD+b8iBKGf6BJPK3NIYdn1W1pCF9b1vI/52FfzflMfzfVvhxZdqs0oiri2s2dWb1JNn+31EINIbh/86imzPjc4Ic7m2bfW5ZV6StyqfV2UDDGf7vKLg0IZCBgWHfhPxdvTlAxsfliUDDGf7vKr+7vpuBgXvHhKKLq3qLMpOeben+v6OM4c+hyS9vnT65a83NA2s+3jz6+ubJR1dP/D42GwBXjHh0/ooxXgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/marshall.png
/* harmony default export */ const marshall = ({"src":"/_next/static/media/marshall.db7a03a5.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAxklEQVR42mP4vyXv3+b8/1ty/m/N+L818//mvH9bgNw8BrBo7o/N5adXTr25tv//lgKIHMPfzQX/t2ZdXt6xaf3a9SuXv15d/n9rDlA1UEfe/20FF5Y0r5vWsnpK84v1Tf+3gCX+Ao3alPX/QO+Do5ufn9j0f1/T/03ZQEGG/9sL/2/LvzUr+d6eJXd2Lbw+PQ5o8/8dhQxPF6VUh1sxMHAUp0RlxoYyMDDk+ZvdmZ3AMCfPjYGB0VhLjQEMTLXVGRg4ayKsAMKvcIPJLzbyAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/kimmy.png
/* harmony default export */ const kimmy = ({"src":"/_next/static/media/kimmy.c0c4928d.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAvUlEQVR42mP4vyX/3+Y8IPl/V/H/nUVANoTLAKK25v/akH28O+jy1BiQOrBShr9Aie0FR3qits7rXTqh4crU6P87CoGCQB35/7dk75uQc3PH/AsbZu7qiPu/Lf/v5nywxOacjc1xD/avuLlz0Y7WKJDEpjwGkLW7i1vDNC5sWnh194reBLP/u4rAlm/KOTghk4GBYd/uXdcuXwQyNrUm/9qQw3B3TiKXrb+ChtHmzZufP3/u5enFoO95fnIcANUfdyyYku6MAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/henry.png
/* harmony default export */ const henry = ({"src":"/_next/static/media/henry.df6ceae6.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA0ElEQVR42mP4vyX/3+a8/zsKf6zL+r8l7/+2AiAXKMjwF0htL7w1MyYr0GZmntePddn/t4KUMvzfWvB7Q+as8ui7e5fsWNB7sC3g/86iv5vyGP5tKfi/Kevext5HB5bd2bP42Zrq/1ty/m0GGZX/f3P2vz0tr8/ven96w/9dlf835wIFGf5vL/i/Lf/+nJTHexc/2D3/5oxEoM1AQYZ789KbU8IYNL2SImMjQ2MYlDzzIoKvTE9lSAoMZJD2srH3F9X3lDP0dHD0Z5D1KowMBgCUb3G6ElsQpwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/michelle.png
/* harmony default export */ const michelle = ({"src":"/_next/static/media/michelle.dfd27e2f.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAt0lEQVR42mP4vyX/3+Y8IPl/V/H/7YUQNpBkgLB+bcg92RP6cEHq/20FEBGGv5vy/u8s2tMcpGPq5GRm+XRh8v/tBX+BOv5vKfi/KWv/pMJH+5ccWTbx3KS4/zsKgaqBEkC9+ZvaM16d3nZ738o11cH/d5b83ZwPlMj9viKCkYHh1NKeU0u7GBgY3i0I+L8NqGNn+YcTa6bNmP3u+eMXD25fv3n788Xd/7eXMvy/tOXff3Tw79puALAhhVFpMhf8AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/leads/js.png
/* harmony default export */ const js = ({"src":"/_next/static/media/js.24438e90.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAvElEQVR42mP4vyX/3+a8/1vz/+8o/L+9AMIFkgwQ0e/rsk71R92ZmwoU+r8lDyjI8Bcosb1gZ1PQ9raUxRVRN2fGArX+3ZTHAFTyd1Pu4hLfg73pW1sS785JAaoDqgZJ/NyQMz3L5fLM/GMTs27MiP+/rQCoA2zHnuIbM2Jn5AfPKQp+siD5/+5ioGqQHYc6I4MdbRj4dBgEdN0sLXe3hv/emMtwZ3YSA4M2g6yRnq4ZEImpmDAwaJydGAsAHpNs0m8CgWYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/laptop.png
/* harmony default export */ const laptop = ({"src":"/_next/static/media/laptop.8b3a5349.png","height":702,"width":645,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA5UlEQVR42mOAAr7GCFmfZZMbpu3Yvvjr1IltUWDRBXOmztm8bOWLAxcv/j94+/j/U69u/t+0dkYmWHLzjhNvF62++H/T2ad/rnz48ePbjTX/9yyuKwJLnji469Tvz8/+Xzp/6+/Z42d/3zi+4f+6ZQvawJIb1iw5cPPyqf/7Duz/u2fPzn/7Dx39f+nSpTcf3r2VZtixY1fu8RMn/589c+bXlStX/t6+dfP/82fP/r97+3YPWPfDBw9OvXj+/P+rly//P3ny5BuQPvjo4cNSsOSzJ08cXr54cfz+vXtZR48cUYH5DwB+3Y/zOYBwZgAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/assets/speechbubble.png
/* harmony default export */ const speechbubble = ({"src":"/_next/static/media/speechbubble.5cd32814.png","height":338,"width":685,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeElEQVR42g3GwQnCQBBA0T8ziayHeBMi5GIBYhdiXTZgA3ZiJ149Swh6iK47k4UP/4lfj09JwxBRAs+CJfBfkffdQtOtYdV3dHtExPG/ADA9HG0tgo2SR4v5RXyn+lGrNda7lu6EMCf5XDirsw2noCC1gGwNBzX6BWahL4muRiTxAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./public/assets/girl.png
/* harmony default export */ const girl = ({"src":"/_next/static/media/girl.32973db8.png","height":788,"width":507,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR4nA3IsQoBARgH8P/33bkFsShFJjISJZO8wsmqjJ5ANhMew+KUwQNYSMooWYhXEK5zuLvuPrf8hh/16+mOylKuuYF+0eiQ89CmUTMlXgBEPIbPYt2ZimS0kksibt2eMTiuL5rYFVroGCjAxP1gdnyo2Wg8P6YVgG9Pv6qJ7Gl3OCraa1cnY2tNFefdJVZgW+b+rBeGNF8/RZgBAZjpUW3EM2RsXj5JOOGFmv7PLv0BvmJGjdwk1EMAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/team.js


















function Team() {
    const leads = [
        {
            image: rj,
            width: "1024",
            height: "1024",
            name: "Sam Kammerman",
            role: "President, Founder",
            linkedin: "https://www.linkedin.com/in//"
        },
        {
            image: audrey,
            width: "1024",
            height: "1024",
            name: "Dylan Nguyen",
            role: "Vice President, Founder",
            linkedin: "https://www.linkedin.com/in/dylanhnguyen/"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Team_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Team_module_default()).wave,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "data-name": "Layer 1",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1200 120",
                    preserveAspectRatio: "none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                        className: (Team_module_default()).shapefill
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Team_module_default()).team,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Our Board"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Team_module_default()).grid,
                        children: leads.map(({ image , width , height , name , role , linkedin  })=>/*#__PURE__*/ jsx_runtime_.jsx(Lead, {
                                image: image,
                                width: width,
                                height: height,
                                name: name,
                                role: role,
                                linkedin: linkedin
                            }))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Team_module_default()).committeeWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Team_module_default()).committeeImageGroup,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Team_module_default()).committee,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Comittee Members"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: " Gregory Paik"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Team_module_default()).laptop,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            alt: "Laptop image",
                                            src: laptop,
                                            quality: 80,
                                            layout: "responsive",
                                            objectFit: "contain"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Team_module_default()).imageGroup,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Team_module_default()).speechbubble,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            alt: "Speechbubble image",
                                            src: speechbubble,
                                            quality: 80,
                                            layout: "responsive",
                                            objectFit: "contain"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Team_module_default()).girl,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            alt: "Girl image",
                                            src: girl,
                                            quality: 80,
                                            layout: "responsive",
                                            objectFit: "contain"
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