(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(10),r=c.n(s),i=(c(16),c(17),c(3)),j=c(2),o=c(6),l=c.n(o),d=c(7),u=c(4),b=(c(19),c(0)),h=function(){return Object(b.jsxs)("div",{className:"NotFound",children:[Object(b.jsx)(i.b,{className:"home-link",to:"/",children:" \u27ea Home"}),Object(b.jsx)("h1",{className:"not-found",children:"Data not found"})]})},O=(c(21),function(e){e.team;var t=e.race;if(!t)return null;var c=Array.from(t);c.sort((function(e,t){return e.positionOrder<t.positionOrder?-1:e.positionOrder>t.positionOrder?1:0}));var n=c.some((function(e){return"1"===e.position})),a=c.some((function(e){return"2"===e.position})),s=c.some((function(e){return"3"===e.position})),r="RaceDetailCard no-wins";n?r="RaceDetailCard won-gold":a?r="RaceDetailCard won-silver":s&&(r="RaceDetailCard won-bronze");var j=Object.assign({},c[0]);return Object(b.jsxs)("div",{className:r,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"race-name",children:Object(b.jsx)(i.b,{to:"/race/".concat(j.raceId),children:j.raceName})}),Object(b.jsx)("p",{className:"race-date",children:j.date}),Object(b.jsx)("h3",{className:"race-venue",children:j.circuitName}),Object(b.jsxs)("h4",{className:"race-location",children:[j.location,",  ",j.country]}),Object(b.jsxs)("div",{className:"additional-detail",children:[Object(b.jsxs)("p",{children:["lat ",j.lat]}),Object(b.jsxs)("p",{children:["lng ",j.lng]}),Object(b.jsxs)("p",{children:["alt ",j.alt]})]})]}),Object(b.jsxs)("div",{className:"race-result",children:[Object(b.jsx)("p",{children:"Position"}),c.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[e.driverName," "]}),Object(b.jsxs)("h4",{children:[e.position," "]})]},e.resultId)}))]})]})}),m=(c(22),function(e){var t=e.race,c=Array.from(t),n=Object.assign({},c[0]),a=c.some((function(e){return"1"===e.position})),s=c.some((function(e){return"2"===e.position})),r=c.some((function(e){return"3"===e.position})),j="RaceSmallCard no-wins";return a?j="RaceSmallCard won-gold":s?j="RaceSmallCard won-silver":r&&(j="RaceSmallCard won-bronze"),Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("h2",{children:Object(b.jsx)(i.b,{to:"/race/".concat(n.raceId),children:n.raceName})}),Object(b.jsx)("p",{className:"race-date",children:n.date}),Object(b.jsxs)("div",{className:"race-location",children:[Object(b.jsx)("h3",{children:n.location}),Object(b.jsx)("h4",{children:n.country})]})]})}),x=(c(23),c(11)),p=function(){var e=Object(n.useState)({races:[]}),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(j.g)().teamName;if(Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),!c||!c.constructorName)return Object(b.jsx)(h,{});var r=new Map(Object.entries(c.races)),o=Array.from(r.keys()),p=Object.assign([],c.activeYears)[0];return Object(b.jsxs)("div",{children:[Object(b.jsx)(i.b,{className:"home-link",to:"/",children:" \u27ea Home"}),Object(b.jsxs)("div",{className:"TeamPage",children:[Object(b.jsxs)("div",{className:"team-name-section",children:[Object(b.jsx)("h1",{className:"team-name",children:c.constructorName}),Object(b.jsx)("span",{children:"Latest Races"})]}),Object(b.jsxs)("div",{className:"performance-chart",children:[Object(b.jsx)("p",{children:"Performance"}),Object(b.jsx)(x.PieChart,{data:[{title:"Bronze",value:c.totalBronze,color:"#583e2c"},{title:"Gold",value:c.totalGold,color:"#c19d42"},{title:"Silver",value:c.totalSilver,color:"#7e8085"},{title:"Losses",value:c.totalRaces-c.totalGold-c.totalSilver-c.totalBronze,color:"#333842"}]})]}),Object(b.jsx)("div",{className:"race-detail-section",children:o.slice(0,1).map((function(e){return Object(b.jsx)(O,{raceId:e,race:r.get(e)},e)}))}),o.slice(1,4).map((function(e){return Object(b.jsx)(m,{raceId:e,race:r.get(e)},e)})),Object(b.jsx)("div",{className:"more-link",children:Object(b.jsx)(i.b,{to:"/teams/".concat(s,"/races/").concat(p),children:"More \u27eb"})})]})]})},f=(c(24),function(e){var t=e.activeYears,c=e.teamName,n=Object.assign([],t);return Object(b.jsx)("ol",{className:"YearSelector",children:n.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{to:"/teams/".concat(c,"/races/").concat(e),children:e})},e)}))})}),v=(c(25),function(){var e=Object(n.useState)({race:{}}),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({races:[]}),r=Object(u.a)(s,2),o=r[0],m=r[1],x=Object(j.g)(),p=x.teamName,v=x.year;if(Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team/".concat(p,"/races?year=").concat(v));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,a(c),e.next=9,fetch("http://localhost:8080/team/".concat(p));case 9:return n=e.sent,e.next=12,n.json();case 12:s=e.sent,m(s);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[p,v]),!c||!o)return Object(b.jsx)(h,{});var N=new Map(Object.entries(c)),g=Array.from(N.keys());return Object(b.jsxs)("div",{children:[Object(b.jsx)(i.b,{className:"home-link",to:"/",children:" \u27ea Home"}),Object(b.jsxs)("div",{className:"RacesPage",children:[Object(b.jsxs)("div",{className:"year-selector",children:[Object(b.jsx)("h5",{children:" Select Year "}),Object(b.jsx)(f,{activeYears:o.activeYears,teamName:p})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"page-heading",children:[" ",p," races in ",v]}),g.map((function(e){return Object(b.jsx)(O,{raceIds:e,race:N.get(e)},e)}))]})]})]})}),N=(c(26),function(e){var t=e.result;return Object(b.jsxs)("div",{className:"ResultCard",children:[Object(b.jsx)("p",{children:t.position}),Object(b.jsx)("p",{children:Object(b.jsx)(i.b,{to:"/teams/".concat(t.constructorName),children:t.constructorName})}),Object(b.jsx)("p",{children:t.driverName}),Object(b.jsx)("p",{children:t.laps}),Object(b.jsx)("p",{children:t.status}),Object(b.jsx)("p",{children:t.time}),Object(b.jsx)("p",{children:t.milliseconds}),Object(b.jsx)("p",{children:t.points})]})}),g=(c(27),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(j.g)().raceId;Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/race/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]);var r=Object.assign([],c),o=Object.assign({},r[0]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(i.b,{className:"home-link",to:"/",children:" \u27ea Home"}),Object(b.jsx)("div",{className:"RaceResultsPage",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"page-heading",children:[" ",o.raceName]}),Object(b.jsxs)("div",{className:"race-detail",children:[Object(b.jsx)("p",{className:"race-date",children:o.date}),Object(b.jsx)("h3",{className:"race-venue",children:o.circuitName}),Object(b.jsxs)("h4",{className:"race-location",children:[o.location,",  ",o.country]}),Object(b.jsxs)("div",{className:"additional-detail",children:[Object(b.jsxs)("p",{children:["lat ",o.lat]}),Object(b.jsxs)("p",{children:["lng ",o.lng]}),Object(b.jsxs)("p",{children:["alt ",o.alt]})]}),Object(b.jsx)("h3",{className:"results-header",children:"Results"})]}),Object(b.jsxs)("div",{className:"cards-header",children:[Object(b.jsx)("p",{children:"Pos"}),Object(b.jsx)("p",{children:"Constructor"}),Object(b.jsx)("p",{children:"Driver"}),Object(b.jsx)("p",{children:"Laps"}),Object(b.jsx)("p",{children:"Status"}),Object(b.jsx)("p",{children:"Time"}),Object(b.jsx)("p",{children:"Milliseconds"}),Object(b.jsx)("p",{children:"Points"})]}),r.map((function(e){return Object(b.jsx)(N,{result:e},e.resultId)}))]})})]})}),w=(c(28),function(e){var t=e.teamName;return Object(b.jsx)("div",{className:"TeamTile",children:Object(b.jsx)("h2",{children:Object(b.jsx)(i.b,{to:"/teams/".concat(t),children:t})})})}),y=(c(29),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/team");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s=Object.assign([],c);return Object(b.jsxs)("div",{className:"HomePage",children:[Object(b.jsxs)("div",{className:"app-name",children:[Object(b.jsx)("p",{id:"dashboard",children:"Dashboard "}),Object(b.jsx)("h2",{children:"Formula 1 World Championship (1950 - 2021)"})]}),Object(b.jsx)("div",{className:"team-grid",children:s.map((function(e){return Object(b.jsx)(w,{teamName:e.constructorName},e.constructorId)}))})]})});var S=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/teams/:teamName/races/:year",element:Object(b.jsx)(v,{})}),Object(b.jsx)(j.a,{path:"/teams/:teamName",element:Object(b.jsx)(p,{})}),Object(b.jsx)(j.a,{path:"/race/:raceId",element:Object(b.jsx)(g,{})}),Object(b.jsx)(j.a,{path:"/",element:Object(b.jsx)(y,{})})]})})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),C()}],[[30,1,2]]]);
//# sourceMappingURL=main.87e593dc.chunk.js.map