import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchContacts,
    createContact,
    deleteContact,
} from '@/utils/api';
import { Contact, AddContactDto } from '@/types/user';


export const useContacts = (ownerId: number) => {
    return useQuery<Contact[], Error>({
        queryKey: ['contacts', ownerId],
        queryFn: () => fetchContacts(ownerId),
        enabled: !!ownerId,
    });
};

export const useCreateContact = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (dto: AddContactDto) => createContact(dto),
        onSuccess: (newContact) => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });
};


export const useDeleteContact = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteContact(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });
};