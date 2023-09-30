"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
/**
 *
 * install next-cloudinary, setup account on cloudinary with install instructions
 * https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript/lectures/49120428
   
You can customize the upload widget: https://demo.cloudinary.com/uw/#/
*/

interface CloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {/* show the image after uploading it using the public id set in upload success callback*/}
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="product image" />
      )}
      <CldUploadWidget
        uploadPreset="ci8qfimq"
        options={{
          // set your options at https://demo.cloudinary.com/uw/#/ and look at the code tab for how to set these
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
