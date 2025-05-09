// Remove "use client" - this needs to be a server component
import React from "react";


// Import necessary client components
import ClientPage from "./client";

// This is a server component
export default async function Page({ params }: { params: { id: string } }) {
  // Extract the id
  const { id } = params;
  
  // Here you could fetch server-side data if needed
  // const project = await fetchProject(id);
  
  // Optionally check if the project exists
  // if (!project) redirect("/projects");
  
  // Render the client component with the id
  return <ClientPage id={id} />;
}