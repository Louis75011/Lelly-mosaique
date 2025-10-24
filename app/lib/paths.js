export const ASSET_BASE='/images';export const asset=(p)=>`${ASSET_BASE}${p.startsWith('/')?'':'/'}${p}`;export const brand=(f)=>asset(`branding/${f}`);export const hero=(f)=>asset(`hero/${f}`);
