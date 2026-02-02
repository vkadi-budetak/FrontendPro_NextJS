import { eq, desc } from "drizzle-orm";
import { db } from "@/db";
import { realEstates } from "@/db/schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { redirect } from "next/navigation";

export async function getUserRealEstates(userId: number) {
  return db
    .select()
    .from(realEstates)
    .where(eq(realEstates.userId, userId))
    .orderBy(desc(realEstates.createdAt));
}

export default async function RealEstatesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const realEstates = await getUserRealEstates(session.user.id!);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">My real estates</h1>

      {realEstates.length === 0 && (
        <p className="text-muted-foreground">You have no real estates yet</p>
      )}

      <ul className="space-y-3">
        {realEstates.map((estate) => (
          <li key={estate.id} className="rounded border p-4 space-y-1">
            <h2 className="font-medium">{estate.title}</h2>
            <p className="text-sm text-muted-foreground">{estate.address}</p>
            <p className="font-semibold">${estate.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
