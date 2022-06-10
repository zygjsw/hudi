"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[46103],{39360:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(67294),l=a(41217),r=a(76200),i=a(41916),m=a(95999),s=a(39960);var o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},c=a(63616),g=a(51575);var u=function(e){var t,a=e.content,m=e.sidebar,s=a.frontMatter,u=a.assets,d=a.metadata,p=d.title,v=d.description,b=d.nextItem,h=d.prevItem,E=d.date,f=d.tags,N=d.authors,_=s.hide_table_of_contents,P=s.keywords,Z=s.toc_min_heading_level,k=s.toc_max_heading_level,T=null!=(t=u.image)?t:s.image;return n.createElement(r.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:m,toc:!_&&a.toc&&a.toc.length>0?n.createElement(g.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:k}):void 0},n.createElement(l.Z,{title:p,description:v,keywords:P,image:T},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:E}),N.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:N.map((function(e){return e.url})).filter(Boolean).join(",")}),f.length>0&&n.createElement("meta",{property:"article:tag",content:f.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:u,metadata:d,isBlogPostPage:!0},n.createElement(a,null)),(b||h)&&n.createElement(o,{nextItem:b,prevItem:h}))}},86753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(95999),r=a(87462),i=a(63366),m=a(86010),s="iconEdit_mS5F",o=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,o);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},g=a(63616);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:g.kM.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},51575:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(63366),r=a(67294),i=a(86010),m=a(25002),s="tableOfContents_vrFS",o=["className"];var c=function(e){var t=e.className,a=(0,l.Z)(e,o);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(m.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(87462),l=a(63366),r=a(67294),i=a(63616),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function o(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,g=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,d=void 0===u?void 0:u,p=e.minHeadingLevel,v=e.maxHeadingLevel,b=(0,l.Z)(e,m),h=(0,i.LU)(),E=null!=p?p:h.tableOfContents.minHeadingLevel,f=null!=v?v:h.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),_=(0,r.useMemo)((function(){if(g&&d)return{linkClassName:g,linkActiveClassName:d,minHeadingLevel:E,maxHeadingLevel:f}}),[g,d,E,f]);return(0,i.Si)(_),r.createElement(s,(0,n.Z)({toc:N,className:o,linkClassName:g},b))}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(86010),r=a(39960),i="tag_WK-t",m="tagRegular_LXbV",s="tagWithCount_S5Zl";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[m]=!c,t[s]=c,t))},o,c&&n.createElement("span",null,c))}},20062:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(86010),r=a(95999),i=a(7774),m="tags_NBRY",s="tag_F03v";function o(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}},76200:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(63366),l=a(67294),r=a(86010),i=a(92582),m=a(39960),s="sidebar_q+wC",o="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",g="sidebarItem_cjdF",u="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",p=a(95999);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))}))))}var b=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,a=e.toc,m=e.children,s=(0,n.Z)(e,b),o=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-2":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&l.createElement("div",{className:"col col--2"},a))))}},41916:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),l=a(86010),r=a(3905),i=a(95999),m=a(39960),s=a(44996),o=a(63616),c=a(67707),g=a(86753),u={blogPostTitle:"blogPostTitle_RC3s",blogPostPageTile:"blogPostPageTile_BsLs",blogPostData:"blogPostData_A2Le",blogPostDetailsFull:"blogPostDetailsFull_2lop","blog-list-page":"blog-list-page_Jl5M",container:"container_EXwA",row:"row_DZ33",authorsList:"authorsList_svFt",authorsListLong:"authorsListLong_kl47",authorTimeTags:"authorTimeTags_oN88",tag:"tag_MgfY",greyLink:"greyLink_9KrM",blogPostText:"blogPostText_jBA8",blogPostAuthorsList:"blogPostAuthorsList_dlEG"};a(20062);var d=a(7774);var p=function(e){var t,a,p,v,b,h=(v=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,s.C)().withBaseUrl,f=e.children,N=e.frontMatter,_=e.assets,P=e.metadata,Z=e.truncated,k=e.isBlogPostPage,T=void 0!==k&&k,L=P.date,w=P.formattedDate,C=P.permalink,y=P.tags,A=P.readingTime,x=P.title,I=P.editUrl,F=P.authors,B=null!=(t=null!=(a=_.image)?a:N.image)?t:"/assets/images/hudi.png",H=y.length>0;return n.createElement("article",{className:T?void 0:"blog-list-item",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(b=T?"h1":"h2",n.createElement("header",null,!T&&B&&n.createElement("div",{className:"col blogThumbnail",itemProp:"blogThumbnail"},n.createElement(m.Z,{itemProp:"url",to:C},n.createElement("img",{src:E(B,{absolute:!0})}))),n.createElement(b,{className:u.blogPostTitle,itemProp:"headline"},T?n.createElement(b,{className:u.blogPostPageTitle,itemProp:"headline"},x):n.createElement(m.Z,{itemProp:"url",to:C},n.createElement(b,{className:u.blogPostTitle,itemProp:"headline"},x))),0===F.length?n.createElement("div",{className:(0,l.Z)(u.authorTimeTags,"row margin-top--sm margin-bottom--sm 'margin-vert--md'")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},w)):n.createElement(n.Fragment,null,T?n.createElement("div",{className:(0,l.Z)(u.blogPostText,"row margin-top--sm margin-bottom--sm 'margin-vert--md'")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},w),F.map((function(e,t){return n.createElement("div",{key:t},n.createElement("div",{className:"avatar margin-bottom--sm"},e.name&&n.createElement("div",null,n.createElement(n.Fragment,null,0!==t?t!==F.length-1?",":"and":""),n.createElement(m.Z,{href:e.url,itemProp:"url"},n.createElement("span",{className:(0,l.Z)(u.blogPostAuthorsList),itemProp:"name"},e.name)))))}))):n.createElement("div",{className:(0,l.Z)(u.authorTimeTags,"row margin-top--sm margin-bottom--sm 'margin-vert--md'")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},w," by"),F.map((function(e,t){return n.createElement("div",{key:t},n.createElement("div",{className:"avatar margin-bottom--sm"},e.name&&n.createElement("div",null,n.createElement(n.Fragment,null,0!==t?t!==F.length-1?",":"and":""),n.createElement(m.Z,{href:e.url,itemProp:"url"},n.createElement("span",{className:(0,l.Z)(u.authorsList),itemProp:"name"},e.name)))))})))),n.createElement("div",{className:(0,l.Z)(u.blogPostData,"margin-vert--md")},T&&n.createElement(n.Fragment,null,void 0!==A&&n.createElement(n.Fragment,null,h(A)))),y.length>0&&n.createElement(n.Fragment,null,n.createElement("ul",{className:(0,l.Z)(u.tags,u.authorTimeTags,"padding--none","margin-left--sm")},y.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u.tag},n.createElement(d.Z,{className:(0,l.Z)(u.greyLink),name:t,permalink:a}))})))))),T&&n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:c.Z},f)),(H||Z)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(p={},p[u.blogPostDetailsFull]=T,p))},T&&I&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(g.Z,{editUrl:I}))))}}}]);