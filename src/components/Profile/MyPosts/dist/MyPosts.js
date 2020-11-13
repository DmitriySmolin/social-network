"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MyPosts_module_css_1 = require("./MyPosts.module.css");
var Post_1 = require("../Post/Post");
var redux_form_1 = require("redux-form");
var validators_1 = require("../../../utils/validators/validators");
var FormsControls_1 = require("../../common/FormsControls/FormsControls");
var MyPosts = react_1["default"].memo(function (props) {
    var onAddPost = function (value) {
        props.addPost(value.newPostText);
    };
    var postsElements = props.posts.map(function (p) { return react_1["default"].createElement(Post_1["default"], { key: p.id, message: p.message, likeCount: p.likeCount }); });
    return (react_1["default"].createElement("div", { className: MyPosts_module_css_1["default"].post_block },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h3", null, "My Posts"),
            react_1["default"].createElement(AddNewPostFormRedux, { onSubmit: onAddPost }),
            react_1["default"].createElement("div", { className: MyPosts_module_css_1["default"].posts }, postsElements))));
});
var maxLength10 = validators_1.maxLengthAC(10);
var AddNewPostForm = function (props) {
    return (react_1["default"].createElement("form", { onSubmit: props.handleSubmit },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(redux_form_1.Field, { component: FormsControls_1.Textarea, name: "newPostText", placeholder: "Enter your post", validate: [validators_1.required, maxLength10] })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", null, "Add post"))));
};
var AddNewPostFormRedux = redux_form_1.reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm);
exports["default"] = MyPosts;
