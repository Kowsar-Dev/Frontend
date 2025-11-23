import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const notesApi = createApi ({
    reducerPath : "api",
    baseQuery : fetchBaseQuery ({
        baseUrl : "url"
    }),
    tagTypes : ["Note"],
    endpoints : (builder) =>({
        getNotes : builder.query({
            query : ()=> "notes",
            providesTags : ["Note"],
        }),
       
        addNote : builder.mutation({
            query : (newNote)=>({
                url : "notes",
                method : "POST",
                body : newNote,
            }),
            invalidatesTags : ["Note"],
        }),
        updateNote : builder.mutation({
            query : ({id, ...updateNote})=>({
                url : `notes/${id}`,
                method : "PATCH",
                body : updateNote,
            }),
            invalidatesTags : ["Note"],

        }),
        deleteNote : builder.mutation({
            query : (id)=>({
                url : `notes/${id}`,
                method : "DELETE"
            }),
            invalidatesTags : ["Note"],
        }),

    }),
});

export const {useGetNotesQuery , useAddNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation} = notesApi;