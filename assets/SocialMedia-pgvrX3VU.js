import"./rolldown-runtime-BM3Ffeng.js";import{o as e}from"./baseui-D7Hfc57J.js";import{t}from"./react-vendor-BC5Ae3zB.js";import{r as n}from"./styling-C7EDwRaZ.js";import{h as r}from"./index-CcdIy40I.js";e();var i=t(),a=n.span`
  i {
    background-color: ${e=>e.backgroundColor};
  }
  &:hover i {
    background-color: ${({theme:e})=>e.text};
    transition: 0.3s ease-in;
  }
`;function o(e){return(0,i.jsx)(`div`,{className:`social-media-div`,children:r.map((t,n)=>(0,i.jsx)(`a`,{href:t.link,className:`icon-button`,target:`_blank`,rel:`noopener noreferrer`,children:(0,i.jsx)(a,{...t,...e,children:(0,i.jsx)(`i`,{className:`fab ${t.fontAwesomeIcon}`})})},n))})}export{o as t};