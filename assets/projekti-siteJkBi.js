import{_ as i,e as n,f as s,g as a,i as e,F as p,s as c,j as l,k as d,t as _}from"./index-4nVOk3vD.js";const f={data(){return{projects:[{id:1,name:"63 sqm APARTMENT",image:"projects1.webp"},{id:2,name:"140 sq.m. VILLA",image:"projects2.webp"},{id:3,name:"75 sqm APARTMENT",image:"projects3.webp"},{id:4,name:"82 sqm APARTMENT",image:"projects4.webp"},{id:5,name:"45 sqm APARTMENT",image:"projects5.webp"},{id:6,name:"30 sqm APARTMENT",image:"projects6.webp"}]}},methods:{getImagePath(o){return`./${o}`}}},u=e("h1",{class:"pt-52 pl-24 pb-16 font-bold text-[18px] import_font text-size max-[520px]:pt-32 max-[520px]:pl-4"},"PROJECTS:",-1),h={class:"w-full flex justify-center items-center"},g={class:"flex flex-wrap w-[90%] items-start justify-center text-[22px] max-[360px]:w-auto"},w=["src"],j={class:"pt-4 text-hover text-[22px] import_font text-size_pr"};function A(o,T,b,P,r,m){const x=n("router-link");return s(),a(p,null,[u,e("div",h,[e("ul",g,[(s(!0),a(p,null,c(r.projects,t=>(s(),a("li",{key:t.id,class:"mx-[15px] mb-[30px] max-[360px]:mx-2 hovered_card max-[360px]:w-[40%]"},[l(x,{to:{name:"project-details",params:{id:t.id}},class:"flex justify-start items-start flex-col max-[985px]:w-[200px] max-[555px]:w-[100%]"},{default:d(()=>[e("img",{src:m.getImagePath(t.image),alt:"Project Image",class:"w-[413px] max-h-[270px] h-[270px] object-cover max-[985px]:h-[700px] max-[360px]:h-[200px]"},null,8,w),e("p",j,_(t.name),1)]),_:2},1032,["to"])]))),128))])])],64)}const E=i(f,[["render",A]]);export{E as default};