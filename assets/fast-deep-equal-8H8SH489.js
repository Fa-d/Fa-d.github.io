var i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function s(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var l=function o(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var f,t,n;if(Array.isArray(e)){if(f=e.length,f!=r.length)return!1;for(t=f;t--!==0;)if(!o(e[t],r[t]))return!1;return!0}if(e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(t of e.entries())if(!r.has(t[0]))return!1;for(t of e.entries())if(!o(t[1],r.get(t[0])))return!1;return!0}if(e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(t of e.entries())if(!r.has(t[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(f=e.length,f!=r.length)return!1;for(t=f;t--!==0;)if(e[t]!==r[t])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(n=Object.keys(e),f=n.length,f!==Object.keys(r).length)return!1;for(t=f;t--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[t]))return!1;for(t=f;t--!==0;){var u=n[t];if(!(u==="_owner"&&e.$$typeof)&&!o(e[u],r[u]))return!1}return!0}return e!==e&&r!==r};const c=s(l);export{i as c,c as e,s as g};
