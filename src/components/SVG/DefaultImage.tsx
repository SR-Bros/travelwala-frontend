import React from "react";
import { SvgIcon } from "@mui/material";

function DefaultImage(props: any) {
  return (
    <SvgIcon {...props} viewBox="0 0 30 30">
      <path
        d="M2.8125 0H27.1875C28.7408 0 30 1.25918 30 2.8125V27.1875C30 28.7408 28.7408 30 27.1875 30H2.8125C1.25918 30 0 28.7408 0 27.1875V2.8125C0 1.25918 1.25918 0 2.8125 0ZM1.875 27.1875C1.875 27.7053 2.29471 28.125 2.8125 28.125H27.1875C27.7053 28.125 28.125 27.7053 28.125 27.1875V2.8125C28.125 2.29471 27.7053 1.875 27.1875 1.875H2.8125C2.29471 1.875 1.875 2.29471 1.875 2.8125V27.1875Z"
        fill="currentColor"
      />
      <path
        d="M9.64686 16.2094C10.0125 15.8459 10.6031 15.8459 10.9687 16.2094L13.125 18.3657L17.1469 14.3438C17.5125 13.9803 18.103 13.9803 18.4687 14.3438L25.0312 20.9063C25.3937 21.276 25.3879 21.8696 25.0182 22.232C24.8462 22.4007 24.6159 22.4967 24.375 22.5001H5.62498C5.10725 22.503 4.68508 22.0858 4.68204 21.568C4.68057 21.3161 4.78053 21.0743 4.95936 20.8969L9.64686 16.2094Z"
        fill="currentColor"
      />
      <path
        d="M12.1875 13.125C10.6342 13.125 9.375 11.8658 9.375 10.3125C9.375 8.7592 10.6342 7.5 12.1875 7.5C13.7408 7.5 15 8.7592 15 10.3125C15 11.8658 13.7408 13.125 12.1875 13.125Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export default DefaultImage;
