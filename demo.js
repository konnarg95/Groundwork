// Fictional example only; not an actual Australian property or a valuation.
module.exports = function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({error:'Method not allowed'});
 return res.status(200).json({property:{id:'fictional-demo-001',address:'10 Example Crescent, Sampleville QLD 4000',source:'FICTIONAL_DEMO',verified:false,isDemo:true,attributes:{landAreaSqm:600,dwellingAreaSqm:180,bedrooms:4,bathrooms:2,parking:2},salesHistory:[],comparables:[]}});
};
