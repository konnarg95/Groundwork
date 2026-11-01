// Provider-neutral address search. Never put API credentials in index.html.
module.exports = async function handler(req,res) {
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({error:'Method not allowed'});
 const q=typeof req.query.q==='string'?req.query.q.trim():'';
 if(q.length<4||q.length>180)return res.status(400).json({error:'Enter an address between 4 and 180 characters.'});
 // Deliberately no upstream request until commercial licensing and provider credentials are approved.
 return res.status(200).json({status:'awaiting_provider',provider:null,results:[],query:q,message:'Licensed Australian property data is not connected.'});
};
