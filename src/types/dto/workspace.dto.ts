export interface CreateWorkspaceDto {
    name: string;
    ownerId: number;   
}
export interface Workspace {
    id: number;
    name: string;
    ownerId: number;
}
