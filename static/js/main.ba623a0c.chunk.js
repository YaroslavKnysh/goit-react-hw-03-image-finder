(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(21),c=n.n(i),s=(n(28),n(12)),r=n(7),l=n(8),u=n(4),h=n(10),d=n(9),m=(n(29),n(22)),g=n.n(m),b=(n(48),n(23)),j=n.n(b),p=n(0),f=function(e){var t=e.onSubmitForm,n=e.onSearchInput;return Object(p.jsx)("header",{className:"searchbar",children:Object(p.jsxs)("form",{className:"form",onSubmit:t,children:[Object(p.jsx)("button",{type:"submit",className:"search-button",children:Object(p.jsx)("span",{className:"button-label",children:"Search"})}),Object(p.jsx)("input",{className:"search-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:n})]})})},O=function(e){var t=e.imageSmall,n=e.onFullSize;return Object(p.jsx)("li",{className:"gallery-item",children:Object(p.jsx)("img",{src:t,onClick:n,alt:""})})},y=function(e){var t=e.imagesArr,n=e.onFullSize;return Object(p.jsx)("ul",{className:"gallery",children:t.map((function(e){return Object(p.jsx)(O,{imageSmall:e.webformatURL,imageLarge:e.largeImageURL,onFullSize:function(){return n(e.largeImageURL)}},e.id)}))})},v=function(e){var t=e.onNextPage;return Object(p.jsx)("div",{className:"loadButton-container",children:Object(p.jsx)("button",{type:"button",className:"loadButton",onClick:t,children:"Load more"})})},k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleKeyDown=a.handleKeyDown.bind(Object(u.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){"Escape"===e.code&&(console.log("modal close"),this.props.onCloseModal())}},{key:"handleBackdropClick",value:function(e){e.currentTarget===e.target&&this.props.onCloseModal()}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"overlay",onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:"modal",children:Object(p.jsx)("img",{src:this.props.largeImage,alt:""})})})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={images:[],pageNumber:1,searchQuery:"",isLoading:!1,modalOpen:!1,largeImage:""},e.fetchImages=e.fetchImages.bind(Object(u.a)(e)),e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.nextPage=e.nextPage.bind(Object(u.a)(e)),e.openFullSize=e.openFullSize.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"fetchImages",value:function(){var e=this;this.setState({isLoading:!0}),setTimeout((function(){g.a.get("https://pixabay.com/api/?q=".concat(e.state.searchQuery,"&page=").concat(e.state.pageNumber,"&key=23926259-20170b2e8904d12034176c2be&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return e.setState({images:[].concat(Object(s.a)(e.state.images),Object(s.a)(t.data.hits))})})).finally((function(){return e.setState({isLoading:!1})}))}),1500)}},{key:"handleChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"nextPage",value:function(){var e=this;this.setState({pageNumber:this.state.pageNumber+1},(function(t){return e.fetchImages()}))}},{key:"openFullSize",value:function(e){this.setState({modalOpen:!0,largeImage:e})}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{onSubmitForm:function(t){t.preventDefault(),e.setState({images:[],pegeNumber:1},(function(t){return e.fetchImages()}))},onSearchInput:this.handleChange}),this.state.isLoading&&Object(p.jsx)(j.a,{className:"loader",type:"Puff",color:"#00BFFF",height:300,width:300,timeout:3e3}),Object(p.jsx)(y,{imagesArr:this.state.images,onFullSize:this.openFullSize}),this.state.images.length>0&&Object(p.jsx)(v,{onNextPage:this.nextPage}),!0===this.state.modalOpen&&Object(p.jsx)(k,{onCloseModal:function(){return e.setState({modalOpen:!1})},largeImage:this.state.largeImage})]})}}]),n}(a.Component);c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.ba623a0c.chunk.js.map