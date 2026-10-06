import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDemonstrationCatalog() {
  const category = await prisma.productCategory.upsert({
    where: { slug: "demo-category" },
    update: { name: "Demo category", description: "Synthetic seed record; replace before production." },
    create: { name: "Demo category", slug: "demo-category", description: "Synthetic seed record; replace before production." },
  });
  const area = await prisma.therapeuticArea.upsert({
    where: { slug: "demo-area" },
    update: { name: "Demo area", description: "Synthetic seed record; not a real clinical category." },
    create: { name: "Demo area", slug: "demo-area", description: "Synthetic seed record; not a real clinical category." },
  });
  await prisma.product.upsert({
    where: { slug: "demo-product-placeholder" },
    update: { published: false },
    create: {
      slug: "demo-product-placeholder",
      tradeName: "DEMO ONLY — Product placeholder",
      genericName: "Synthetic demonstration record",
      activeIngredient: "Not applicable — placeholder",
      description: "Synthetic seed content only. This is not a medicine, treatment, or approved pharmaceutical product.",
      strength: "Not applicable",
      dosageForm: "Placeholder",
      packaging: "Not applicable",
      categoryId: category.id,
      therapeuticAreaId: area.id,
      published: false,
    },
  });
}

seedDemonstrationCatalog()
  .catch((error: unknown) => {
    console.error("Failed to seed demonstration catalog.", error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
