"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

export const Providers = ({ children }: { children: ReactNode }) => {
    const client = new QueryClient()
    return <QueryClientProvider client={client} >
        {children}
    </QueryClientProvider>
}