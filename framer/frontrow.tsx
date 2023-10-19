import type { ComponentType } from "react";

// Learn more: https://www.framer.com/docs/guides/overrides/
export const someCssOverride = (Component): ComponentType => {
  return (props) => {
    return (
      <Component
        {...props}
        style={{
          background: "rgb(20, 111, 127, .10)",
          padding: "16px",
          borderRadius: "6px",
        }}
      />
    )
  }
}
