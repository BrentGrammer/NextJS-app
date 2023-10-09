import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

// generateMetaData receives the same params your component does
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  // fetch something from api - you can make the same request here as NextJS will dedup these automatically
  const req = await fetch(`http://localhost:3000/api/users/${id}`);
  const user = await req.json();

  // return the metadata object
  return {
    title: user.name,
    description: `This is the page for ${user.id}`,
    //...
  };
}

const UserDetailPage = async ({ params: { id } }: Props) => {
  const req = await fetch(`http://localhost:3000/api/users/${id}`);
  const user = await req.json();

  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  );
};

export default UserDetailPage;
