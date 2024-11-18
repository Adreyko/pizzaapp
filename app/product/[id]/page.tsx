export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log(id);
  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}
