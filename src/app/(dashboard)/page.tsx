import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { CreateWorkspaceForm } from "@/features/worspaces/components/create-workspace-form";

export default async function Home() {
	const user = await getCurrent();

	if (!user) {
		redirect("/sign-in")
	}

	return (
    	<div className="p-4 bg-neutral-400 h-full w-full">
			<CreateWorkspaceForm />
    	</div>
  	);
};
