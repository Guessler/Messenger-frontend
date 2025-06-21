declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_MINIO_BUCKET_URL: string;
        }
    }
}

export const env = {
    MINIO_BUCKET_URL: process.env.NEXT_PUBLIC_MINIO_BUCKET_URL,
};