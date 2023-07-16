import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createOrRetriveACustomer } from '@/libs/supabaseAdmin';
import { getUrl } from '@/libs/helpers';
import { stripe } from '@/libs/stripe';

export async function POST() {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const customer = await createOrRetriveACustomer({
      uuid: user?.id || '',
      email: user?.email || '',
    });
    if (!customer) throw new Error('Could not get customer');
    const { url } = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${getUrl()}/account`,
    });
    return NextResponse.json({ url });
  } catch (error) {
    console.log(error);
    return new NextResponse(`Internal Error`, { status: 500 });
  }
}
