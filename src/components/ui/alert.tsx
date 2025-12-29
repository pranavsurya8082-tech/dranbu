import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva("relative rounded-lg border", {
  variants: {
    variant: {
      default: "border-border bg-background",
      warning: "border-amber-500/50 text-amber-600",
      error: "border-red-500/50 text-red-600",
      success: "border-emerald-500/50",
      info: "border-blue-500/50 text-blue-600",
      destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    },
    size: {
      sm: "px-4 py-3",
      lg: "p-4",
    },
    isNotification: {
      true: "z-[100] max-w-[400px] bg-background shadow-lg shadow-black/5",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    isNotification: false,
  },
});

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  action?: React.ReactNode;
  layout?: "row" | "complex";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      size,
      isNotification,
      icon,
      action,
      layout = "row",
      children,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, size, isNotification }), className)}
      {...props}
    >
      {layout === "row" ? (
        <div className="flex gap-2">
          <div className="flex grow gap-3">
            {icon && <span className="mt-0.5 shrink-0 text-foreground">{icon}</span>}
            {children}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {icon && children ? (
            <div className="flex grow gap-3">
              {icon}
              <div className="flex grow flex-col gap-2">{children}</div>
            </div>
          ) : (
            <div className="flex grow gap-3">
              {icon && <span className="mt-0.5 shrink-0 text-foreground">{icon}</span>}
              {children}
            </div>
          )}
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
    </div>
  ),
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

const AlertContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grow", className)}
    {...props}
  />
));
AlertContent.displayName = "AlertContent";

export { Alert, AlertTitle, AlertDescription, AlertContent };
