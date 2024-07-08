"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "@/libs/redux/store";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
