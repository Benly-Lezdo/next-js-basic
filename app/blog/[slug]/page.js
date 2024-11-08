"use client";

import React, { use } from "react";

export default function page({ params }) {
  const resolvedParams = use(params);

  return (
    <>
      <div>Dynamic page: {resolvedParams?.slug} </div>
    </>
  );
}
