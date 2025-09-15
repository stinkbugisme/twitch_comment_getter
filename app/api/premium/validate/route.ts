import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE!
);

// CORS headers for extension
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  try {
    const { license_key, device_id, device_info } = await request.json();

    if (!license_key || !device_id) {
      return NextResponse.json(
        { valid: false, error: 'Missing required fields' },
        { status: 400, headers: corsHeaders }
      );
    }

    // validate_license_key関数を呼び出し
    const { data, error } = await supabase.rpc('validate_license_key', {
      p_license_key: license_key,
      p_device_id: device_id,
      p_device_info: device_info || {}
    });

    if (error) {
      console.error('Validation error:', error);
      return NextResponse.json(
        { valid: false, error: 'Validation failed' },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(data, { headers: corsHeaders });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { valid: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}