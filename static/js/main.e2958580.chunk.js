(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),o=(n(11),n(2)),i=(n(12),n(6)),b=n(5),j=n.n(b),u=n(0),d=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:Object.keys(t).map((function(e){return Object(u.jsx)("button",{className:j.a.buttonFeedback,type:"button",name:e,onClick:n,children:e},Object(i.a)())}))})},l=function(e){var t=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Please leave feedback"}),t]})},O=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Statistics"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",n]}),Object(u.jsxs)("li",{children:["Bad: ",c]}),Object(u.jsxs)("li",{children:["Total: ",r]}),Object(u.jsxs)("li",{children:["PositivePercentage: ",a,"%"]})]})]})},h=function(e){var t=e.message;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t})})};var x=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(o.a)(a,2),i=s[0],b=s[1],j=Object(c.useState)(0),x=Object(o.a)(j,2),f=x[0],k=x[1],g=function(){return[n,i,f].reduce((function(e,t){return e+t}),0)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{children:Object(u.jsx)(d,{options:{good:n,neutral:i,bad:f},onLeaveFeedback:function(e){switch(e.target.textContent){case"good":r((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":k((function(e){return e+1}));break;default:return}}})}),0===g()?Object(u.jsx)(h,{message:"No feedback given"}):Object(u.jsx)(O,{good:n,neutral:i,bad:f,total:g(),positivePercentage:Math.round(100*n/g())})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={buttonFeedback:"FeedbackOptions_buttonFeedback__ih0Oo"}}},[[14,1,2]]]);
//# sourceMappingURL=main.e2958580.chunk.js.map