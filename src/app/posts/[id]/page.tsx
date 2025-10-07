interface PageProps {
  params: {
    id: number;
  };
}

async function page({params}: PageProps) {
  const {id} = await params;
  console.log(id);

  return (
    <div>
      <div>page detail</div>
    </div>
  );
}

export default page;
