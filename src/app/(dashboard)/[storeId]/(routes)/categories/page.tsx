import prisma from "@/db/client";
import { CategoryColumn } from "./components/columns";  
import { CategoriesClient } from "./components/CategoriesClient";
import { format } from "date-fns";

type Props = {
  params: { storeId: string };
};

const CategoriesPage = async ({ params: { storeId } }: Props) => {
  const categories = await prisma.category.findMany({
    where: {
      storeId,
    },
    include: {
      billboard: true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel : item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories}/>
      </div>
    </div>
  );
};

export default CategoriesPage;
