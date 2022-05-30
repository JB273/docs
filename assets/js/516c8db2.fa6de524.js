"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[852],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var o=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],i={},s="Setting Up A Celestia Consensus Full Node",u={unversionedId:"nodes/consensus-full-node",id:"nodes/consensus-full-node",title:"Setting Up A Celestia Consensus Full Node",description:"Consensus Full Nodes allow you to sync blockchain history in the Celestia",source:"@site/docs/nodes/consensus-full-node.md",sourceDirName:"nodes",slug:"/nodes/consensus-full-node",permalink:"/nodes/consensus-full-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/consensus-full-node.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Setting Up A Celestia Validator Node",permalink:"/nodes/validator-node"},next:{title:"Data Availability",permalink:"/category/data-availability"}},p={},c=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setting Up Your Consensus Full Node",id:"setting-up-your-consensus-full-node",level:2},{value:"Setup The Dependencies",id:"setup-the-dependencies",level:3},{value:"Deploying The Celestia App",id:"deploying-the-celestia-app",level:2},{value:"Install Celestia App",id:"install-celestia-app",level:3},{value:"Setup the P2P Networks",id:"setup-the-p2p-networks",level:3},{value:"Configure Pruning",id:"configure-pruning",level:3},{value:"Reset Network",id:"reset-network",level:3},{value:"Optional: Quick-Sync with Snapshot",id:"optional-quick-sync-with-snapshot",level:3},{value:"Start the Celestia App",id:"start-the-celestia-app",level:3},{value:"Optional: Configure For RPC Endpoint",id:"optional-configure-for-rpc-endpoint",level:3},{value:"Start the Celestia-App with SystemD",id:"start-the-celestia-app-with-systemd",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setting-up-a-celestia-consensus-full-node"},"Setting Up A Celestia Consensus Full Node"),(0,l.kt)("p",null,"Consensus Full Nodes allow you to sync blockchain history in the Celestia\nConsensus Layer."),(0,l.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,l.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nConsensus Full Node:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,l.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,l.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,l.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,l.kt)("h2",{id:"setting-up-your-consensus-full-node"},"Setting Up Your Consensus Full Node"),(0,l.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,l.kt)("h3",{id:"setup-the-dependencies"},"Setup The Dependencies"),(0,l.kt)("p",null,"Follow the instructions on installing the dependencies ",(0,l.kt)("a",{parentName:"p",href:"../../developers/environment"},"here"),"."),(0,l.kt)("h2",{id:"deploying-the-celestia-app"},"Deploying The Celestia App"),(0,l.kt)("p",null,"This section describes part 1 of Celestia Validator Node setup:\nrunning a Celestia App daemon with an internal Celestia Core node."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Make sure you have at least 100+ Gb of free space to safely install+run\nthe Validator Node.  ")),(0,l.kt)("h3",{id:"install-celestia-app"},"Install Celestia App"),(0,l.kt)("p",null,"Follow the tutorial on installing Celestia App ",(0,l.kt)("a",{parentName:"p",href:"../../developers/celestia-app"},"here"),"."),(0,l.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P Networks"),(0,l.kt)("p",null,"For this section of the guide, select the network you want to connect to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/nodes/mamaki-testnet#setup-p2p-network"},"Mamaki"))),(0,l.kt)("p",null,"After that, you can proceed with the rest of the tutorial."),(0,l.kt)("h3",{id:"configure-pruning"},"Configure Pruning"),(0,l.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,l.kt)("h3",{id:"reset-network"},"Reset Network"),(0,l.kt)("p",null,"This will delete all data folders so we can start fresh:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app\n")),(0,l.kt)("h3",{id:"optional-quick-sync-with-snapshot"},"Optional: Quick-Sync with Snapshot"),(0,l.kt)("p",null,"Syncing from Genesis can take a long time, depending on your hardware. Using\nthis method you can synchronize your Celestia node very quickly by downloading\na recent snapshot of the blockchain. If you would like to sync from the Genesis,\nthen you can skip this part."),(0,l.kt)("p",null,"If you want to use snapshot, determine the network you would like to sync\nto from the list below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/nodes/mamaki-testnet#quick-sync-with-snapshot"},"Mamaki"))),(0,l.kt)("h3",{id:"start-the-celestia-app"},"Start the Celestia App"),(0,l.kt)("p",null,"In order to start your consensus full node, run the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\n")),(0,l.kt)("p",null,"This will let you sync the Celestia blockchain history."),(0,l.kt)("h3",{id:"optional-configure-for-rpc-endpoint"},"Optional: Configure For RPC Endpoint"),(0,l.kt)("p",null,"You can configure your Consensus Full Node to be a public RPC endpoint\nand listen to any connections from Data Availability Nodes in order to\nserve requests for the Data Availability API ",(0,l.kt)("a",{parentName:"p",href:"../../developers/node-tutorial"},"here"),"."),(0,l.kt)("p",null,"Note that you would need to ensure port 9090 is open for this."),(0,l.kt)("p",null,"Run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'EXTERNAL_ADDRESS=$(wget -qO- eth0.me)\nsed -i.bak -e "s/^external-address = \\"\\"/external-address = \\"$EXTERNAL_ADDRESS:26656\\"/" $HOME/.celestia-app/config/config.toml\nsed -i \'s#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:26657"#g\' ~/.celestia-app/config/config.toml\n')),(0,l.kt)("p",null,"Restart ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-appd")," in the previous step to load those configs."),(0,l.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the Celestia-App with SystemD"),(0,l.kt)("p",null,"Follow the tutorial on setting up Celestia-App as a background process\nwith SystemD ",(0,l.kt)("a",{parentName:"p",href:"../nodes/systemd#start-the-celestia-app-with-systemd"},"here"),"."))}h.isMDXComponent=!0}}]);