import { Editor } from "@tinymce/tinymce-react";
import React from "react";
import { Controller } from "react-hook-form";
import useTheme from "../contexts/theme";

function RTE({ name, label, defaultValue = "", control }) {
    const {theme} = useTheme()
    
    return (
        <div className="w-full mb-4">
            {label && <p className="inline-block">{label}</p>}

            <Controller
                name={name || 'content'}
                control={control}
                render={(({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        apiKey="94zkiaeppdiehipmxj0nkckj2us94ywbkbadjt1tvz1190s8"
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "anchor",
                                "autolink",
                                "preview",
                                "searchreplace",
                                "code",
                                "fullscreen",
                                "media",
                                "table",
                                "visualblocks",
                                "lists",
                                "link",
                                "image",
                                "wordcount",
                                "help",
                                "charmap",
                                "advlist",
                                "insertdatetime"
                            ],
                            toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            
                        }}
                        onEditorChange={onChange}
                    />
                ))}
            />
        </div>
    )
}

export default RTE