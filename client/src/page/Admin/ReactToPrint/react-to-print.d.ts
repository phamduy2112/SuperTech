declare module "react-to-print" {
  import React from "react";

  export interface ReactToPrintProps {
    trigger: () => React.ReactNode;
    content: () => HTMLElement | null | React.RefObject<HTMLElement>;
  }

  const ReactToPrint: React.ComponentType<ReactToPrintProps>;
  export default ReactToPrint;
}
