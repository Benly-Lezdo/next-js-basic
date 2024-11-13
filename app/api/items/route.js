export async function GET(req) {
  const type = req.nextUrl.searchParams.get("type");
  console.log("type", type);
  return Response.json([{ name: "xxx" }, { name: "yyy" }, { name: "zzz" }]);
}

export async function POST(req) {
  const data = await req.json();
  return Response.json({ message: "Post successful" });
}
