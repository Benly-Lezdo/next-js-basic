export async function GET() {
  return Response.json([{ name: "xx" }, { name: "yy" }, { name: "zz" }]);
}

export async function POST() {
  return Response.json({ message: "Post successful" });
}
