(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(8),l=a.n(n),s=(a(17),a(11)),m=a(3),o=a(4),c=a(6),d=a(5),u=(a(18),a(19),a(20),function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:n},"IMDB"))))});u.defaultProps={description:""};var b=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};b.defaultProps={movies:[]};var p=a(1),g=a(2),h=a(9),v=a.n(h),w=(a(23),function(e){var t=e.values,a=e.errors,i=e.onChange,n=e.onAdd,l=e.setErrors,s=e.clearForm;return r.a.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault();var a={buttonDisabled:!0};t.title||(a.title=!0);var i=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(t.imgUrl);t.imgUrl&&i||(a.imgUrl=!0);var r=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/.test(t.imdbUrl);t.imdbUrl&&r||(a.imdbUrl=!0),t.imdbId||(a.imdbId=!0),Object.keys(a).length>1?l(a):(s(),n({title:t.title,description:t.description,imgUrl:t.imgUrl,imdbUrl:t.imdbUrl,imdbId:t.imdbId}))}},a.title&&r.a.createElement("span",{className:"error"},"Please enter a film title"),r.a.createElement("label",{className:"label"},"Film Title:",r.a.createElement("input",{className:"".concat(a.title?"is-danger":""," input"),name:"title",type:"text",value:t.title,placeholder:"Title",onChange:i})),r.a.createElement("label",{className:"label"},"Film Description:",r.a.createElement("input",{className:"input",name:"description",type:"text",placeholder:"Description",value:t.description,onChange:i})),a.imgUrl&&r.a.createElement("span",{className:"error"},"Please enter an image link"),r.a.createElement("label",{className:"label"},"Image link:",r.a.createElement("input",{className:"".concat(a.imgUrl?"is-danger":""," input"),name:"imgUrl",type:"text",placeholder:"Image Url",value:t.imgUrl,onChange:i})),a.imdbUrl&&r.a.createElement("span",{className:"error"},"Please enter an IMDB link"),r.a.createElement("label",{className:"label"},"IMDB link:",r.a.createElement("input",{className:"".concat(a.imdbUrl?"is-danger":""," input"),name:"imdbUrl",type:"text",placeholder:"IMDB Url",value:t.imdbUrl,onChange:i})),a.imdbId&&r.a.createElement("span",{className:"error"},"Please enter an IMDB id"),r.a.createElement("label",{className:"label"},"IMDB ID:",r.a.createElement("input",{className:"".concat(a.imdbId?"is-danger":""," input"),name:"imdbId",type:"text",placeholder:"IMDB Id",value:t.imdbId,onChange:i})),r.a.createElement("button",{className:"button is-warning",type:"submit",disabled:a.buttonDisabled},"Add new movie"))});w.defaultProps={errors:v.a.shape({title:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1,buttonDisabled:!1})};var f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={values:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},errors:{title:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1,buttonDisabled:!1}},e.onChange=function(t){var a=t.target,i=a.name,r=a.value;e.setState((function(t){var a,n=Object.keys(t.values).filter((function(e){return"description"!==e})).some((function(t){return!e.state.values[t]}));return{values:Object(g.a)(Object(g.a)({},t.values),{},Object(p.a)({},i,r)),errors:Object(g.a)(Object(g.a)({},t.errors),{},(a={},Object(p.a)(a,i,!1),Object(p.a)(a,"buttonDisabled",n),a))}}))},e.setErrors=function(t){e.setState({errors:t})},e.clearForm=function(){e.setState({values:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},errors:{title:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1,buttonDisabled:!1}})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.values,a=e.errors,i=this.props.addMovie;return r.a.createElement(w,{values:t,errors:a,onChange:this.onChange,onAdd:i,setErrors:this.setErrors,clearForm:this.clearForm})}}]),a}(i.Component),M=a(10),E=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={movies:M},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(b,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(f,{addMovie:this.addMovie})))}}]),a}(i.Component);l.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.d04dcdf0.chunk.js.map