import { Link } from "@/lib/router-events";
import React from "react";

const BreadCrumb = ({
  items,
}: {
  items: {
    name: string;
    slug: string;
  }[];
}) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.slug}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumb;
