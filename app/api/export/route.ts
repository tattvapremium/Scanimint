import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text = "", format = "txt" } = await req.json();

  if (format === "html") {
    return new NextResponse(
      `<html><body><pre style="font-family:Arial;white-space:pre-wrap">${escapeHtml(text)}</pre></body></html>`,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  }

  return new NextResponse(text, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="scanimint-resume.txt"',
    },
  });
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}import {NextResponse} from 'next/server';export async function POST(req:Request){const {text='',format='txt'}=await req.json();if(format==='html')return new NextResponse(`<html><body><pre style="font-family:Arial;white-space:pre-wrap">${escapeHtml(text)}</pre></body></html>`,{headers:{'Content-Type':'text/html'}});return new NextResponse(text,{headers:{'Content-Type':'text/plain','Content-Disposition':'attachment; filename="scanimint-resume.txt"'}})}function escapeHtml(s:string){return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
