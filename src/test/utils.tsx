import type React from "react";
import { SWRConfig } from "swr";

export const withCleanSWRCache = ({
  children,
}: React.PropsWithChildren<JSX.Element>) => (
  <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
);
