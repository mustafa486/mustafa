import { dbConnect } from '../../../lib/mongodb';
import Feedback from '../../../models/feedback';

export async function POST(req) {
  await dbConnect();
  const { name, email, message } = await req.json();

  try {
    const feedback = await Feedback.create({ name, email, message });
    return new Response(JSON.stringify({ success: true, data: feedback }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const feedbacks = await Feedback.find({});
    return new Response(JSON.stringify({ success: true, data: feedbacks }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
