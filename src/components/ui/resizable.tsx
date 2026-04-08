import * as ResizablePrimitive from "react-resizable-panels";

// Updated for react-resizable-panels v4.x+
// The API changed from PanelGroup to Group, and PanelResizeHandle to Separator

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.Group>) => (
  <ResizablePrimitive.Group
    className={className}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Separator>) => (
  <ResizablePrimitive.Separator
    className={className}
    {...props}
  />
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
