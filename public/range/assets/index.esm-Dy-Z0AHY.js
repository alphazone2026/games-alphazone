import{E as J,c as O,j as Q,h as Z,A as m,a2 as ee,L as te,a3 as re,a4 as B,V as ne,e as R,G as D,r as oe}from"./index.esm-DeZXe8rZ.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new Map,H={activated:!1,tokenObservers:[]},ie={initialized:!1,enabled:!1};function u(e){return C.get(e)||{...H}}function se(e,t){return C.set(e,t),C.get(e)}function E(){return ie}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="https://content-firebaseappcheck.googleapis.com/v1",ae="exchangeRecaptchaEnterpriseToken",ce="exchangeDebugToken",S={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},le=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,r,n,o,i){if(this.operation=t,this.retryPolicy=r,this.getWaitDuration=n,this.lowerBound=o,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=o,o>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new m,this.pending.promise.catch(r=>{}),await de(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new m,this.pending.promise.catch(r=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(r){this.retryPolicy(r)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const r=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),r}}}function de(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},d=new J("appCheck","AppCheck",he);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e=!1){var t;return e?(t=self.grecaptcha)==null?void 0:t.enterprise:self.grecaptcha}function v(e){if(!u(e).activated)throw d.create("use-before-activation",{appName:e.name})}function L(e){const t=Math.round(e/1e3),r=Math.floor(t/(3600*24)),n=Math.floor((t-r*3600*24)/3600),o=Math.floor((t-r*3600*24-n*3600)/60),i=t-r*3600*24-n*3600-o*60;let s="";return r&&(s+=b(r)+"d:"),n&&(s+=b(n)+"h:"),s+=b(o)+"m:"+b(i)+"s",s}function b(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I({url:e,body:t},r){const n={"Content-Type":"application/json"},o=r.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&(n["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(t),headers:n};let s;try{s=await fetch(e,i)}catch(h){throw d.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(s.status!==200)throw d.create("fetch-status-error",{httpStatus:s.status});let a;try{a=await s.json()}catch(h){throw d.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw d.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,g=Date.now();return{token:a.token,expireTimeMillis:g+c,issuedAtTimeMillis:g}}function fe(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${F}/projects/${r}/apps/${n}:${ae}?key=${o}`,body:{recaptcha_enterprise_token:t}}}function K(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${F}/projects/${r}/apps/${n}:${ce}?key=${o}`,body:{debug_token:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="firebase-app-check-database",pe=1,k="firebase-app-check-store",z="debug-token";let T=null;function j(){return T||(T=new Promise((e,t)=>{try{const r=indexedDB.open(ge,pe);r.onsuccess=n=>{e(n.target.result)},r.onerror=n=>{var o;t(d.create("storage-open",{originalErrorMessage:(o=n.target.error)==null?void 0:o.message}))},r.onupgradeneeded=n=>{const o=n.target.result;switch(n.oldVersion){case 0:o.createObjectStore(k,{keyPath:"compositeKey"})}}}catch(r){t(d.create("storage-open",{originalErrorMessage:r==null?void 0:r.message}))}}),T)}function ke(e){return q(U(e))}function be(e,t){return W(U(e),t)}function Te(e){return W(z,e)}function me(){return q(z)}async function W(e,t){const n=(await j()).transaction(k,"readwrite"),i=n.objectStore(k).put({compositeKey:e,value:t});return new Promise((s,a)=>{i.onsuccess=l=>{s()},n.onerror=l=>{var c;a(d.create("storage-set",{originalErrorMessage:(c=l.target.error)==null?void 0:c.message}))}})}async function q(e){const r=(await j()).transaction(k,"readonly"),o=r.objectStore(k).get(e);return new Promise((i,s)=>{o.onsuccess=a=>{const l=a.target.result;i(l?l.value:void 0)},r.onerror=a=>{var l;s(d.create("storage-get",{originalErrorMessage:(l=a.target.error)==null?void 0:l.message}))}})}function U(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new te("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e){if(B()){let t;try{t=await ke(e)}catch(r){f.warn(`Failed to read token from IndexedDB. Error: ${r}`)}return t}}function w(e,t){return B()?be(e,t).catch(r=>{f.warn(`Failed to write token to IndexedDB. Error: ${r}`)}):Promise.resolve()}async function we(e){let t;try{t=await me()}catch{}if(t)return t;{const r=crypto.randomUUID();let n=`To use this token for app debugging, register it with your project.

Firebase App Check debug token: ${r}

`;const o=e==null?void 0:e.options.appId,i=e==null?void 0:e.options.projectId;return i&&o?n+=`You can do so in the Firebase Console:
https://console.firebase.google.com/project/${i}/appcheck/apps?selectedAppId=${o}

Or using the Firebase CLI:
firebase appcheck:debugtokens:create ${r} --project ${i} --app ${o}

`:n+=`You will need to add it to your app's App Check settings in the Firebase Console for it to work.

`,n+=`Note: To keep your project secure, please revoke and delete this token using the
Firebase Console or the CLI (\`firebase appcheck:debugtokens:delete\`) when you finish debugging.

Warning: This debug token is a secret and should not be shared or uploaded to source code.

Debug Token Guide: https://firebase.google.com/docs/app-check/web/debug-provider
Firebase CLI install instructions: https://firebase.google.com/docs/cli
`,console.log(n),Te(r).catch(s=>f.warn(`Failed to persist debug token to IndexedDB. Error: ${s}`)),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return E().enabled}async function P(){const e=E();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Ae(e){const t=ee(),r=E();if(r.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;r.enabled=!0;const n=new m;r.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(we(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce={error:"UNKNOWN_ERROR"};function _e(e){return ne.encodeString(JSON.stringify(e),!1)}async function _(e,t=!1,r=!1){const n=e.app;v(n);const o=u(n);let i=o.token,s;if(i&&!p(i)&&(o.token=void 0,i=void 0),!i){const c=await o.cachedTokenPromise;c&&(p(c)?i=c:await w(n,void 0))}if(!t&&i&&p(i))return{token:i.token};let a=!1;if(y())try{const c=await P();o.exchangeTokenPromise||(o.exchangeTokenPromise=I(K(n,c),e.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),a=!0);const g=await o.exchangeTokenPromise;return await w(n,g),o.token=g,{token:g.token}}catch(c){return c.code==="appCheck/throttled"||c.code==="appCheck/initial-throttle"?f.warn(c.message):r&&f.error(c),A(c)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),a=!0),i=await u(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"||c.code==="appCheck/initial-throttle"?f.warn(c.message):r&&f.error(c),s=c}let l;return i?s?p(i)?l={token:i.token,internalError:s}:l=A(s):(l={token:i.token},o.token=i,await w(n,i)):l=A(s),a&&Y(n,l),l}async function ve(e){const t=e.app;v(t);const{provider:r}=u(t);if(y()){const n=await P(),o=K(t,n);o.body.limited_use=!0;const{token:i}=await I(o,e.heartbeatServiceProvider);return{token:i}}else{const{token:n}=await r.getToken(!0);return{token:n}}}function G(e,t,r,n){const{app:o}=e,i=u(o),s={next:r,error:n,type:t};if(i.tokenObservers=[...i.tokenObservers,s],i.token&&p(i.token)){const a=i.token;Promise.resolve().then(()=>{r({token:a.token}),N(e)}).catch(()=>{})}i.cachedTokenPromise.then(()=>N(e))}function X(e,t){const r=u(e),n=r.tokenObservers.filter(o=>o.next!==t);n.length===0&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=n}function N(e){const{app:t}=e,r=u(t);let n=r.tokenRefresher;n||(n=Ie(e),r.tokenRefresher=n),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function Ie(e){const{app:t}=e;return new ue(async()=>{const r=u(t);let n;if(r.token?n=await _(e,!0):n=await _(e),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const r=u(t);if(r.token){let n=r.token.issuedAtTimeMillis+(r.token.expireTimeMillis-r.token.issuedAtTimeMillis)*.5+3e5;const o=r.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,o),Math.max(0,n-Date.now())}else return 0},S.RETRIAL_MIN_WAIT,S.RETRIAL_MAX_WAIT)}function Y(e,t){const r=u(e).tokenObservers;for(const n of r)try{n.type==="EXTERNAL"&&t.error!=null?n.error(t.error):n.next(t)}catch{}}function p(e){return e.expireTimeMillis-Date.now()>0}function A(e){return{token:_e(Ce),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t,r){this.app=t,this.heartbeatServiceProvider=r}_delete(){const{tokenObservers:t}=u(this.app);for(const r of t)X(this.app,r.next);return Promise.resolve()}}function Pe(e,t){return new ye(e,t)}function Re(e){return{getToken:t=>_(e,t),getLimitedUseToken:()=>ve(e),addTokenListener:t=>G(e,"INTERNAL",t),removeTokenListener:t=>X(e.app,t)}}const De="@firebase/app-check",Se="0.13.1",xe="https://www.google.com/recaptcha/enterprise.js";function Ne(e,t){const r=new m,n=u(e);n.reCAPTCHAState={initialized:r};const o=Me(e),i=x(!0);return i?M(e,t,i,o,r):Be(()=>{const s=x(!0);if(!s)throw new Error("no recaptcha");M(e,t,s,o,r)}),r.promise}function M(e,t,r,n,o){r.ready(()=>{Oe(e,t,r,n),o.resolve(r)})}function Me(e){const t=`fire_app_check_${e.name}`,r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function $e(e){v(e);const r=await u(e).reCAPTCHAState.initialized.promise;return new Promise((n,o)=>{const i=u(e).reCAPTCHAState;r.ready(()=>{n(r.execute(i.widgetId,{action:"fire_app_check"}))})})}function Oe(e,t,r,n){const o=r.render(n,{sitekey:t,size:"invisible",callback:()=>{u(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{u(e).reCAPTCHAState.succeeded=!1}}),i=u(e);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:o}}function Be(e){const t=document.createElement("script");t.src=xe+"?render=explicit",t.onload=e,document.head.appendChild(t)}class V{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(t=!1){var o,i,s;Fe(this._throttleData);const r=await $e(this._app).catch(a=>{throw d.create("recaptcha-error")});if(!((o=u(this._app).reCAPTCHAState)!=null&&o.succeeded))throw d.create("recaptcha-error");let n;try{const a=fe(this._app,r);t&&(a.body.limited_use=!0),n=await I(a,this._heartbeatServiceProvider)}catch(a){throw(i=a.code)!=null&&i.includes("fetch-status-error")?(this._throttleData=He(Number((s=a.customData)==null?void 0:s.httpStatus),this._throttleData),d.create("initial-throttle",{time:L(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,n}initialize(t){this._app=t,this._heartbeatServiceProvider=O(t,"heartbeat"),Ne(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof V?this._siteKey===t._siteKey:!1}}function He(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+le,httpStatus:e};{const r=t?t.backoffCount:0,n=re(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}}function Fe(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw d.create("throttled",{time:L(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e=Z(),t){var o;e=Q(e);const r=O(e,"app-check");if(E().initialized||Ae(e),y()&&P().then(i=>{console.log(`Firebase App Check debug token: ${i}`)}),r.isInitialized()){const i=r.getImmediate(),s=r.getOptions();if(s&&!!s.isTokenAutoRefreshEnabled==!!t.isTokenAutoRefreshEnabled&&((o=s.provider)!=null&&o.isEqual(t.provider)))return i;throw d.create("already-initialized",{appName:e.name})}const n=r.initialize({options:t});return Le(e,t.provider,t.isTokenAutoRefreshEnabled),u(e).isTokenAutoRefreshEnabled&&G(n,"INTERNAL",()=>{}),n}function Le(e,t,r=!1){const n=se(e,{...H});n.activated=!0,n.provider=t,n.cachedTokenPromise=Ee(e).then(o=>(o&&p(o)&&(n.token=o,Y(e,{token:o.token})),o)),n.isTokenAutoRefreshEnabled=r&&e.automaticDataCollectionEnabled,!e.automaticDataCollectionEnabled&&r&&f.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="app-check",$="app-check-internal";function ze(){R(new D(Ke,e=>{const t=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat");return Pe(t,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider($).initialize()})),R(new D($,e=>{const t=e.getProvider("app-check").getImmediate();return Re(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),oe(De,Se)}ze();export{V as ReCaptchaEnterpriseProvider,We as initializeAppCheck};
