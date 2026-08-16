import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";
import { getProductById, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
