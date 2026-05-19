import"./rolldown-runtime-BM3Ffeng.js";import{r as e}from"./animations-BcPgQAX-.js";import{r as t}from"./styling-BrgNa4ao.js";import{t as n}from"./react-vendor-BDo1z0Xp.js";import{h as r}from"./index-CjqHO8H-.js";e();var i=n(),a=t.span`
  i {
    background-color: ${e=>e.backgroundColor};
  }
  &:hover i {
    background-color: ${({theme:e})=>e.text};
    transition: 0.3s ease-in;
  }
`;function o(e){return(0,i.jsx)(`div`,{className:`social-media-div`,children:r.map((t,n)=>(0,i.jsx)(`a`,{href:t.link,className:`icon-button`,target:`_blank`,rel:`noopener noreferrer`,children:(0,i.jsx)(a,{...t,...e,children:(0,i.jsx)(`i`,{className:`fab ${t.fontAwesomeIcon}`})})},n))})}export{o as t};