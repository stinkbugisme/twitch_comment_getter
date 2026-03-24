import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST() {
  return NextResponse.json(
    { valid: false, error: 'This endpoint has been deprecated. Please update your extension to the latest version.' },
    { status: 410, headers: corsHeaders }
  );
}
