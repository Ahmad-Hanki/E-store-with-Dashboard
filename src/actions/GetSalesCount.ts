import prisma from "@/db/client";

export const getSalesCountt = async (storeId: string) => {
  const salesCount = await prisma.order.count({
    where: {
      storeId,
      isPaid: true
    },
  });

  return salesCount;
};