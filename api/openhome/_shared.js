const BASE=process.env.SUPABASE_URL||'https://jduqrldjrgbivvrwlxtp.supabase.co';
const SECRET=process.env.SUPABASE_SERVICE_ROLE_KEY;
const PUB=process.env.SUPABASE_ANON_KEY||process.env.SUPABASE_PUBLISHABLE_KEY;
export function configured(){return !!(SECRET&&PUB)}
export function credentialInfo(){
 let keyType=SECRET?.startsWith('sb_secret_')?'supabase_secret':SECRET?.startsWith('eyJ')?'legacy_jwt':SECRET?'unexpected_format':'missing';
 let jwtRole='not_applicable';
 if(keyType==='legacy_jwt')try{const payload=SECRET.split('.')[1];const normalized=payload.replace(/-/g,'+').replace(/_/g,'/');jwtRole=JSON.parse(Buffer.from(normalized,'base64').toString('utf8')).role||'missing'}catch{jwtRole='unreadable'}
 return {keyType,jwtRole,projectHost:(()=>{try{return new URL(BASE).hostname}catch{return 'invalid_url'}})()};
}
export function logDbError(e,route){console.error('[CampaignIQ QR]',JSON.stringify({route,code:e.code||null,httpStatus:e.httpStatus||null,dbMessage:e.dbMessage||null,credential:credentialInfo()}))}
export async function db(path,opts={}){
 const r=await fetch(BASE+'/rest/v1/'+path,{...opts,headers:{'apikey':SECRET,'Authorization':'Bearer '+SECRET,'Content-Type':'application/json',...(opts.headers||{})}});
 const t=await r.text();let data;try{data=t?JSON.parse(t):null}catch{data=null}
 if(!r.ok){const e=new Error('Database request failed');e.code=data?.code;e.dbMessage=data?.message||('HTTP '+r.status);e.httpStatus=r.status;throw e}return data;
}
export async function user(req){const token=(req.headers.authorization||'').replace(/^Bearer /i,'');if(!token)return null;const r=await fetch(BASE+'/auth/v1/user',{headers:{'apikey':PUB,'Authorization':'Bearer '+token}});if(!r.ok)return null;const d=await r.json();return d?.id||null}
export function reply(res,status,obj){res.status(status).setHeader('Cache-Control','no-store').json(obj)}
export function uuid(v){return typeof v==='string'&&/^[a-f0-9-]{36}$/i.test(v)}
