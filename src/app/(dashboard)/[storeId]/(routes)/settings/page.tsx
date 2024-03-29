import prisma from "@/db/client";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SettingsForm from "./components/SettingsForm";

const settingsPage = async ({
  params: { storeId },
}: {
  params: { storeId: string };
}) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const store = await prisma.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) redirect("/");

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm  initialData={store}/>
      </div>
    </div>
  );
};

export default settingsPage;
