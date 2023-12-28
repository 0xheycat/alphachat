exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 2946:
/***/ ((module) => {

// Exports
module.exports = {
	"dialog": "ConnectToRoom_dialog__XuWXJ"
};


/***/ }),

/***/ 4982:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "ConnectToRoomForm_title__VQLmz",
	"wrapComponent": "ConnectToRoomForm_wrapComponent__OGwDt",
	"button": "ConnectToRoomForm_button__D43w_",
	"inputWrap": "ConnectToRoomForm_inputWrap__ev3PM",
	"inputWrapPassword": "ConnectToRoomForm_inputWrapPassword__ajZvs"
};


/***/ }),

/***/ 2087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ConnectToRoom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ConnectToRoomForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(596);
/* harmony import */ var _ConnectToRoom_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2946);
/* harmony import */ var _ConnectToRoom_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ConnectToRoom_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ConnectToRoomForm__WEBPACK_IMPORTED_MODULE_4__]);
_ConnectToRoomForm__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Modal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../client/components/ConnectToRoom/ConnectToRoom.tsx -> " + "@/ui/Modal/Modal"
        ]
    },
    ssr: false
});
const ConnectToRoom = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ isOpen, onClose })=>{
    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const onCreateRoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        push("/room");
    }, [
        push
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Modal, {
        size: "lg",
        show: isOpen,
        showShadow: true,
        onClose: onClose,
        onHide: onClose,
        dialogClassName: (_ConnectToRoom_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dialog),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConnectToRoomForm__WEBPACK_IMPORTED_MODULE_4__/* .ConnectToRoomForm */ .o, {
            onCreateRoom: onCreateRoom
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ ConnectToRoomForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2138);
/* harmony import */ var _ui_Buttons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1802);
/* harmony import */ var _ui_Input_InputFormik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8734);
/* harmony import */ var _connectors_rooms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2819);
/* harmony import */ var _ui_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7821);
/* harmony import */ var _hooks_useToast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4187);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5528);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1237);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2571);
/* harmony import */ var _ConnectToRoomForm_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4982);
/* harmony import */ var _ConnectToRoomForm_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ConnectToRoomForm_module_scss__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_Input_InputFormik__WEBPACK_IMPORTED_MODULE_5__, _hooks_useToast__WEBPACK_IMPORTED_MODULE_8__]);
([_ui_Input_InputFormik__WEBPACK_IMPORTED_MODULE_5__, _hooks_useToast__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const config = (0,_utils_config__WEBPACK_IMPORTED_MODULE_11__/* .getConfig */ .i)();
const ConnectToRoomForm = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ onCreateRoom })=>{
    const { error } = (0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const [isValidating, setIsValidating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const validationSchema = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_helpers__WEBPACK_IMPORTED_MODULE_9__/* .getValidationSchema */ .i)(), []);
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const submitForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
    }, []);
    const onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (values)=>{
        try {
            setLoading(true);
            const { password = "", name } = values || {};
            if (!password) throw new Error("password required");
            if (!name) throw new Error("name required");
            const response = await (0,_connectors_rooms__WEBPACK_IMPORTED_MODULE_6__/* .connectToRoom */ .pR)(password, name);
            const { error } = await response.json();
            if (response.ok && !error) {
                onCreateRoom?.();
            } else {
                throw new Error(error || "Unknown error");
            }
        } catch (e) {
            error(e?.message || "Unknown error");
        } finally{
            setLoading(false);
        }
    }, [
        error,
        onCreateRoom
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsValidating(true);
        submitForm();
    }, [
        submitForm
    ]);
    const handleSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>e.preventDefault(), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
        innerRef: formRef,
        validateOnChange: isValidating,
        validateOnBlur: isValidating,
        initialValues: _helpers__WEBPACK_IMPORTED_MODULE_9__/* .initialValues */ .S,
        onSubmit: onSubmitForm,
        enableReinitialize: true,
        validationSchema: validationSchema,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: handleSubmitForm,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Box__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
                direction: "column",
                children: [
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Spinner__WEBPACK_IMPORTED_MODULE_7__/* .Spinner */ .$, {
                        fullscreen: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Box__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
                        className: (_ConnectToRoomForm_module_scss__WEBPACK_IMPORTED_MODULE_12___default().title),
                        children: "Join Chat Room"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_Box__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
                        direction: "column",
                        className: (_ConnectToRoomForm_module_scss__WEBPACK_IMPORTED_MODULE_12___default().wrapComponent),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Input_InputFormik__WEBPACK_IMPORTED_MODULE_5__/* .InputFormik */ .F, {
                                autoFocus: true,
                                placeholder: "User name",
                                label: "User Name",
                                showCounter: true,
                                isValidateRange: true,
                                max: config.MAX_USER_NAME_SYMBOLS,
                                name: _types__WEBPACK_IMPORTED_MODULE_10__/* .Fields */ .I.name,
                                classNameWrap: (_ConnectToRoomForm_module_scss__WEBPACK_IMPORTED_MODULE_12___default().inputWrap)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Input_InputFormik__WEBPACK_IMPORTED_MODULE_5__/* .InputFormik */ .F, {
                                placeholder: "Password",
                                classNameWrap: (_ConnectToRoomForm_module_scss__WEBPACK_IMPORTED_MODULE_12___default().inputWrapPassword),
                                label: "Password",
                                name: _types__WEBPACK_IMPORTED_MODULE_10__/* .Fields */ .I.password,
                                type: "text"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Buttons_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        onClick: onSubmit,
                        className: (_ConnectToRoomForm_module_scss__WEBPACK_IMPORTED_MODULE_12___default().button),
                        children: "Join"
                    })
                ]
            })
        })
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ initialValues),
/* harmony export */   i: () => (/* binding */ getValidationSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5528);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2571);



const getValidationSchema = ()=>{
    return yup__WEBPACK_IMPORTED_MODULE_0__.object({
        [_types__WEBPACK_IMPORTED_MODULE_1__/* .Fields */ .I.name]: yup__WEBPACK_IMPORTED_MODULE_0__.string().test(_types__WEBPACK_IMPORTED_MODULE_1__/* .Fields */ .I.name, "Invalid name entered", (value)=>!!(value && value.trim()?.length)).required("Required").max((0,_utils_config__WEBPACK_IMPORTED_MODULE_2__/* .getConfig */ .i)().MAX_USER_NAME_SYMBOLS, `Must be less than ${(0,_utils_config__WEBPACK_IMPORTED_MODULE_2__/* .getConfig */ .i)().MAX_USER_NAME_SYMBOLS} characters`),
        [_types__WEBPACK_IMPORTED_MODULE_1__/* .Fields */ .I.password]: yup__WEBPACK_IMPORTED_MODULE_0__.string().test(_types__WEBPACK_IMPORTED_MODULE_1__/* .Fields */ .I.password, "Invalid password entered", (value)=>!!(value && value.trim()?.length)).required("Required")
    });
};
const initialValues = {
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .Fields */ .I.name]: "",
    [_types__WEBPACK_IMPORTED_MODULE_1__/* .Fields */ .I.password]: ""
};


/***/ }),

/***/ 596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* reexport safe */ _ConnectToRoomForm__WEBPACK_IMPORTED_MODULE_0__.o)
/* harmony export */ });
/* harmony import */ var _ConnectToRoomForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ConnectToRoomForm__WEBPACK_IMPORTED_MODULE_0__]);
_ConnectToRoomForm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Fields)
/* harmony export */ });
var Fields;
(function(Fields) {
    Fields["name"] = "name";
    Fields["password"] = "password";
})(Fields || (Fields = {}));


/***/ }),

/***/ 5350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* reexport safe */ _ConnectToRoom__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _ConnectToRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2087);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ConnectToRoom__WEBPACK_IMPORTED_MODULE_0__]);
_ConnectToRoom__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;