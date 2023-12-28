exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 7085:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "InputCounter_wrap__vOBbe",
	"invalid": "InputCounter_invalid__BFZXJ"
};


/***/ }),

/***/ 4652:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "InputUi_wrap__pgcb8",
	"prepend": "InputUi_prepend__0BOuU",
	"inputWrap": "InputUi_inputWrap__CMNge",
	"input": "InputUi_input___BqrP",
	"textarea": "InputUi_textarea__EXmx_",
	"label": "InputUi_label__OzKaR",
	"errorEmpty": "InputUi_errorEmpty__Qw2_1",
	"tooltip": "InputUi_tooltip__qGhty",
	"loading": "InputUi_loading__2K9Em",
	"disabled": "InputUi_disabled__uvGF7",
	"inputLabelFocused": "InputUi_inputLabelFocused__rZEud",
	"invalid": "InputUi_invalid__BrtJe",
	"error": "InputUi_error___xMXg"
};


/***/ }),

/***/ 5202:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Notification_root__3B12q",
	"error": "Notification_error__uxsNe",
	"icon": "Notification_icon__6spFd"
};


/***/ }),

/***/ 8604:
/***/ ((module) => {

// Exports
module.exports = {
	"icon": "Toast_icon__U9QNL",
	"iconWrap": "Toast_iconWrap__m5rAU",
	"iconSuccess": "Toast_iconSuccess__gyDge",
	"iconError": "Toast_iconError__Ktivj",
	"toastCommon": "Toast_toastCommon__FqpUg",
	"progress": "Toast_progress__Y7mu1",
	"dark": "Toast_dark__44_FT",
	"light": "Toast_light__XRUsH"
};


/***/ }),

/***/ 569:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ToastBody_wrap__FYacR"
};


/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GX: () => (/* binding */ deleteRoom),
/* harmony export */   dB: () => (/* binding */ createRoom),
/* harmony export */   jL: () => (/* binding */ leaveRoom),
/* harmony export */   pR: () => (/* binding */ connectToRoom),
/* harmony export */   rZ: () => (/* binding */ getRoomMessagesTimestamp)
/* harmony export */ });
/* unused harmony export getRoomMessagesPages */
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1785);

const responseParser = async (response)=>{
    if (response.ok) {
        const { data, error } = await response.json();
        if (!data) {
            throw new Error(error || "Fetch error");
        }
        return data;
    }
    throw new Error("Fetch error");
};
const createRoom = (roomName, userName)=>{
    return (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._)("/api/new-room", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            roomName,
            userName
        })
    });
};
const connectToRoom = (connectPassword, userName)=>{
    return (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._)("/api/connect-to-room", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            connectPassword,
            userName
        })
    });
};
const leaveRoom = ()=>{
    return (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._)("/api/leave-room", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
};
const deleteRoom = (deletePassword)=>{
    return (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._)("/api/delete-room", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            deletePassword
        })
    });
};
const getRoomMessagesPages = async (pageNum, pageSize)=>{
    return fetcher(`/api/room-messages-pages?${new URLSearchParams({
        pageNum: `${pageNum}`,
        pageSize: `${pageSize}`
    })}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(responseParser);
};
const getRoomMessagesTimestamp = async (timestamp, count)=>{
    return (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .fetcher */ ._)(`/api/room-messages-timestamp?${new URLSearchParams({
        timestamp: `${timestamp}`,
        count: `${count}`
    })}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(responseParser);
};


/***/ }),

/***/ 4187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_Toast_hooks_useToast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3958);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6444);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_Toast_hooks_useToast__WEBPACK_IMPORTED_MODULE_0__]);
_ui_Toast_hooks_useToast__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useToast = ()=>{
    const { theme } = (0,_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__/* .useTheme */ .Fg)();
    const toast = (0,_ui_Toast_hooks_useToast__WEBPACK_IMPORTED_MODULE_0__/* .useToast */ .p)({
        theme
    });
    return toast;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToast);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* reexport */ InputCounter)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/client/ui/Box/index.ts + 1 modules
var Box = __webpack_require__(2138);
// EXTERNAL MODULE: ./src/client/ui/Input/InputCounter/InputCounter.module.scss
var InputCounter_module = __webpack_require__(7085);
var InputCounter_module_default = /*#__PURE__*/__webpack_require__.n(InputCounter_module);
;// CONCATENATED MODULE: ./src/client/ui/Input/InputCounter/InputCounter.tsx





const InputCounter = /*#__PURE__*/ (0,external_react_.memo)(({ count, max, inValid })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* Box */.x, {
        className: external_classnames_default()((InputCounter_module_default()).wrap, {
            [(InputCounter_module_default()).invalid]: inValid
        }),
        children: [
            count,
            "/",
            max
        ]
    });
});

;// CONCATENATED MODULE: ./src/client/ui/Input/InputCounter/index.ts



/***/ }),

/***/ 8734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ InputFormik)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7105);
/* harmony import */ var _InputUi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([use_debounce__WEBPACK_IMPORTED_MODULE_3__, _InputUi__WEBPACK_IMPORTED_MODULE_4__]);
([use_debounce__WEBPACK_IMPORTED_MODULE_3__, _InputUi__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const DEFAULT_DEBOUNCE = 100;
const InputFormik = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ name, debounceInterval = DEFAULT_DEBOUNCE, checkTouched = true, showError = true, showInvalid = true, showInvalidRange = true, isInvalid: isInvalidProps = false, onChange: onChangeProps = ()=>{}, ...props }, ref)=>{
    const [, { value, error, touched }, { setValue, setTouched }] = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useField)(name);
    const [localValue, setLocalValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
    const isInvalid = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>!!(error && (!checkTouched || touched)) || !!isInvalidProps, [
        error,
        touched,
        checkTouched,
        isInvalidProps
    ]);
    const setFormValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((val, event, check)=>{
        setValue(val);
        onChangeProps(val, event, check);
    }, [
        onChangeProps,
        setValue
    ]);
    const debouncedCallback = (0,use_debounce__WEBPACK_IMPORTED_MODULE_3__.useDebouncedCallback)(setFormValue, debounceInterval || DEFAULT_DEBOUNCE, {
        leading: true
    });
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((val, event, check)=>{
        setLocalValue(val);
        if (debounceInterval === null) {
            setFormValue(val, event, check);
        } else {
            debouncedCallback(val, event, check);
        }
    }, [
        debouncedCallback,
        debounceInterval,
        setFormValue
    ]);
    const onBlur = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setTouched(true), [
        setTouched
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLocalValue(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputUi__WEBPACK_IMPORTED_MODULE_4__/* .InputUi */ .g, {
        ...props,
        ref: ref,
        showInvalidRange: showInvalidRange,
        showInvalid: showInvalid,
        name: name,
        value: localValue,
        error: error,
        showError: showError,
        isInvalid: isInvalid,
        onChange: onChange,
        onBlur: onBlur
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ InputUi)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4853);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4648);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
/* harmony import */ var _utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9958);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7821);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9641);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2138);
/* harmony import */ var _InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4652);
/* harmony import */ var _InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3525);
/* harmony import */ var _InputCounter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(111);
/* harmony import */ var _hooks_useValidInputRange__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_5__]);
([react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const InputUi = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ id, label = "", value, isNumber = false, isFloat = false, isPositive = false, isInvalid = false, disabled, min, max, error, prepend, append, showError = false, showInvalid = false, showInvalidRange = false, autoComplete = "off", classNameWrap, classNameLabel, classNameInput, classNameErrorEmpty, classNameError, classNamePrepend, classNameAppend, classNameInputLabelFocused, classNameInputLabel, onChange: onChangeProps = ()=>{}, onKeyDown = ()=>{}, onBlur = ()=>{}, onFocus = ()=>{}, loading = false, as, resize = "none", autosize = false, // пропсы для инпута типа "mask"
mask, alwaysShowMask, beforeMaskedStateChange, renderError, emptyError = false, theme = _utils_types__WEBPACK_IMPORTED_MODULE_6__/* .Theme */ .Q.dark, showCounter, isValidateRange: isValidateRangeProp = false, ...props }, ref)=>{
    const isValidateRange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>isValidateRangeProp && (max !== undefined || min !== undefined), [
        isValidateRangeProp,
        max,
        min
    ]);
    const { isValid: isValidRange, onChangeIsValid } = (0,_hooks_useValidInputRange__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const [inputId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(id || (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v1)());
    const [focused, setFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [localValue, setLocalValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value ? `${value}` : "");
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value, e, check)=>{
        onChangeProps?.(value, e, check);
        if (isValidateRange) {
            onChangeIsValid(check || false);
        }
    }, [
        onChangeProps,
        onChangeIsValid,
        isValidateRange
    ]);
    const checkMin = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ val, check = true })=>{
        return min !== undefined && val < min ? {
            val: min,
            check: false
        } : {
            val,
            check: check && true
        };
    }, [
        min
    ]);
    const checkMax = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ val, check = true })=>{
        if (max !== undefined) {
            if (isFloat || isNumber) {
                return val > max ? {
                    val: max,
                    check: false
                } : {
                    val,
                    check: check && true
                };
            }
            return val.length <= max ? {
                val,
                check: check && true
            } : {
                val: `${val}`.substr(0, max),
                check: false
            };
        }
        return {
            val,
            check: true
        };
    }, [
        max,
        isFloat,
        isNumber
    ]);
    const checkMinMax = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(({ val, check = true })=>checkMax(checkMin({
            val,
            check
        })), [
        checkMax,
        checkMin
    ]);
    const getCheckedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((val)=>{
        if (!val && val !== 0) return isNumber || isFloat ? {
            val: undefined
        } : val === null ? {
            val
        } : {
            val: ""
        };
        if (isPositive && (isNumber || isFloat) && val < 0) return {
            val: undefined
        };
        return checkMinMax({
            val
        });
    }, [
        isNumber,
        isFloat,
        isPositive,
        checkMinMax
    ]);
    const handleBlur = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((evt)=>{
        setFocused(false);
        onBlur(evt);
        if (isFloat && localValue) {
            const parsedValue = parseFloat(localValue);
            setLocalValue(!Number.isNaN(parsedValue) ? `${parsedValue}` : "");
        }
    }, [
        isFloat,
        localValue,
        onBlur
    ]);
    const handleFocus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((evt)=>{
        setFocused(true);
        onFocus(evt);
    }, [
        onFocus
    ]);
    const handleChangeFloat = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((evt)=>{
        const { val, check } = checkMinMax({
            val: (evt.target.value || "").replace(/,/g, ".")
        });
        const valStr = `${val}`;
        const parsedValue = parseFloat(valStr);
        const re = /^\d+(\.(\d+)?)/;
        if (re.test(valStr)) {
            setLocalValue(valStr.match(re)?.[0] || "");
        } else if (!isPositive && (valStr === "-" || /[-]\d+$|[-]\d+\.$/.test(valStr))) {
            setLocalValue(`${valStr}`);
        } else {
            setLocalValue(!Number.isNaN(parsedValue) ? `${parsedValue}` : "");
        }
        onChange(!Number.isNaN(parsedValue) ? parsedValue : undefined, evt, check);
    }, [
        onChange,
        isPositive,
        checkMinMax
    ]);
    const handleChangeNumber = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((evt)=>{
        const { val, check } = checkMinMax({
            val: evt.target.value
        });
        const valStr = `${val}`;
        const parsedValue = parseInt(valStr, 10);
        if (!isPositive && (valStr === "-" || /[-]\d+$/.test(valStr))) {
            setLocalValue(`${valStr}`);
        } else {
            setLocalValue(!Number.isNaN(parsedValue) ? `${parsedValue}` : "");
        }
        onChange(!Number.isNaN(parsedValue) ? parsedValue : undefined, evt, check);
    }, [
        onChange,
        isPositive,
        checkMinMax
    ]);
    const handleChangeText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((evt)=>{
        const { val, check } = checkMinMax({
            val: evt.target.value
        });
        const valStr = `${val}`;
        setLocalValue(valStr);
        onChange(valStr, evt, check);
    }, [
        onChange,
        checkMinMax
    ]);
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((evt)=>{
        if (isNumber) {
            return handleChangeNumber(evt);
        }
        if (isFloat) {
            return handleChangeFloat(evt);
        }
        return handleChangeText(evt);
    }, [
        isNumber,
        isFloat,
        handleChangeText,
        handleChangeFloat,
        handleChangeNumber
    ]);
    const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((evt)=>{
        const val = evt.target.value;
        onKeyDown(evt);
        if (isNumber || isFloat) {
            const keyCode = evt.keyCode || evt.which;
            if (keyCode && [
                _types__WEBPACK_IMPORTED_MODULE_10__/* .keyCodes */ .D.ARROW_UP,
                _types__WEBPACK_IMPORTED_MODULE_10__/* .keyCodes */ .D.ARROW_DOWN
            ].includes(keyCode)) {
                const decimalAfterPoint = val?.split(".")?.[1]?.length || 0;
                const incremented = (+val + (keyCode === _types__WEBPACK_IMPORTED_MODULE_10__/* .keyCodes */ .D.ARROW_UP ? 1 : -1)).toFixed(decimalAfterPoint);
                const { val: newValue, check } = checkMinMax({
                    val: isFloat ? parseFloat(incremented) : parseInt(incremented, 10)
                });
                if (newValue && newValue > 0 || !isPositive) {
                    setLocalValue(!Number.isNaN(newValue) ? `${newValue}` : "");
                    onChange(!Number.isNaN(newValue) ? newValue : undefined, evt, check);
                }
            }
        }
    }, [
        isNumber,
        isFloat,
        isPositive,
        onKeyDown,
        onChange,
        checkMinMax
    ]);
    const inputAs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (as === "textarea") {
            if (autosize) {
                return react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"];
            }
            return "textarea";
        }
        if (mask) {
            return (react_input_mask__WEBPACK_IMPORTED_MODULE_4___default());
        }
        return "input";
    }, [
        as,
        autosize,
        mask
    ]);
    const InputElement = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(inputAs, {
        ref,
        "data-testid": "input",
        id: inputId,
        value: localValue,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        onFocus: handleFocus,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().input), {
            [(_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().textarea)]: as === "textarea",
            [(_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().disabled)]: disabled
        }, classNameInput),
        style: as === "textarea" && resize ? {
            resize
        } : undefined,
        autoComplete,
        disabled: disabled || loading,
        mask,
        ...mask ? {
            alwaysShowMask,
            beforeMaskedStateChange
        } : {},
        ...props
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { val: checkedValue } = getCheckedValue(value);
        if (checkedValue !== value && value !== undefined) {
            onChange(checkedValue);
        }
        if (isFloat && parseFloat(value) !== parseFloat(localValue) || isNumber && parseInt(value, 10) !== parseInt(localValue, 10)) {
            const val = isFloat ? parseFloat(checkedValue) : parseInt(checkedValue, 10);
            setLocalValue(!Number.isNaN(val) ? `${val}` : "");
        } else if (!isNumber && !isFloat && checkedValue !== localValue) {
            setLocalValue(checkedValue ? `${checkedValue}` : "");
        } else if (checkedValue !== localValue && checkedValue === value && isNumber) {
            setLocalValue(`${checkedValue}`);
        }
    }, [
        value,
        isFloat,
        localValue,
        isNumber,
        getCheckedValue,
        isPositive,
        onChange
    ]);
    const prependMemo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>prepend?.({
            focused
        }), [
        prepend,
        focused
    ]);
    const appendMemo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>append?.({
            focused
        }), [
        append,
        focused
    ]);
    const inValid = showInvalid && isInvalid || showInvalidRange && isValidateRange && !isValidRange;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().wrap), classNameWrap, (_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default())[theme], {
            [(_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().invalid)]: inValid
        }),
        children: [
            !!label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().label), classNameLabel),
                "data-testid": "input-label",
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                "data-testid": "input-label-for",
                htmlFor: inputId,
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().inputWrap), classNameInputLabel, {
                    [(_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().inputLabelFocused)]: focused,
                    [classNameInputLabelFocused || ""]: focused
                }),
                children: [
                    !!prepend && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .x, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().prepend), classNamePrepend),
                        "data-testid": "input-prepend",
                        children: prependMemo
                    }),
                    InputElement,
                    !!append && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box__WEBPACK_IMPORTED_MODULE_9__/* .Box */ .x, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().preappendpend), classNameAppend),
                        "data-testid": "input-append",
                        children: appendMemo
                    }),
                    showCounter && max && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InputCounter__WEBPACK_IMPORTED_MODULE_11__/* .InputCounter */ .l, {
                        inValid: inValid,
                        count: localValue?.length || 0,
                        max: max
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_7__/* .Spinner */ .$, {
                        fullscreen: true,
                        classNameWrap: (_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().loading)
                    })
                ]
            }),
            showError && (isInvalid && error ? renderError ? renderError(error) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Notification__WEBPACK_IMPORTED_MODULE_8__/* .Notification */ .P, {
                variant: "error",
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().error), classNameError),
                children: error
            }) : emptyError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-testid": "input-error-empty",
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_InputUi_module_scss__WEBPACK_IMPORTED_MODULE_13___default().errorEmpty), classNameErrorEmpty)
            }))
        ]
    });
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const VALIDATE_TIMEOUT = 1000;
const useValidInputRange = ()=>{
    const [isValid, setIsValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [isValidRerender, setIsValidRerender] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const onChangeIsValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isValid)=>{
        setIsValid(isValid);
        setIsValidRerender(isValid ? null : Math.random());
    }, []);
    const checkErrorTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (checkErrorTimeout.current) clearTimeout(checkErrorTimeout.current);
        checkErrorTimeout.current = setTimeout(()=>{
            setIsValid(true);
        }, VALIDATE_TIMEOUT);
        return ()=>{
            if (checkErrorTimeout.current) clearTimeout(checkErrorTimeout.current);
        };
    }, [
        isValidRerender
    ]);
    return {
        isValid,
        onChangeIsValid
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useValidInputRange);


/***/ }),

/***/ 3525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ keyCodes)
/* harmony export */ });
/* unused harmony export InputUiTypes */
var InputUiTypes;
(function(InputUiTypes) {
    InputUiTypes[InputUiTypes["REGULAR"] = 0] = "REGULAR";
    InputUiTypes[InputUiTypes["PHONE"] = 1] = "PHONE";
})(InputUiTypes || (InputUiTypes = {}));
var keyCodes;
(function(keyCodes) {
    keyCodes[keyCodes["ARROW_UP"] = 38] = "ARROW_UP";
    keyCodes[keyCodes["ARROW_DOWN"] = 40] = "ARROW_DOWN";
})(keyCodes || (keyCodes = {}));


/***/ }),

/***/ 9641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* reexport */ Notification)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/client/utils/types.ts
var types = __webpack_require__(9958);
// EXTERNAL MODULE: ./src/client/ui/Box/index.ts + 1 modules
var Box = __webpack_require__(2138);
// EXTERNAL MODULE: ./src/client/ui/Notification/Notification.module.scss
var Notification_module = __webpack_require__(5202);
var Notification_module_default = /*#__PURE__*/__webpack_require__.n(Notification_module);
;// CONCATENATED MODULE: ./src/client/ui/Notification/Notification.tsx





const Notification = ({ children, variant, className, theme = types/* Theme */.Q.dark, ...props })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(Box/* Box */.x, {
        className: external_classnames_default()((Notification_module_default()).root, (Notification_module_default())?.[variant], (Notification_module_default())[theme], className),
        justifyContent: "flex-start",
        alignItems: "flex-start",
        ...props,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/client/ui/Notification/index.ts



/***/ }),

/***/ 5149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* reexport */ ToastBody)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/client/utils/utils.ts
var utils = __webpack_require__(1740);
// EXTERNAL MODULE: ./src/client/ui/Box/index.ts + 1 modules
var Box = __webpack_require__(2138);
// EXTERNAL MODULE: ./src/client/utils/types.ts
var types = __webpack_require__(9958);
;// CONCATENATED MODULE: ./src/client/ui/Toast/ToastBody/helpers.ts
const Types = {
    success: "Success",
    error: "Error"
};
const getTitle = (type)=>`${Types[type]}.`;

// EXTERNAL MODULE: ./src/client/ui/Toast/ToastBody/ToastBody.module.scss
var ToastBody_module = __webpack_require__(569);
var ToastBody_module_default = /*#__PURE__*/__webpack_require__.n(ToastBody_module);
;// CONCATENATED MODULE: ./src/client/ui/Toast/ToastBody/ToastBody.tsx








function Component({ content, type, theme = types/* Theme */.Q.dark, ...args }) {
    const title = (0,external_react_.useMemo)(()=>getTitle(type), [
        type
    ]);
    const renderContent = (0,external_react_.useMemo)(()=>{
        if (!content) return null;
        if (typeof content === "function") return content(args);
        if (typeof content === "string") return /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: content
        });
        return content;
    }, [
        content,
        args
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* Box */.x, {
        direction: "column",
        className: external_classnames_default()((ToastBody_module_default()).wrap, (ToastBody_module_default())[theme]),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: title
            }),
            renderContent
        ]
    });
}
const ToastBody = (0,utils/* genericMemo */.Vv)(Component);

;// CONCATENATED MODULE: ./src/client/ui/Toast/ToastBody/index.ts



/***/ }),

/***/ 3958:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony export getCommonProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2138);
/* harmony import */ var _ui_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5146);
/* harmony import */ var _ToastBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5149);
/* harmony import */ var _Toast_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8604);
/* harmony import */ var _Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const getCommonProps = (props)=>{
    const { theme } = props || {};
    return {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.POSITION.BOTTOM_RIGHT,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default())[theme], (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default().toastCommon)),
        progressClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default())[theme], (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default().progress)),
        autoClose: 5000,
        pauseOnHover: true
    };
};
function useToast(props) {
    const { theme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>props || {}, [
        props
    ]);
    const success = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((content, options)=>{
        return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToastBody__WEBPACK_IMPORTED_MODULE_7__/* .ToastBody */ .Y, {
                type: "success",
                theme: theme,
                content: content,
                ...props
            }), {
            ...getCommonProps({
                theme
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Box__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default())[theme], (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconWrap), (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconSuccess)),
                alignItems: "center",
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .J, {
                    name: "check_small",
                    width: 10,
                    height: 12,
                    className: (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon)
                })
            }),
            ...options
        });
    }, [
        theme
    ]);
    const error = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((content, options)=>{
        return react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToastBody__WEBPACK_IMPORTED_MODULE_7__/* .ToastBody */ .Y, {
                type: "error",
                theme: theme,
                content: content,
                ...props
            }), {
            ...getCommonProps({
                theme
            }),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Box__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default())[theme], (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconWrap), (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iconError)),
                alignItems: "center",
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Icon__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .J, {
                    name: "close_small",
                    width: 10,
                    className: (_Toast_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon)
                })
            }),
            ...options
        });
    }, [
        theme
    ]);
    return {
        success,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ getConfig)
/* harmony export */ });
const getConfig = ()=>({
        MAX_USER_NAME_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS || 0) || 15,
        MAX_ROOM_NAME_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS || 0) || 30,
        MAX_MESSAGE_SYMBOLS: Number(process.env.NEXT_PUBLIC_MAX_MESSAGE_SYMBOLS || 0) || 500,
        PAGE_SIZE: 10,
        MAX_PAGE_SIZE: 100
    });


/***/ }),

/***/ 1740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AT: () => (/* binding */ getDomainUrl),
/* harmony export */   O_: () => (/* binding */ getAuthorizationToken),
/* harmony export */   Vv: () => (/* binding */ genericMemo)
/* harmony export */ });
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6544);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1677);




const getAuthorizationToken = ()=>(0,cookies_next__WEBPACK_IMPORTED_MODULE_0__.getCookie)(_common_constants__WEBPACK_IMPORTED_MODULE_2__/* .Cookies */ .LJ.AUTH_TOKEN) || "";
const genericMemo = react__WEBPACK_IMPORTED_MODULE_1__.memo;
const getDomainUrl = ()=>(0,_common_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSSR */ .yF)() ? "" : `${window.location.protocol}//${window.location.host}`;


/***/ })

};
;