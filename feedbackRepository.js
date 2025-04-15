const kv = await Deno.openKv();

const getFeedbackCount = async (value) => {
  const result = await kv.get(["feedbacks", value.toString()]);
  return result.value ?? 0;
};

const incrementFeedbackCount = async (value) => {
  const currentCount = await getFeedbackCount(value);
  const newCount = currentCount + 1;
  await kv.set(["feedbacks", value.toString()], newCount);
  return newCount;
};

export { getFeedbackCount, incrementFeedbackCount };