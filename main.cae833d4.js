/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n}\\n\\nbody {\\n    font-family: 'Roboto', serif;\\n    font-style: normal;\\n    font-size: 20px;\\n    color: #000000;\\n}\\n\\n/*задал  блоку абсалютую величину, \\nчтобы потомкам можно было использовать относительные*/\\nmain {\\n    max-width: 1440px;\\n    margin: auto;\\n    overflow: hidden;\\n    /* Запрещаем горизонтальный скролл */\\n}\\n\\n@media (max-width: 450px) {\\n    main {\\n        max-width: 450px;\\n        width: 100%;\\n    }\\n}\\n\\n.nav-menu {\\n    max-width: 1440px;\\n    text-align: center;\\n    position: relative;\\n\\n}\\n\\n.nav-menu-line {\\n    margin: 10px;\\n}\\n\\n.drop-down-element {\\n    z-index: 50;\\n    display: none;\\n    padding: 20px;\\n    left: 35%;\\n    right: 35%;\\n    position: absolute;\\n    position: fixed;\\n}\\n\\n.nav-menu:hover .drop-down-element {\\n    display: block;\\n}\\n\\n.menu-button {\\n    font-family: 'Butler';\\n    font-style: normal;\\n    font-weight: 400;\\n    font-size: 40px;\\n    text-decoration: none;\\n    color: #000000;\\n\\n}\\n\\n@media (max-width: 450px) {\\n\\n    .nav-menu-line {\\n        display: none;\\n    }\\n\\n    .add-line {\\n        display: block;\\n        bottom: 82px;\\n        left: 0;\\n        right: 0;\\n        position: fixed;\\n    }\\n\\n\\n    .links {\\n        position: fixed;\\n        bottom: 0px;\\n        width: 100%;\\n        left: 0;\\n        right: 0;\\n        background-color: #fff;\\n        z-index: 10000;\\n        border-top: #000000;\\n        height: 82px;\\n    }\\n\\n    .menu-button {\\n        object-fit: none;\\n    }\\n\\n    .drop-down-element {\\n        display: block;\\n    }\\n\\n}\\n\\n.section-mod-studio {\\n    max-width: 100%;\\n    margin: auto;\\n}\\n\\n.wrapper {\\n    margin: auto;\\n}\\n\\n.hero {\\n    max-width: 74%;\\n    /* убрал жестко заданную высоту, чтобы изображение масштабировалось */\\n    height: auto;\\n    text-align: center;\\n    position: relative;\\n}\\n\\n/*hero-image масштабируется под размер hero*/\\n.hero-image {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n    object-position: center;\\n}\\n\\n/*hero-box масштабируется под размер wrapper hero по центру*/\\n.hero-box {\\n    background-color: white;\\n    width: 56%;\\n    height: 57%;\\n    top: 50%;\\n    left: 50%;\\n    position: absolute;\\n    transform: translate(-50%, -50%);\\n    text-align: center;\\n    white-space: normal;\\n}\\n\\n.hero-wrap {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.section-mod-studio-title {\\n    font-family: 'Playfair Display';\\n    font-weight: 500;\\n    font-size: 86px;\\n    line-height: 120%;\\n    text-align: center;\\n    padding: 18% 1% 0;\\n    box-sizing: border-box;\\n}\\n\\n.hero-text {\\n    font-weight: 500;\\n    line-height: 23px;\\n    text-align: center;\\n    padding: 0.875rem 1.343rem 6.875rem;\\n    box-sizing: border-box;\\n}\\n\\n@media (max-width: 1100px) {\\n\\n    .hero {\\n        max-width: 95%;\\n    }\\n}\\n\\n@media (max-width: 860px) {\\n\\n\\n    .hero {\\n        max-width: 100%;\\n    }\\n\\n    .hero-box {\\n        width: 75%;\\n        height: 344px;\\n        opacity: 0.8;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n\\n    .hero {\\n        display: grid;\\n        grid-template-rows: 344px 420px;\\n        max-width: 100%;\\n    }\\n\\n    .hero-box {\\n        width: 100%;\\n        height: 344px;\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        grid-row: 1/2;\\n        z-index: 2;\\n        opacity: 1;\\n    }\\n\\n    .mod__studio-img {\\n        grid-row: 1/3;\\n        grid-column: 1;\\n    }\\n\\n    .section-mod-studio-title {\\n        font-weight: 400;\\n        font-size: 70px;\\n        line-height: 93px;\\n        padding: 22% 0% 0%;\\n    }\\n\\n    .hero-text {\\n        font-size: 18px;\\n        line-height: 21px;\\n    }\\n}\\n\\n/* Второй блок */\\n.section-biography {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: nowrap;\\n    margin-top: 7.93rem;\\n}\\n\\n.item-desert {\\n    margin: 0 0 0 9.31%;\\n    width: 38.4%;\\n}\\n\\n.img-sand {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n}\\n\\n.section-header-biography {\\n    display: flex;\\n    min-width: 3.12rem;\\n    width: 10.07%;\\n    padding: 2.5rem 0;\\n    align-items: flex-start;\\n}\\n\\nh2 {\\n    font-weight: 700;\\n    font-size: 20px;\\n    line-height: 1.44rem;\\n    transform: rotate(-90deg);\\n}\\n\\n.container-biographic-description {\\n    display: flex;\\n    flex-direction: column;\\n    width: 31.18%;\\n}\\n\\n.item-header-text {\\n    display: flex;\\n    height: 50%;\\n    flex-direction: row;\\n    align-items: flex-end;\\n}\\n\\n.about-name {\\n    font-family: 'Playfair Display';\\n    font-weight: 500;\\n    font-size: 86px;\\n    line-height: 7.19rem;\\n    padding-bottom: 30px;\\n}\\n\\n.job-title {\\n    font-weight: 500;\\n    font-size: 18px;\\n    line-height: 1.32rem;\\n    padding: 0px 0px 3.75rem 0px;\\n}\\n\\n.dash {\\n    padding: 0.5rem 0;\\n}\\n\\n.blockquote {\\n    font-family: 'Bitter';\\n    font-size: 26px;\\n    line-height: 1.94rem;\\n    color: #0D0D0D;\\n}\\n\\n.list {\\n    list-style-type: none;\\n}\\n\\n.list-element {\\n    display: inline-block;\\n}\\n\\n.list-element::after {\\n    content: \\\" / \\\"\\n}\\n\\n.list-element:first-child::after {\\n    content: \\\"\\\"\\n}\\n\\n.list-element:first-child {\\n    padding-right: 300px;\\n}\\n\\n@media (max-width: 600px) {\\n    .section-biography {\\n        flex-wrap: wrap;\\n        margin-top: 4.9rem;\\n    }\\n\\n    .item-desert {\\n        margin: 0;\\n        width: 100%;\\n    }\\n\\n    .section-header-biography {\\n        width: 20%;\\n        order: -1;\\n        padding: 0;\\n        position: absolute;\\n        left: 77%;\\n    }\\n\\n    .item-header-text>br {\\n        display: none;\\n    }\\n\\n    .item-wrap {\\n        order: -1;\\n        display: flex;\\n        flex-direction: column;\\n        flex-wrap: nowrap;\\n        width: 73.78%;\\n        padding-left: 1.12rem;\\n    }\\n\\n    .section-header-biography>h2 {\\n        font-size: 18px;\\n        transform: rotate(0deg);\\n\\n    }\\n\\n    .container-biographic-description {\\n        order: -1;\\n        width: 100%;\\n    }\\n\\n    .about-name {\\n        font-weight: 400;\\n        font-size: 64px;\\n        line-height: 85px;\\n        padding-bottom: 35.64px;\\n    }\\n\\n    .about-name::before {\\n        content: \\\" - \\\"\\n    }\\n\\n    .job-title {\\n        max-height: 15%;\\n    }\\n\\n    .about-name>br {\\n        display: none;\\n    }\\n\\n    .dash {\\n        display: none;\\n    }\\n\\n    .blockquote {\\n        width: 130%;\\n        padding-bottom: 1rem;\\n        white-space: pre-line;\\n        font-weight: 300;\\n        font-size: 30px;\\n        line-height: 36px;\\n        color: #000000;\\n        ;\\n    }\\n\\n    .blockquote>br {\\n        display: none;\\n    }\\n\\n    .list-item:first-child::before {\\n        content: \\\"  \\\"\\n    }\\n\\n    .list-element {\\n        display: block;\\n    }\\n\\n    .list-element:first-child::before {\\n        content: \\\"\\\"\\n    }\\n\\n    .list-element:first-child {\\n        padding-right: 0;\\n    }\\n\\n    .list-element::after {\\n        content: \\\"  \\\"\\n    }\\n\\n    .list-element::before {\\n        content: \\\"-\\\"\\n    }\\n}\\n\\n/* Designers */\\n\\n.section-designers {\\n    margin-top: 10.56rem;\\n    padding-left: 5.07%;\\n}\\n\\n.designers-flex-container {\\n    position: relative;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: flex-end;\\n    gap: 1.99rem;\\n\\n\\n}\\n\\n.designer-header {\\n    top: 7.5%;\\n    left: 72.5%;\\n    position: absolute;\\n    transform: translate(-50%, -50%) rotate(-90deg);\\n}\\n\\n.designer-font {\\n    font-size: 16px;\\n    line-height: 1.17rem;\\n    font-weight: 400;\\n}\\n\\n.uppercase {\\n    text-transform: uppercase;\\n    font-weight: 700;\\n}\\n\\n.designer-position-end {\\n    justify-items: end;\\n}\\n\\n.text-padding {\\n    padding-right: 4.5rem;\\n}\\n\\n.item-designer {\\n    display: grid;\\n    grid-column: 1;\\n    grid-row: 1;\\n}\\n\\n.designer-text {\\n    grid-column: 1;\\n    grid-row: 2;\\n    padding-top: 1.4rem;\\n    max-width: 100%;\\n}\\n\\n.item-img {\\n    display: block;\\n    max-width: 100%;\\n    object-fit: cover\\n}\\n\\n@media screen and (max-width: 1140px) {\\n    .designer-header {\\n        top: -2%;\\n        transform: translate(-50%, -50%) rotate(0deg);\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .section-designers {\\n        margin-top: 4.3rem;\\n        padding-left: 1rem;\\n        position: relative;\\n    }\\n\\n    .designers-flex-container {\\n        height: 573px;\\n        gap: 1rem;\\n        overflow-x: auto;\\n    }\\n\\n    .designer-header {\\n        left: 2.6rem;\\n        top: 3%;\\n        font-size: 18px;\\n        line-height: 1.31rem;\\n    }\\n\\n    .designer-font {\\n        line-height: 19px;\\n        font-weight: 400;\\n    }\\n\\n    .text-padding {\\n        padding-right: 0;\\n        padding-top: 1rem;\\n    }\\n\\n    .item-designer {\\n        width: 320px;\\n        height: 520px;\\n    }\\n\\n    .mobile-img {\\n        display: block;\\n        min-width: 71.1%;\\n        object-fit: cover\\n    }\\n\\n    .designer-text {\\n        width: 100%;\\n        min-width: 320px;\\n    }\\n}\\n\\n\\n/*Четвертый блок section-testimonials*/\\n.section-testimonials {\\n    max-height: 813px;\\n    display: grid;\\n    justify-content: center;\\n    margin-top: 16.25rem;\\n}\\n\\n.section-testimonials-conteiner {\\n    max-width: 1179px;\\n    display: grid;\\n    grid-template-rows: 0.28fr 0.93fr;\\n}\\n\\n\\n.testimonials-header {\\n    grid-row: 1;\\n    transform: rotate(0deg);\\n    padding-left: 0.5rem;\\n}\\n\\n.section-testimonials-content {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-row: 2;\\n}\\n\\n.item-testimonials {\\n    display: grid;\\n    grid-template-rows: 1fr 1fr;\\n    grid-column: 2;\\n    justify-items: center;\\n    align-items: start;\\n}\\n\\n.item-coffee-pit {\\n    list-style: none;\\n    display: grid;\\n    grid-column: 1;\\n    grid-template-columns: minmax(80px, 12.72%) 87.28%;\\n    grid-template-rows: 44% 16% 43%;\\n    justify-items: center;\\n\\n}\\n\\n.link-style {\\n    text-decoration: none;\\n    color: #000000;\\n}\\n\\n.link-style:hover {\\n    -webkit-text-fill-color: rgb(156, 143, 210);\\n}\\n\\n.web-address {\\n    font-size: 16px;\\n    line-height: 1.19rem;\\n}\\n\\n.website-text {\\n    grid-row: 1;\\n    grid-column: 1;\\n    transform: translate(-12%, -5%) rotate(-90deg);\\n    align-self: center;\\n}\\n\\n.сreativity-text {\\n    grid-row: 2;\\n    grid-column: 1;\\n    transform: translate(-12%, -14%) rotate(-90deg);\\n    align-self: center;\\n}\\n\\n.сreativity-text-next-row {\\n    grid-row: 3;\\n    grid-column: 1;\\n    transform: translate(-12%, 0%) rotate(-90deg);\\n    align-self: center;\\n}\\n\\n.coffee-pit-img {\\n    grid-row: 1/4;\\n    grid-column: 2;\\n}\\n\\n.testimonials-text {\\n    grid-row: 1;\\n    font-family: 'Bitter';\\n    font-size: 32px;\\n    line-height: 2.38rem;\\n    text-align: center;\\n    width: 37.6%;\\n    align-self: center;\\n}\\n\\n.item-walk-img {\\n    grid-row: 2;\\n}\\n\\n@media (max-width: 900px) {\\n    .item-coffee-pit {\\n        display: flex;\\n        flex-direction: column;\\n        row-gap: 30px;\\n        align-items: center;\\n    }\\n\\n    .web-address {\\n        transform: rotate(0deg);\\n    }\\n\\n    .coffee-pit-img {\\n        width: 90%;\\n        order: -1;\\n    }\\n\\n    .testimonials-text {\\n        width: 222px;\\n    }\\n\\n}\\n\\n@media (max-width: 450px) {\\n    .section-testimonials {\\n        display: flex;\\n        flex-direction: row;\\n        justify-content: center;\\n        margin-top: 4.7rem;\\n    }\\n\\n    .section-testimonials-conteiner {\\n        max-width: 91.55%;\\n        display: flex;\\n        flex-direction: row;\\n        flex-wrap: wrap;\\n    }\\n\\n    .testimonials-header {\\n        width: 100%;\\n        text-align: end;\\n        transform: rotate(0deg);\\n        font-size: 18px;\\n        line-height: 1.31rem;\\n    }\\n\\n    .section-testimonials-content {\\n        display: flex;\\n        flex-direction: row;\\n        flex-wrap: wrap;\\n        gap: 28px;\\n\\n    }\\n\\n    .item-testimonials {\\n        display: flex;\\n        flex-direction: row;\\n        flex-wrap: wrap;\\n        justify-content: center;\\n        gap: 1rem;\\n    }\\n\\n    .item-coffee-pit {\\n        order: 1;\\n        display: flex;\\n        flex-direction: row;\\n        flex-wrap: wrap;\\n        gap: 21px;\\n        column-gap: 54px;\\n    }\\n\\n    .website-text,\\n    .сreativity-text,\\n    .сreativity-text-next-row {\\n        transform: rotate(0deg);\\n        align-self: center;\\n    }\\n\\n    .coffee-pit-img {\\n        display: none;\\n    }\\n\\n    .testimonials-text {\\n        font-weight: 300;\\n        font-size: 30px;\\n        line-height: 36px;\\n        width: 100%;\\n        white-space: pre-line;\\n    }\\n\\n    .testimonials-text>br {\\n        display: none;\\n    }\\n\\n    .item-walk-img {\\n        display: none;\\n    }\\n}\\n\\n/* strong-points-section */\\n.strengths-section {\\n    margin-top: 8.625rem;\\n    position: relative;\\n    overflow: auto;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: flex-end;\\n    list-style-type: none;\\n    column-gap: 30px;\\n    height: 720px;\\n}\\n\\n.strengths-header {\\n    transform: translate(-50%, -50%) rotate(-90deg);\\n    height: 23px;\\n    top: 9%;\\n    left: 26.9%;\\n    position: absolute;\\n}\\n\\n.strenghts-text {\\n    width: 395px;\\n    height: 100%\\n}\\n\\n.strengths-title {\\n    font-family: 'Playfair Display';\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 86px;\\n    line-height: 7.19rem;\\n}\\n\\n.strengths-list {\\n    list-style: none;\\n    padding: 30px 0px 0px 73px;\\n}\\n\\n.strengths-list-item {\\n    font-family: 'Bitter';\\n    font-size: 34px;\\n    line-height: 2.64rem;\\n}\\n\\n.item-end {\\n    order: 1;\\n}\\n\\n.links {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\n    grid-template-rows: 82px;\\n    align-items: center;\\n}\\n\\n.link-b {\\n    grid-column: 1;\\n    grid-row: 1;\\n}\\n\\n.link-d {\\n    grid-column: 2;\\n    grid-row: 1;\\n\\n}\\n\\n.link-t {\\n    grid-column: 3;\\n    grid-row: 1;\\n\\n}\\n\\n.link-s {\\n    grid-column: 4;\\n    grid-row: 1;\\n}\\n\\n@supports (display: grid) {\\n\\n    .strengths-section {\\n        display: grid;\\n        grid-template-rows: 665px;\\n        grid-template-columns: 1fr 1fr 395px 1fr;\\n        gap: 2.08%;\\n        grid-auto-flow: column;\\n        overflow: auto;\\n        align-items: end;\\n    }\\n\\n    .strenghts-text {\\n        display: grid;\\n        grid-template-rows: 21% 79%;\\n        height: 100%;\\n        align-items: end;\\n        justify-items: center;\\n    }\\n\\n    .strengths-title {\\n        align-self: start;\\n        grid-row: 1;\\n    }\\n\\n    .strengths-list {\\n        align-self: start;\\n        grid-row: 2;\\n        width: 57.97%;\\n        padding: 0;\\n    }\\n\\n    .item-end {\\n        order: 1;\\n    }\\n}\\n\\n@media (max-width: 450px) {\\n    .strengths-section {\\n        /*Задал фиксированные размеры т к данной секции\\n        применим горизонтальный скрол*/\\n        grid-template-rows: 574px;\\n        gap: 0%;\\n        margin-top: 5.1rem;\\n    }\\n\\n    .strenghts-text {\\n        grid-template-rows: 21.6% 78.39%;\\n        justify-items: start;\\n        grid-column: 1;\\n        max-width: 250px;\\n    }\\n\\n    .strengths-title {\\n        align-self: end;\\n        grid-row: 1;\\n        font-weight: 400;\\n        font-size: 64px;\\n        line-height: 85px;\\n    }\\n\\n    .strengths-header {\\n        font-size: 18px;\\n        line-height: 21px;\\n        transform: rotate(0deg);\\n        left: 72%;\\n        top: 1%;\\n    }\\n\\n    .strengths-list {\\n        align-self: start;\\n        grid-row: 2;\\n        grid-column: 1;\\n        padding-left: 16px;\\n    }\\n\\n    .item-end {\\n        display: none;\\n    }\\n\\n    .strengths-section>.item-img>img {\\n        max-height: 450px;\\n        max-width: 300px;\\n    }\\n\\n    .strengths-list-item {\\n        font-size: 24px;\\n        line-height: 37px;\\n    }\\n}\\n\\n/* анимация на Strengths */\\n.strengths-list-item:after {\\n    background-color: #f66d52;\\n    display: block;\\n    content: \\\"\\\";\\n    height: 1px;\\n    width: 0%;\\n    transition: width .3s ease-in-out;\\n}\\n\\n.strengths-list-item:hover:after,\\n.strengths-list-item:focus:after {\\n    width: 100%;\\n}\\n\\n.menu-button:hover {\\n    text-decoration: underline;\\n    background-color: rgb(156, 143, 210);\\n    transform: scale(0.8);\\n    transition: background-color 2s, transform 2.5s;\\n}\\n\\n/*добавил плавную прокрутку*/\\nhtml {\\n    scroll-behavior: smooth;\\n}\\n\\n.section-mod-studio-title {\\n    background-image: linear-gradient(-225deg,\\n            #231557 0%,\\n            #44107a 29%,\\n            #ff1361 67%,\\n            #fff800 100%);\\n\\n    background-size: 200% auto;\\n    -webkit-background-clip: text;\\n    -webkit-text-fill-color: transparent;\\n    animation: textСlip 3s linear infinite;\\n}\\n\\n@keyframes textСlip {\\n    to {\\n        background-position: 200% center;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/nav-menu.png */ \"./src/images/nav-menu.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./mobile-img/sofa.png */ \"./src/mobile-img/sofa.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/rest-room.jpg */ \"./src/images/rest-room.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./mobile-img/katya-mils.png */ \"./src/mobile-img/katya-mils.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/walk-in-the-desert.jpg */ \"./src/images/walk-in-the-desert.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hyphen.png */ \"./src/images/hyphen.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./mobile-img/sky.png */ \"./src/mobile-img/sky.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sky.jpg */ \"./src/images/sky.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bags.jpg */ \"./src/images/bags.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/notebooks.jpg */ \"./src/images/notebooks.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/room.jpg */ \"./src/images/room.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./mobile-img/walk.png */ \"./src/mobile-img/walk.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/walk.jpg */ \"./src/images/walk.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/work-places.jpg */ \"./src/images/work-places.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/blak-painting.jpg */ \"./src/images/blak-painting.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar code = \"<!DOCTYPE html>\\n<html>\\n\\n<head>\\n  <meta charset=\\\"utf-8\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width\\\">\\n  <title>Mod Studio</title>\\n  <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\">\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Bitter&display=swap\\\" rel=\\\"stylesheet\\\">\\n\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap\\\" rel=\\\"stylesheet\\\">\\n\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap\\\" rel=\\\"stylesheet\\\">\\n\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap\\\" rel=\\\"stylesheet\\\">\\n\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap\\\" rel=\\\"stylesheet\\\">\\n</head>\\n\\n<body>\\n  <header>\\n    <nav class=\\\"nav-menu wrapper\\\">\\n      <button class=\\\"nav-menu-line\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"Menu 1\\\"><br>\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"Menu 2\\\"><br>\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"Menu 3\\\">\\n      </button>\\n      <div class=\\\"drop-down-element\\\">\\n        <hr class=\\\"add-line\\\">\\n        <div class=\\\"links\\\">\\n          <a href=\\\"#Biography\\\" class=\\\"link-b menu-button \\\">B</a>\\n          <a href=\\\"#Designers\\\" class=\\\"link-d menu-button \\\">D</a>\\n          <a href=\\\"#Testimonials\\\" class=\\\"link-t menu-button \\\">T</a>\\n          <a href=\\\"#strengths\\\" class=\\\"menu-button link-s \\\">S</a>\\n\\n        </div>\\n      </div>\\n    </nav>\\n  </header>\\n  <main>\\n    <section class=\\\"section-mod-studio\\\">\\n      <div class=\\\"wrapper hero\\\">\\n        <div class=\\\"item-img mod__studio-img\\\">\\n          <picture>\\n            <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" media=\\\"(max-width: 450px)\\\" class=\\\"item-img\\\">\\n            <img class=\\\"hero-image\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"Sky\\\">\\n          </picture>\\n        </div>\\n        <div class=\\\"hero-box\\\">\\n          <h1 class=\\\"section-mod-studio-title\\\">Mod Studio</h1>\\n          <p class=\\\"hero-text\\\">Modern Web Studio</p>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"section-biography\\\" id=\\\"Biography\\\">\\n      <picture class=\\\"item-desert\\\">\\n        <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" media=\\\"(max-width: 600px)\\\" class=\\\"mobile-img\\\">\\n        <img class=\\\"img-sand\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"Sky\\\">\\n      </picture>\\n      <div class=\\\"section-header-biography\\\">\\n        <h2>Biography</h2>\\n      </div>\\n      <div class=\\\"container-biographic-description\\\">\\n        <div class=\\\"item-header-text\\\">\\n          <h3 class=\\\"about-name\\\">Katya <br>Mills</h3>\\n        </div>\\n        <div class=\\\"item-wrap\\\">\\n          <ul class=\\\"list job-title\\\">\\n            <li class=\\\"list-element\\\">Art Director</li>\\n            <li class=\\\"list-element\\\">Scenography</li>\\n            <li class=\\\"list-element\\\">Styling</li>\\n            <li class=\\\"list-element\\\">Creative Photography</li>\\n            <li class=\\\"list-element\\\">Design</li>\\n          </ul>\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"Dash\\\" class=\\\"dash\\\">\\n          <blockquote class=\\\"blockquote\\\">\\n            “The more I deal with\\n            the work<br> as something that is\\n            my own,<br>\\n            as something that\\n            is personal,<br> the more\\n            successful it is.”</blockquote>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"section-designers\\\" id=\\\"Designers\\\">\\n      <div class=\\\"designers-flex-container\\\">\\n        <h2 class=\\\"designer-header\\\">Designers</h2>\\n        <div class=\\\"item-designer designer-position-end \\\">\\n          <picture>\\n            <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" media=\\\"(max-width: 600px)\\\" class=\\\"mobile-img\\\">\\n            <img class=\\\"item-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"Sky\\\">\\n          </picture>\\n          <p class=\\\"designer-font designer-text text-padding\\\">\\n            <b class=\\\"uppercase\\\">Jess Wonder<br></b>\\n            <b>From/</b> Be more flower<br>\\n            <b>Skills/</b> Design Strategy / Marketing\\n          </p>\\n        </div>\\n        <div class=\\\"item-designer \\\">\\n          <img class=\\\"item-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"Bag\\\">\\n          <p class=\\\"designer-font designer-text\\\">\\n            <b class=\\\"uppercase\\\">Kameron Clein<br></b>\\n            <b>From/</b> Be more flower<br>\\n            <b>Skills/</b> Design Strategy / Marketing\\n          </p>\\n        </div>\\n        <div class=\\\"item-designer\\\">\\n          <img class=\\\"item-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"Books\\\">\\n          <p class=\\\"designer-font designer-text\\\">\\n            <b>LOUISSE RED<br>\\n              From/</b> Be more flower<br>\\n            <b>Skills/</b> Design Strategy / Marketing\\n          </p>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"section-testimonials\\\" id=\\\"Testimonials\\\">\\n      <div class=\\\"section-testimonials-conteiner\\\">\\n        <h2 class=\\\"testimonials-header\\\">\\n          Testimonials\\n        </h2>\\n        <div class=\\\"section-testimonials-content\\\">\\n          <div class=\\\"item-coffee-pit\\\">\\n            <div class=\\\"website-text web-address\\\">\\n              <b>Website</b><br>\\n              <a href=\\\"http://www.whitepapers.com\\\" class=\\\"link-style\\\">www.whitepapers.com</a>\\n            </div>\\n            <div class=\\\"сreativity-text web-address\\\">\\n              <b>Creativity</b><br>\\n              <a href=\\\"http://www.whitepapers.com\\\" class=\\\"link-style\\\">www.whitepapers.com</a>\\n            </div>\\n            <div class=\\\"сreativity-text-next-row web-address\\\">\\n              <b>Creativity</b><br>\\n              <a href=\\\"http://www.whitepapers.com\\\" class=\\\"link-style\\\">www.whitepapers.com</a>\\n            </div>\\n            <div class=\\\"coffee-pit-img\\\">\\n              <img class=\\\"item-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"Coffee house\\\">\\n            </div>\\n          </div>\\n          <div class=\\\"item-testimonials\\\">\\n            <div class=\\\"testimonials-text\\\">\\n              I just really want to do\\n              good work<br> and work\\n              with some great people,\\n              people who challenge\\n              me.\\n            </div>\\n            <div class=\\\"class=item-walk-img\\\">\\n              <picture>\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" media=\\\"(max-width: 450px)\\\" class=\\\"mobile-img\\\">\\n                <img class=\\\"item-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Walk\\\">\\n              </picture>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"strengths-section\\\" id=\\\"strengths\\\">\\n      <h2 class=\\\"strengths-header\\\">Strong points</h2>\\n      <div class=\\\"item-img\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"Desc\\\">\\n      </div>\\n      <div class=\\\"item-img\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"Black board\\\">\\n      </div>\\n      <div class=\\\"item-img item-end\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"Blackboard\\\">\\n      </div>\\n      <div class=\\\"strenghts-text\\\">\\n        <h3 class=\\\"strengths-title\\\">Strengths</h3>\\n        <ul class=\\\"strengths-list\\\">\\n          <li class=\\\"strengths-list-item\\\">Interiors</li>\\n          <li class=\\\"strengths-list-item\\\">Outdoors</li>\\n          <li class=\\\"strengths-list-item\\\">Portraits</li>\\n          <li class=\\\"strengths-list-item\\\">Styling</li>\\n          <li class=\\\"strengths-list-item\\\">Events</li>\\n          <li class=\\\"strengths-list-item\\\">Architecture</li>\\n          <li class=\\\"strengths-list-item\\\">Design</li>\\n          <li class=\\\"strengths-list-item\\\">Celebrations</li>\\n          <li class=\\\"strengths-list-item\\\">Artistic</li>\\n          <li class=\\\"strengths-list-item\\\">Fashion</li>\\n          <li class=\\\"strengths-list-item\\\">Nature</li>\\n          <li class=\\\"strengths-list-item\\\">Creativity</li>\\n        </ul>\\n      </div>\\n    </section>\\n  </main>\\n  <footer>\\n  </footer>\\n  <!--   <\" + \"script src=\\\"index.js\\\"><\" + \"/script> -->\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/images/bags.jpg":
/*!*****************************!*\
  !*** ./src/images/bags.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8371024e2592924ba8fd.jpg\";\n\n//# sourceURL=webpack:///./src/images/bags.jpg?");

/***/ }),

/***/ "./src/images/blak-painting.jpg":
/*!**************************************!*\
  !*** ./src/images/blak-painting.jpg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5ff7b46e9c031a773fb6.jpg\";\n\n//# sourceURL=webpack:///./src/images/blak-painting.jpg?");

/***/ }),

/***/ "./src/images/hyphen.png":
/*!*******************************!*\
  !*** ./src/images/hyphen.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/hyphen-f94f4ed9aecbb24cc99c.png\";\n\n//# sourceURL=webpack:///./src/images/hyphen.png?");

/***/ }),

/***/ "./src/images/nav-menu.png":
/*!*********************************!*\
  !*** ./src/images/nav-menu.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/nav-menu-a11ce1c6b7e4ddbbc45a.png\";\n\n//# sourceURL=webpack:///./src/images/nav-menu.png?");

/***/ }),

/***/ "./src/images/notebooks.jpg":
/*!**********************************!*\
  !*** ./src/images/notebooks.jpg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3d33ffaa536fbc90abc9.jpg\";\n\n//# sourceURL=webpack:///./src/images/notebooks.jpg?");

/***/ }),

/***/ "./src/images/rest-room.jpg":
/*!**********************************!*\
  !*** ./src/images/rest-room.jpg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"779c825309d82d17cd44.jpg\";\n\n//# sourceURL=webpack:///./src/images/rest-room.jpg?");

/***/ }),

/***/ "./src/images/room.jpg":
/*!*****************************!*\
  !*** ./src/images/room.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7348a08ed36dc361df01.jpg\";\n\n//# sourceURL=webpack:///./src/images/room.jpg?");

/***/ }),

/***/ "./src/images/sky.jpg":
/*!****************************!*\
  !*** ./src/images/sky.jpg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"51f5b4c603a91115a85f.jpg\";\n\n//# sourceURL=webpack:///./src/images/sky.jpg?");

/***/ }),

/***/ "./src/images/walk-in-the-desert.jpg":
/*!*******************************************!*\
  !*** ./src/images/walk-in-the-desert.jpg ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b2bddc0cf88837f350ce.jpg\";\n\n//# sourceURL=webpack:///./src/images/walk-in-the-desert.jpg?");

/***/ }),

/***/ "./src/images/walk.jpg":
/*!*****************************!*\
  !*** ./src/images/walk.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"feadaa26446794515c9e.jpg\";\n\n//# sourceURL=webpack:///./src/images/walk.jpg?");

/***/ }),

/***/ "./src/images/work-places.jpg":
/*!************************************!*\
  !*** ./src/images/work-places.jpg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"35e4efdc043d944a1c44.jpg\";\n\n//# sourceURL=webpack:///./src/images/work-places.jpg?");

/***/ }),

/***/ "./src/mobile-img/katya-mils.png":
/*!***************************************!*\
  !*** ./src/mobile-img/katya-mils.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/katya-mils-16b25378abb0d363c96f.png\";\n\n//# sourceURL=webpack:///./src/mobile-img/katya-mils.png?");

/***/ }),

/***/ "./src/mobile-img/sky.png":
/*!********************************!*\
  !*** ./src/mobile-img/sky.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/sky-72c0ee301a579093e62e.png\";\n\n//# sourceURL=webpack:///./src/mobile-img/sky.png?");

/***/ }),

/***/ "./src/mobile-img/sofa.png":
/*!*********************************!*\
  !*** ./src/mobile-img/sofa.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/sofa-6f32a5db8e19d28c23a1.png\";\n\n//# sourceURL=webpack:///./src/mobile-img/sofa.png?");

/***/ }),

/***/ "./src/mobile-img/walk.png":
/*!*********************************!*\
  !*** ./src/mobile-img/walk.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/walk-49ae6b9ae950c35c0e23.png\";\n\n//# sourceURL=webpack:///./src/mobile-img/walk.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;