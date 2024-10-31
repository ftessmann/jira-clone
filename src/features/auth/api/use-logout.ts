import { InferResponseType } from "hono";

import { 
    useMutation, 
    useQueryClient 
} from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<typeof client.api.auth.login["$post"]>;

export const useLogout = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation<
        ResponseType,
        Error
    >({
        mutationFn: async () => {
            const response = await client.api.auth.logout["$post"]();
            return await response.json()
        },
        // force the invalidation of the current client
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["current"]})
        }
    });

    return mutation;
};