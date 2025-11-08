export function GET() {
  const user = {
    name: "Sopia Johnson",
    image: "/profile.png",
  };
  return response.json(user);
}
